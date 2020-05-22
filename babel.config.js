module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/env",
            { modules: false, targets: "> 0.25%" },
        ],
        "@babel/preset-react",
        ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
    ];

    const plugins = ["react-hot-loader/babel"];

    return {
        presets,
        plugins,
    };
};
