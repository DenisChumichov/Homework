module.exports = {
    mode: "development",
    devtool: "(none)",
    entry: "./src/board.js",
    output: {
      path: __dirname,
      filename: "app.js"
    },
    devServer: {
      proxy: {
        '/api': 'http://localhost:8089'
      }
    }
  };