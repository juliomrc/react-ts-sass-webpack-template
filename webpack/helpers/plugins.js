/* eslint-disable @typescript-eslint/no-var-requires */
const PolyfillInjectorPlugin = require("webpack-polyfill-injector");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const fileName = require("./fileName");

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (isDevelopment) => {
    const plugins = [
        new MiniCssExtractPlugin({
            filename: fileName("css", isDevelopment),
            chunkFilename: fileName("css", isDevelopment),
        }),
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve("src/resources/icons/react.svg"),
            prefix: "favicon/",
        }),
        new webpack.WatchIgnorePlugin([/\.d\.ts$/]),
        new PolyfillInjectorPlugin({
            singleFile: true,
            polyfills: [
                "Promise",
                "fetch",
                "Array.prototype.find",
                "Array.prototype.findIndex",
                "Array.prototype.fill",
                "String.prototype.startsWith",
                "String.prototype.endsWith",
                "String.prototype.includes",
                "String.prototype.repeat",
                "WebAnimations",
            ],
        }),
    ];

    if (isDevelopment) {
        plugins.push(
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map",
                exclude: [/vendors.*.*/, /polyfills.*/, /runtime.*/],
            }),
        );
    } else {
        plugins.push(new StylelintPlugin());
    }

    return plugins;
};
