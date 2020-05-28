const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ],
                
            },
            {
                test: /\.(png|svg|jpg|gif|woff2)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ],
                
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new FaviconsWebpackPlugin('./assets/images/icons/cup.png'),
        new WorkboxWebpackPlugin.InjectManifest({
            swSrc: "./src/service-worker.js",
            swDest: "service-worker.js"
        })
    ]
};