This **reactor-demo** is an application to showcase the **reactor**.

The **reactor** is a small entity that automatically keeps components up to date with the changes done to the data on a global store (**reactor store**) they regester to.\
Components registered to the **reactor store**, based on the properties and value they use to render, will be automatically scheduled to refresh as soon as a value used on the component is changed from anywhere in the applicaiton.

This repository contains the reactor code on the *[src/framework/reactor.js](https://github.com/alexielm/reactor-demo/blob/main/src/framework/reactor.jsx)* file

Online demo at <http://nexus-solutions.org/reactorDemo/>\
Open Developers Tool Console for notifications about Components Re-Render

![Overall Flow Diagram](https://raw.githubusercontent.com/alexielm/reactor-demo/main/documentation/reactor-demo-chart.png)