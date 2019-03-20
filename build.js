const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const webpackConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            ascii_only: true
          }
        }
      })
    ]
  },
  output: {
    library: 'Babel',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /^\.{2}\/package\.json/,
      `${__dirname}/package.json`
    )
  ]
}

const pack = (config = webpackConfig) => new Promise((resolve, reject) => {
  webpack(config, (err, stats) => err ? reject(err) : resolve(stats))
})

const build = async (src, dst) => {
  const config = { ...webpackConfig, entry: `./src/${src}` }
  config.output.filename = dst
  if (dst.indexOf('.min.') === -1) {
    config.mode = 'development'
    delete config.optimization
  }
  try {
    console.log(`pack( ${src}, ${dst} )`)
    const stats = await pack(config)
    console.log(stats.toJson('minimal'))
  }
  catch (e) {
    console.error(e)
  }
}

;(async () => {
  await build('index.js', 'babel.js')
  await build('index.js', 'babel.min.js')
})()