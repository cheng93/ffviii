const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
    context: __dirname,

    entry: {
        polyfill: './src/polyfill.ts',
        vendor: './src/vendor.scss',
        styles: './src/styles.scss',
        app: './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.scss']
    },

    output: {
        filename: 'static/[name].[chunkhash].js',
        path: path.resolve(__dirname, '.dist')
    },

    module: {
        rules: [
            {
                test: /.ts$/,
                exclude: /node_modules/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: [
                    path.resolve(__dirname, './src/vendor.scss'),
                    path.resolve(__dirname, './src/styles.scss')
                ],
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve('./node_modules')],
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                include: [
                    path.resolve(__dirname, './src/vendor.scss'),
                    path.resolve(__dirname, './src/styles.scss')
                ],
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.resolve('./node_modules')],
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'static/[name].[chunkhash].css' }),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './src/app/app.module#AppModule',
            mainPath: './src/main.ts'
        }),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    mode: 'production',

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            name: false,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },

    devServer: {
        contentBase: './.dist',
        port: 9000
    }
};
