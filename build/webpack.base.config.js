module.exports = {
    entry: {
        Pager: ['./lib/Pager.vue'],
        Table: './lib/Table.vue'
    },
    output: {
        path: './dist',
        publicPath: '/assets/',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                // make sure to exclude 3rd party code in node_modules
                exclude: /node_modules/
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif|svg|woff|ttf|eot)$/,
                loader: 'file',
                query: {
                    // inline files smaller then 10kb as base64 dataURL
                    limit: 10000,
                    // fallback to file-loader with this naming scheme
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // vue-loader config:
    // lint all JavaScript inside *.vue files with ESLint
    // make sure to adjust your .eslintrc
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    // configure babel-loader (for both .js and .vue files).
    // see https://babeljs.io/docs/usage/options/
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },

    externals:[{
        'lodash': {
            root: '_',
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash'
        }
    }]
};
