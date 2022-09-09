## Petgram

![Captura de pantalla (382)](https://user-images.githubusercontent.com/76120904/189413755-1edc3c8f-e244-424d-b9c1-1cc29298cf9e.png)

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

![Captura de pantalla (383)](https://user-images.githubusercontent.com/76120904/189413776-0c65f998-e7f6-4653-a567-cd341a73cd1e.png)



