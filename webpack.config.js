const createExpoWebpackConfigAsync = require('@expo/webpack-config/addons')
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: { dangerouslyAddModulePathsToTranspile: ['app', 'moti', '@motify'] },
        },
        argv
    )
    return config
} 
