'use strict'
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader.conf')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const { DefinePlugin } = require('webpack')
const weVuePackage = require('../package')

const isProd = process.env.NODE_ENV === 'production'

const resolve = file => require('path').resolve(__dirname, file)

module.exports = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  node: {
    fs: 'empty'
  },
  stats: {
    children: false
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [
      //     resolve('packages'),
      //     resolve('test'),
      //     resolve('demo'),
      //     resolve('docs')
      //   ],
      //   options: {
      //     formatter: require('eslint-friendly-formatter'),
      //     emitWarning: true
      //   }
      // },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: resolve(`../node_modules/.cache/vue-loader`)
            }
          },
          {
            loader: 'vue-loader',
            options: vueLoaderConfig
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: resolve(`../node_modules/.cache/babel-loader`)
            }
          },
          {
            loader: 'thread-loader',
            options: {
              // there should be 1 cpu for the fork-ts-checker-webpack-plugin
              workers: require('os').cpus().length - 1
            }
          },
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: resolve(`../node_modules/.cache/ts-loader`)
            }
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new ForkTsChecker({
      checkSyntacticErrors: isProd,
      vue: true,
      tslint: false, // TODO
      formatter: 'codeframe',
      tsconfig: resolve('../tsconfig.json')
    }),
    new DefinePlugin({
      __WE_VUE_VERSION__: JSON.stringify(weVuePackage.version),
      __REQUIRED_VUE__: JSON.stringify(weVuePackage.peerDependencies.vue),
    })
  ]
}
