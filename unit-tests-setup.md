# Instalación y configuracion de Jest + React Testing Library

## Fuentes

- [Getting Starter - JEST ](https://jestjs.io/docs)
    - [Using Babel](https://jestjs.io/docs/getting-started#using-babel)
    - [DOM Manipulation](https://jestjs.io/docs/tutorial-jquery)
- [React testing library](https://github.com/testing-library/react-testing-library)

## Instalaciones y configuraciones

1. Instalaciones:
    - Install the @types/jest package. It provides types for Jest globals without a need to import them.
```
yarn add --dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

## Problemas que pueden aparecer

1. Cuando tus ficheros de configuración le pones de extensión _js_ y el __package.json__ tenemos la línea _"type": "module",_

>You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.

[Solución](https://stackoverflow.com/questions/67051343/nodemon-and-jest-only-supported-when-running-babel-asynchronously)
>I think the problem is that your package.json says you are using ES6 modules, but your Babel config is using module.exports which is CommonJS (not ES6 modules).
I renamed my babel.config.js to babel.config.cjs and this fixed the problem. I guess you could also change module.exports to export default but I haven't tried this.