import React, { useState } from "react";

export function useRod(reactor) {
    if (!(reactor instanceof Reactor)) {
        throw "reactor should be a Reactor Class";
    }

    const [_, setValue] = useState(0);
    let forceUpdate = () => setValue(value => value + 1);
    let [reactorRod] = useState(() => {
        let subscriber = new Reactor.FunctionalComponentSubject(forceUpdate);
        let data = reactor.useRod(subscriber);
        subscriber.componentDidMount();
        return {
            data,
            subscriber
        }
    });
    reactorRod.subscriber.render();
    return reactorRod.data;
}

export default class Reactor {

    constructor(dataSet) {
        this.dataSet = dataSet;
    }

    static FunctionalComponentSubject = class {

        constructor(forceUpdate) {
            this.forceUpdate = forceUpdate;
        }

        render = () => { };
    }

    useRod = (subscriber) => {
        if (!(subscriber instanceof React.Component) && !(subscriber instanceof Reactor.FunctionalComponentSubject)) {
            throw "Subscriber should be a React Component or FunctionalComponentSubject";
        }

        let subscriberRegistry = this.subscribersRegistry.find(subscriberRegistry => (subscriberRegistry.subscriber === subscriber) && (subscriberRegistry.reactor === this));
        if (!subscriberRegistry) {
            this.subscribersRegistry.push(subscriberRegistry = {
                mounted: false,
                subscriber,
                reactor: this,
                reacting: true,
                valuesUsed: [],
                addValueUsage: (propertyPath) => {
                    subscriberRegistry.valuesUsed = subscriberRegistry.valuesUsed.filter(value => !propertyPath.startsWith(value));
                    subscriberRegistry.valuesUsed.push(propertyPath);
                }
            });

            subscriberRegistry.dataProxy = this.createDataProxy(this.dataSet, subscriberRegistry);

            subscriberRegistry.signalUpdate = subscriber.forceUpdate.bind(subscriber);

            let originals = (() => {
                let { componentDidMount, render, componentWillUnmount } = subscriber;
                return { componentDidMount, render, componentWillUnmount };
            })();

            let binded = Object.fromEntries(Object.entries(originals).map(([key, value]) => [key, value?.bind(subscriber) ?? (() => { })]));

            subscriber.componentDidMount = () => {
                subscriberRegistry.mounted = true;
                binded.componentDidMount();
            }

            subscriber.render = () => {
                subscriberRegistry.reacting = true;
                subscriberRegistry.valuesUsed = [];
                setTimeout(() => subscriberRegistry.reacting = false);
                return binded.render();
            };

            subscriber.componentWillUnmount = () => {
                subscriberRegistry.mounted = false;

                Object.assign(subscriber, originals);
                binded.componentWillUnmount();

                let subscriberIndex = this.subscribersRegistry.findIndex(subscriberRegistry => (subscriberRegistry.subscriber === subscriber) && (subscriberRegistry.reactor === this));
                this.subscribersRegistry.splice(subscriberIndex, 1);
            }
        }
        return subscriberRegistry.dataProxy;
    }

    subscribersRegistry = [];

    componentsToUpdate = [];
    updateHandler = null;

    executeUpdate = () => {
        this.updateHandler = null;
        let componentsToUpdate = this.componentsToUpdate
            .map(componentToUpdate => {
                if (componentToUpdate.mounted) {
                    componentToUpdate.valuesUsed = [];
                    componentToUpdate.reacting = true;
                    return componentToUpdate.signalUpdate;
                }
            })
            .filter(componentToUpdate => componentToUpdate);
        this.componentsToUpdate = [];
        componentsToUpdate.forEach(componentToUpdate => componentToUpdate());
    }

    scheduleUpdate(propertyPath) {
        this.subscribersRegistry
            .filter(subscriberRegistry => subscriberRegistry.valuesUsed.some(valueUsed => valueUsed.startsWith(propertyPath)))
            .forEach(subscriberRegistry => {
                if (this.componentsToUpdate.some(componentToUpdate => componentToUpdate.subscriber === subscriberRegistry.subscriber)) return;
                this.componentsToUpdate.push(subscriberRegistry);
            });
        if (this.updateHandler) clearTimeout(this.updateHandler);
        this.updateHandler = setTimeout(this.executeUpdate, 1);
    }

    createDataProxy(data, subscriberRegistry, propertyPath) {
        let proxiesCache = {};
        let GetFullPropertyPath = propertyPath
            ?
            (name) => propertyPath + "." + name
            :
            (name) => name;

        let proxy = new Proxy(
            data,
            {
                get: (_, name) => {
                    switch (name) {
                        case "__isReactor": return true;
                        case "__addValueUsage": return subscriberRegistry.addValueUsage;
                        default: {
                            let fullPropertyPath = GetFullPropertyPath(name);
                            if (subscriberRegistry.reacting) {
                                subscriberRegistry.addValueUsage(fullPropertyPath);
                            }
                            let dataProxyCache = proxiesCache[fullPropertyPath];
                            if (dataProxyCache) {
                                return dataProxyCache;
                            }
                            let value = data[name];
                            switch (typeof value) {
                                case "object": return this.createDataProxy(value, subscriberRegistry, fullPropertyPath);
                                case "function": return value.bind(proxy);
                                default: return value;
                            }
                        }
                    }
                },
                set: (_, name, value) => {
                    let fullPropertyPath = GetFullPropertyPath(name);
                    let type = typeof value;
                    if (type === "object") {
                        proxiesCache[fullPropertyPath] = this.createDataProxy(value, subscriberRegistry, fullPropertyPath);
                    }
                    else {
                        delete proxiesCache[fullPropertyPath];
                    }
                    data[name] = value;
                    this.scheduleUpdate(fullPropertyPath);
                    return true;
                }
            }
        );
        return proxy;
    }
}