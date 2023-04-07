const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".css", ".pdf"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // nu merge
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },
      // {
      //   test: /\.(scss|sass)$/i,
      //   include: [
      //     path.resolve(__dirname, 'node_modules'),
      //     path.resolve(__dirname, 'path/to/imported/file/dir'),
      //   ],
      //   loaders: ["css", "sass"]
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader'
      //     },
      //     {
      //       loader: 'sass-loader'
      //     }
      //   ]
      // },
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		{
			// 			loader: 'style-loader'
			// 		},
			// 		{
			// 			loader: 'css-loader'
			// 		},
			// 		{
			// 			loader: 'sass-loader'
			// 		}
			// 	]
			// },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'pdfs/',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};