const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  /* output de la compilación */
  output: {
    filename: "app.bundle.js",
    publicPath: "/" // El path donde encuentra este bundle, de esa forma no intentará en la ruta buscar ese archivo.
  },
  mode: "development",
  /* Creamos un archivo html customizado y lo indicamos como templete de htmlWebpackPlugin y alli renderizamos nuetra app en un div con id='app' */
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
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
      disableDotRule: true 
      /* 
        Lo vemos en consola: [webpack-dev-server] 404s will fallback to '/index.html'
        Además, debemos agregar  en output: publicPath: "/" 
      */
    }
  },
};
