module.exports = {
  entry:__dirname+'/client/components/app.jsx',
  module: {
      rules: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-react', '@babel/preset-env']
                  }
              }
          }
      ]
  },
  output:{
      filename: 'app.js',
      path:__dirname + '/client'
  }
}


// const HtmlWebPackPlugin = require("html-webpack-plugin");
// module.exports = {
//   entry:__dirname+'/client/components/app.jsx',
// module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader"
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./client/index.html",
//       filename: "./client/index.html"
//     })
//   ]
// };