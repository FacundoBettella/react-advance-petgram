## curso-platzi-react-avanzado ⚛️
## Comandos iniciales:
npm i webpack webpack-cli --save-dev

./node_modules/.bin/webpack ./src/index.js => Creamos carpeta dist/main.js
node dist/main => Corremos dist ¡Empezamos!

npm i html-webpack-plugin --save-dev => Para usar este plugin creamos webpack.config.js donde seteamos el output de compilcacion (app.bundle.js) y corremos nuevamente ./node_modules/.bin/webpack ./src/index.js 
## Pero Mejor utilizamos nuestros scripts en package.json:
    "scripts": {
    "build": "webpack",
    **webpack mira por defecto en src/index.js** 
    }

Corremos npm run build  => Y se crea en ./dist/index.html que contiene el script con src= app.bundle.js

Por ultimo hacemos: npm i webpack-dev-server --save-dev y agregamos el script: 
    "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
    }

# Corremos npm run dev y levantamos servidor! :D

## Seguimos con React y Babel:
Instalamos React y react-dom y configuramos la puerta de entrada a la app a traves de un html -index.html- customizado que configuramos en webpack config. 
Ahora, para usar jsx necesitamos instalar dependencias de babel (un loader/transpilador) => 
    @babel/core 
    @babel/preset-env Para que la conversion de react a js se haga a la ultima version aceptada por ecmaScript.
    @babel/preset-react Para usar jsx
    babel-loader El loader que utilizara webpack para utilizar babel

Ahora cambiamos la configuracion de webpack para que use los presets y loader mencionados previamente.

