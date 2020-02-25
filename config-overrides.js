const {
    override,
    addWebpackModuleRule,
} = require('customize-cra');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function addWebpackBundleAnalyzer(config, options = {}) {
    if (process.env.NODE_ENV === 'production'
        && process.argv.indexOf('--bundle-report') !== -1) {
        config.plugins = (config.plugins || []).concat([
            new BundleAnalyzerPlugin(options),
        ]);
    }

    return config;
}

module.exports = override(
    config => ({
        ...config,
        output: {
            ...config.output,
            globalObject: 'this',
        },
    }),
    config => addWebpackBundleAnalyzer(config,{
        // analyzerMode: 'static',
        // reportFilename: 'report.html',
        openAnalyzer: true,
        generateStatsFile: true,
        statsFilename: 'bundle-stats.json'
    }),
    addWebpackModuleRule({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
    })
);