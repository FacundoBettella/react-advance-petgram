const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  /* output de la compilación */
  output: {
    filename: "app.bundle.js",
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
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      { 
        /* Para usar svg como react components */
        test: /\.svg$/, 
        use: ["@svgr/webpack"] 
      },
      
    ],
  },
};
