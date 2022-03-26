This **reactor-demo** is an application to showcase the **reactor**.

The **reactor** is a small entity that helps keep components up to date with the changes done on a global store they regester to.
The components registered to this store will be automatically scheduled to render as soon as a value used on the component is changed from anywhere in the applicaiton using the reactor**reactor**.

This repository contains the reactor code on the *[src/framework/reactor.js](https://github.com/alexielm/reactor-demo/blob/main/src/framework/reactor.jsx)* file

Online demo at <http://nexus-solutions.org/reactorDemo/>\
Open Developers Tool Console for notifications about Components Re-Render

![Overall Flow Diagram](https://raw.githubusercontent.com/alexielm/reactor-demo/main/documentation/reactor-demo-chart.png)