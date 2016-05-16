# node-visu

Messing around with some new hyped techs.

**HMI system based on following :**
* Docker / micro service architecture
* MongoDB in-memory DB holds current state of objects
* Screens designed in SVG / Modularization via ReactJS component model
* Node-JS as backend
* ReactJS (flux architecture) for frontend
* NPM / webpack build system
* Libs as external resources
* IntelliJ IDE as IDE

## setup environment
* run `npm install`
* run `npm install webpack -g`
* run `npm install copyfiles -g`
* npm script `build-libs` copies client libraries from node_modules to exposed folder
* npm script `build-debug-all` builds client webapp in debug mode
* npm script `build-prd-all` builds client webapp in production mode
* npm script `start-server` starts the backend

## Next steps
* testing framework for React and node
* eliminate scroll-bar in picture