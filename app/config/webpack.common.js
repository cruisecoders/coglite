var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry:{
        'polyfills':'./app/polyfills.ts',
        'vendor':'./app/vendor.ts',
        'app':'./app/main.ts'
    },

    resolve:{
        extensions:['.ts','.js']
    },

    module:{
        rules:[
            {
                test:/\.ts$/,
                loaders:[{
                    loader:'string-replace-loader',
                    query: {
                        search: "module.id.replace('/compiledSrc', '')",
                        replace: 'module.id+""'
                    }
                },{
                    loader:'awesome-typescript-loader',
                    options:{configFileName:helpers.root('../','tsconfig.json')}
                },'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('../', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test: /\.css$/,
                include: helpers.root('../', 'app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
        template: './app/index.html'
        })
    ]
}