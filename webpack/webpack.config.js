/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const webpackDevServerConfiguration = require("./helpers/webpackDevServer");
const fileName = require("./helpers/fileName");
const alias = require("./helpers/alias");
const getPlugins = require("./helpers/plugins");
const loaders = require("./helpers/loaders");

const relativePathToRoot = "../.";

module.exports = (env) => {
    const isDevelopment = env === "dev";
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
        optimization: { runtimeChunk: "single" },
        plugins: getPlugins(isDevelopment),
        module: { rules: loaders.getModuleLoaders(isDevelopment) },
    };
};
