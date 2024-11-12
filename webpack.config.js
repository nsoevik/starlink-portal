const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// A webpack plugin for converting external script files <script src="app.js"></script> to inline script block <script>...</script>
// see https://github.com/icelam/html-inline-script-webpack-plugin
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  performance: {
    // starlink supports custom webpages of 8 MB. If you are seeing this error please compress assets
    maxAssetSize: 8388608, // 8 MB in bytes
    maxEntrypointSize: 8388608, // 8 MB in bytes
    hints: 'error'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|woff(2)?|ttf|eot)$/,
        type: 'asset/inline',  // Inlines images and fonts as base64
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: true, // Enable inlining of image sources
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      },
    }),
    new HtmlInlineScriptPlugin()
  ],
};
