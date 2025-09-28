const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
    // In order for live reload to work we must use "web" as the target not "browserslist"
    target: process.env.WEBPACK_SERVE ? 'web' : 'browserslist',
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: ['source-map-loader']
            }
        ]
    },
    /*devServer: {
        compress: true,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }
    }*/
   devServer: {
    static: './dist', // waar je gebuildde files staan
    port: 3000,       // kies zelf een poort
    compress: true,
    hot: false,       // Hot Module Replacement (sneller, vervangt alleen modules)
    liveReload: true, // Browser volledig refreshen als HMR niet kan
    client: {
        overlay: {
            errors: true,
            warnings: false
        }
    }
}

});
