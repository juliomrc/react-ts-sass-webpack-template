/* eslint-disable @typescript-eslint/no-var-requires */
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const PolyfillInjectorPlugin = require("webpack-polyfill-injector");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const fileName = require("./fileName");

module.exports = (isDevelopment, isHotDevelopment) => {
    const plugins = [
        new MiniCssExtractPlugin({ filename: fileName("css", isDevelopment) }),
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve("src/resources/icons/react.svg"),
            prefix: "favicon/",
        }),
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
            // new BundleAnalyzerPlugin(),
        );

        if (isHotDevelopment) {
            plugins.push(
                new ReactRefreshWebpackPlugin(),
                new webpack.WatchIgnorePlugin({ paths: [/\.d\.ts$/] }),
            );
        }
    } else {
        plugins.push(new StylelintPlugin(), new ESLintPlugin());
    }

    return plugins;
};
