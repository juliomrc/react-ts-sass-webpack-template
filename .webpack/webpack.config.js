/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const webpackDevServerConfiguration = require("./helpers/webpackDevServer");
const fileName = require("./helpers/fileName");
const alias = require("./helpers/alias");
const getPlugins = require("./helpers/plugins");
const loaders = require("./helpers/loaders");
const optimization = require("./helpers/optimization");

const relativePathToRoot = "../.";

module.exports = (config) => {
    const isDevelopment = config.dev;
    const isHotDevelopment = config.WEBPACK_SERVE;
    const publicPath = "/";

    return {
        mode: isDevelopment ? "development" : "production",
        devtool: false,
        devServer: webpackDevServerConfiguration,
        context: path.join(__dirname, relativePathToRoot),
        entry: {
            app: `webpack-polyfill-injector?${JSON.stringify({
                modules: [
                    path.join(__dirname, relativePathToRoot, "./src/boot.tsx"),
                ],
            })}!`,
        },
        output: {
            filename: fileName("js", isDevelopment),
            chunkFilename: fileName("js", isDevelopment),
            path: path.join(__dirname, relativePathToRoot, "./dist"),
            publicPath,
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            alias,
        },
        optimization,
        plugins: getPlugins(isDevelopment, isHotDevelopment),
        module: {
            rules: loaders.getModuleLoaders(isHotDevelopment),
        },
    };
};
