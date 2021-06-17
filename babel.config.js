module.exports = function (api) {
    api.cache(true);

    const presets = [
        ["@babel/preset-env", { targets: "> 0.25%" }],
        "@babel/preset-react",
        "@babel/preset-typescript",
    ];

    return {
        presets,
        plugins: ["@babel/plugin-transform-runtime"],
    };
};
