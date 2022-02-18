const createExpoWebpackConfigAsync = require("@expo/webpack-config");

const modulesToTranspile = [
    "moti",
    "@motify",
    "@motify/core",
    "@motify/components"
];


module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: { dangerouslyAddModulePathsToTranspile: modulesToTranspile },
        },
        argv
    );
    return config;
};