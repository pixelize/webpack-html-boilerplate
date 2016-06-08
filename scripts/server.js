
import express from 'express'
import morgan from 'morgan'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../webpack.config'

const app = express()
const compiler = webpack(webpackConfig)

// Logging
app.use(morgan('short'))

// Attach the dev middleware to the compiler & the server
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}))

// Attach the hot middleware to the compiler & the server
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

// Serve static folder
app.use(express.static('app/_static'))

if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, function () {
    console.log('Server ready! %s', `http://localhost:${port}/`)
    console.log('')
    console.log('')
    console.log('---------------------------------------------')
  })
}
