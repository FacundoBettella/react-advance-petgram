const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin"); // For service worker
const path = require("path");

module.exports = {
  devtool: "source-map",
  /* output de la compilación */
  output: {
    filename: "app.bundle.js",
    publicPath: "/", // El path donde encuentra este bundle, de esa forma no intentará en la ruta buscar ese archivo.
  },
  mode: "development",
  /* Creamos un archivo html customizado y lo indicamos como templete de htmlWebpackPlugin y alli renderizamos nuetra app en un div con id='app' */
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Petgram - Tu app de fotos de mascotas",
      shortname: "Petgram 🐕‍🦺",
      description:
        "Con Petgram encuentras fotos profesionales de animales domésticos",
      background_color: "#FFF",
      theme_color: "#b1a",
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: path.resolve("src/assets/icon.jpg"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('Icons'),
          ios: true,
          type: 'image/jpg'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x48.png'),
          destination: path.join('Icons'),
          size: '48x48',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x128.png'),
          destination: path.join('Icons'),
          size: '128x128',
          purpose: 'any maskable',
          type: 'image/png'
        },
        {
          src: path.resolve('src/assets/maskable_icon_x192.png'),
          destination: path.join('Icons'),
          size: '192x192',
          purpose: 'any maskable',
          type: 'image/png'
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://(res.cloudinary.com|images.unsplash.com)"), // url donde están las imagenes.
          handler: "CacheFirst", //Primero mirará si el recurso está en la cache antes de mirar en la red.
          options:{
            cacheName: "images"
          }
        },
        {
          urlPattern: new RegExp("https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql"), 
          handler: "NetworkFirst", //Primero mirará si el recurso está en la red antes de mirar en la cache.
          options:{
            cacheName: "api"
          }
        }
      ]

    })
  ],
  module: {
    rules: [
      {
        /* Regla para todos los archivos de JS, menos node_modules, usa: */
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-syntax-dynamic-import"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        /* Para usar svg como react components */
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
      /* 
        Lo vemos en consola: [webpack-dev-server] 404s will fallback to '/index.html'
        Además, debemos agregar  en output: publicPath: "/" 
      */
    },
  },
};
