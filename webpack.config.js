/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { fileName, getPlugins, getModuleRules } = require("./webpack.helpers");

module.exports = (env) => {
    const dev = env === "dev";

    const rules = getModuleRules(dev);
    const plugins = getPlugins(dev);

    return {
        devtool: false,
        mode: dev ? "development" : "production",
        devServer: {
            historyApiFallback: {
                index: "/index.html",
            },
        },
        context: path.resolve(__dirname),
        entry: {
            app: `webpack-polyfill-injector?${JSON.stringify({
                modules: ["./src/boot.tsx"],
            })}!`,
        },
        output: {
            filename: fileName("js", dev),
            chunkFilename: fileName("js", dev),
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            alias: {
                "react-dom": "@hot-loader/react-dom",
                "@components": path.join(__dirname, "./src/components"),
                "@resources": path.join(__dirname, "./src/resources"),
            },
        },
        optimization: {
            moduleIds: "hashed",
            runtimeChunk: "single",
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    chunks: "all",
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
        plugins,
        module: { rules },
    };
};
