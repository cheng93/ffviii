const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const config = function(env, argv) {
    return {
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
                    test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
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
            new MiniCssExtractPlugin({
                filename: 'static/[name].[chunkhash].css'
            }),
            // new webpack.NormalModuleReplacementPlugin(
            //     /(.*)\/environment\/environment(.*)/,
            //     resource => {
            //         console.log(resource.request);
            //         if (argv.mode === 'development') {
            //             resource.request = resource.request.replace(
            //                 /environment\/environment/,
            //                 `/environment/environment.development`
            //             );
            //         }
            //     }
            // ),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                mainPath: './src/main.ts',
                hostReplacementPaths: {
                    './src/environment/environment.ts':
                        argv.mode === 'development'
                            ? './src/environment/environment.development.ts'
                            : './src/environment/environment.ts'
                }
            }),
            new UglifyJSPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ],

        mode: 'production',

        optimization: {
            runtimeChunk: 'single'
            // splitChunks: {
            //     minSize: 30000,
            //     minChunks: 1,

            //     cacheGroups: {
            //         polyfill: {
            //             test: 'polyfill',
            //             name: 'polyfill',
            //             chunks: 'all',
            //             priority: 20
            //         },
            //         vendor: {
            //             test: /node_modules/,
            //             chunks: 'all',
            //             name: 'vendor',
            //             priority: 10,
            //             enforce: true
            //         },
            //         default: {
            //             minChunks: 2,
            //             chunks: 'all',
            //             priority: 0
            //         }
            //     }
            // }
        },

        devServer: {
            contentBase: './.dist',
            port: 9000
        }
    };
};

module.exports = config;
