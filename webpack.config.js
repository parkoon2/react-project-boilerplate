const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {

    const mode = argv.mode

    return ({
        entry: './src/index.js',

        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', 'css-loader'
                    ]
                }
            ]
        },

        mode,

        plugins: [
            new htmlWebpackPlugin({
                template: './src/public/index.html'
            })
        ]
    })
}