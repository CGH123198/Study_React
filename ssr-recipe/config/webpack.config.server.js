const nodeExternals = require('webpack-node-externals');
const paths= require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const webpack =require('webpack');
const getClientEnvironment = require('./env');

const cssRegex = /\.css$/;
const cssModuleRegex = /\/module\.css$/;
const sasssRegx = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0,-1));

module.exports = {
    mode: 'production',
    entry: 'paths.ssrIndexJs',
    target: 'node',
    output: {
        path: paths.ssrBuild,
        filename: 'server.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: paths.publicUrlOrPath,
    },
    modue: {
        rules: [
            {
                oneOf: [
                    {
                        test:/\.(js|mjs|jsx|ts|tsx)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app'),
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                            ],
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent:
                                                '@svgr/webpack?-svgo, +titleProp,+ref![path]',
                                            },
                                        },
                                    },
                                ],
                            ],
                            cacheDirectort: true,
                            cacheCompression: false,
                            compact: false,
                        },
                    },

                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportOnlyLocals: true,
                            },
                        },
                    },

                    {
                        test: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportOnlyLocals: true,
                                getLocalIdent: getCSSModuleLocalIdent,
                            },
                        },
                    },
                    {
                        test: sassModuleRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 3,
                                    modules: {
                                        exportOnlyLocals: 3,
                                    },
                                },
                            },
                            require.resolve('sass-loader'),
                        ],
                    },
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            emitFile: false,
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ['node_modules']
    },
    externals: [
        nodeExternals({
            allowlist: [/@babel/],
        })]
};