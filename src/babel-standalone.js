import * as Babel from '@babel/core'

const { version, buildExternalHelpers } = Babel
const { isArray = arg => Object.prototype.toString.call(arg) === '[object Array]' } = Array

const availablePlugins = {}
const availablePresets = {}

function loadBuiltin (builtinTable, name) {
  if (isArray(name) && typeof name[0] === 'string') {
    if (builtinTable.hasOwnProperty(name[0])) {
      return [builtinTable[name[0]]].concat(name.slice(1))
    }
    return
  }
  else if (typeof name === 'string') {
    return builtinTable[name]
  }
  return name
}

function processOptions (options) {

  const presets = (options.presets || []).map(presetName => {
    const preset = loadBuiltin(availablePresets, presetName)
    if (preset) {
      if (isArray(preset) && typeof preset[0] === 'object' &&
        preset[0].hasOwnProperty('buildPreset')) {
        preset[0] = { ...preset[0], buildPreset: preset[0].buildPreset }
      }
    }
    else {
      throw new Error(`Invalid preset specified in Babel options: "${presetName}"`)
    }
    return preset
  })

  const plugins = (options.plugins || []).map(pluginName => {
    const plugin = loadBuiltin(availablePlugins, pluginName)
    if (!plugin) {
      throw new Error(`Invalid plugin specified in Babel options: "${pluginName}"`)
    }
    return plugin
  })

  return {
    babelrc: false,
    ...options,
    presets,
    plugins,
  }

}

function registerPlugin (name, plugin) {
  if (availablePlugins.hasOwnProperty(name)) {
    console.warn(`A plugin named "${name}" is already registered, it will be overridden`)
  }
  availablePlugins[name] = plugin
}

function registerPlugins (newPlugins) {
  Object.keys(newPlugins).forEach(name => registerPlugin(name, newPlugins[name]))
}

function registerPreset (name, preset) {
  if (availablePresets.hasOwnProperty(name)) {
    console.warn(`A preset named "${name}" is already registered, it will be overridden`)
  }
  availablePresets[name] = preset
}

function registerPresets (newPresets) {
  Object.keys(newPresets).forEach(name => registerPreset(name, newPresets[name]))
}

function transform (code, options) {
  return Babel.transform(code, processOptions(options))
}

function transformFromAst (ast, code, options) {
  return Babel.transformFromAst(ast, code, processOptions(options))
}

export {
  availablePlugins,
  availablePresets,
  buildExternalHelpers,
  registerPlugin,
  registerPlugins,
  registerPreset,
  registerPresets,
  transform,
  transformFromAst,
  version
}