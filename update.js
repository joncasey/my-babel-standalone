const fs = require('fs')
const https = require('https')
const pkg = require('./package.json')

main()

async function main () {
  const deps = pkg.dependencies
  const filterRe = (o, re) => Object.keys(o).filter(s => re.test(s))
  const isPlugin = /@babel\/plugin-/
  const isPreset = /@babel\/preset-/

  const env = await unpkg('@babel/preset-env')
  const presets = filterRe(deps, isPreset)
  const plugins = filterRe(deps, isPlugin).concat(
    filterRe(env.dependencies, isPlugin)
  )

  for (let [key, value] of Object.entries(deps)) {
    if (value === 0) deps[key] = env.version
  }

  plugins.sort()

  fs.writeFileSync('src/index.js', sourceCode(
    list(presets).join(',\n'),
    list(plugins).join(',\n')
  ).trim())
}

function list (a) {
  const toName = s => s.replace(/@babel\/(preset|plugin)-/, '')
  return a.map(s => `  '${toName(s)}': require('${s}')`)
}

function sourceCode (presets, plugins) {
  return `
import '@babel/polyfill'
import 'whatwg-fetch'
import * as BabelStandalone from './babel-standalone'
export * from './babel-standalone'

BabelStandalone.registerPresets({
${presets}
})

BabelStandalone.registerPlugins({
${plugins}
})
`
}

async function unpkg (v) {

  const fetch = async url => new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = []
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => {
        res.text = data.join('')
        resolve(res)
      })
    })
  })

  let r = await fetch(`https://unpkg.com/${v}/package.json`)

  if (r.headers.location) {
    r = await fetch(`https://unpkg.com${r.headers.location}`)
  }

  return JSON.parse(r.text)

}
