import '@babel/polyfill'
import 'whatwg-fetch'
import * as BabelStandalone from './babel-standalone'
export * from './babel-standalone'

BabelStandalone.registerPresets({
  'env': require('@babel/preset-env')
})

BabelStandalone.registerPlugins({
  'proposal-async-generator-functions': require('@babel/plugin-proposal-async-generator-functions'),
  'proposal-class-properties': require('@babel/plugin-proposal-class-properties'),
  'proposal-dynamic-import': require('@babel/plugin-proposal-dynamic-import'),
  'proposal-function-bind': require('@babel/plugin-proposal-function-bind'),
  'proposal-json-strings': require('@babel/plugin-proposal-json-strings'),
  'proposal-nullish-coalescing-operator': require('@babel/plugin-proposal-nullish-coalescing-operator'),
  'proposal-numeric-separator': require('@babel/plugin-proposal-numeric-separator'),
  'proposal-object-rest-spread': require('@babel/plugin-proposal-object-rest-spread'),
  'proposal-optional-catch-binding': require('@babel/plugin-proposal-optional-catch-binding'),
  'proposal-optional-chaining': require('@babel/plugin-proposal-optional-chaining'),
  'proposal-private-methods': require('@babel/plugin-proposal-private-methods'),
  'proposal-unicode-property-regex': require('@babel/plugin-proposal-unicode-property-regex'),
  'syntax-async-generators': require('@babel/plugin-syntax-async-generators'),
  'syntax-class-properties': require('@babel/plugin-syntax-class-properties'),
  'syntax-dynamic-import': require('@babel/plugin-syntax-dynamic-import'),
  'syntax-json-strings': require('@babel/plugin-syntax-json-strings'),
  'syntax-nullish-coalescing-operator': require('@babel/plugin-syntax-nullish-coalescing-operator'),
  'syntax-numeric-separator': require('@babel/plugin-syntax-numeric-separator'),
  'syntax-object-rest-spread': require('@babel/plugin-syntax-object-rest-spread'),
  'syntax-optional-catch-binding': require('@babel/plugin-syntax-optional-catch-binding'),
  'syntax-optional-chaining': require('@babel/plugin-syntax-optional-chaining'),
  'syntax-top-level-await': require('@babel/plugin-syntax-top-level-await'),
  'transform-arrow-functions': require('@babel/plugin-transform-arrow-functions'),
  'transform-async-to-generator': require('@babel/plugin-transform-async-to-generator'),
  'transform-block-scoped-functions': require('@babel/plugin-transform-block-scoped-functions'),
  'transform-block-scoping': require('@babel/plugin-transform-block-scoping'),
  'transform-classes': require('@babel/plugin-transform-classes'),
  'transform-computed-properties': require('@babel/plugin-transform-computed-properties'),
  'transform-destructuring': require('@babel/plugin-transform-destructuring'),
  'transform-dotall-regex': require('@babel/plugin-transform-dotall-regex'),
  'transform-duplicate-keys': require('@babel/plugin-transform-duplicate-keys'),
  'transform-exponentiation-operator': require('@babel/plugin-transform-exponentiation-operator'),
  'transform-for-of': require('@babel/plugin-transform-for-of'),
  'transform-function-name': require('@babel/plugin-transform-function-name'),
  'transform-literals': require('@babel/plugin-transform-literals'),
  'transform-member-expression-literals': require('@babel/plugin-transform-member-expression-literals'),
  'transform-modules-amd': require('@babel/plugin-transform-modules-amd'),
  'transform-modules-commonjs': require('@babel/plugin-transform-modules-commonjs'),
  'transform-modules-systemjs': require('@babel/plugin-transform-modules-systemjs'),
  'transform-modules-umd': require('@babel/plugin-transform-modules-umd'),
  'transform-named-capturing-groups-regex': require('@babel/plugin-transform-named-capturing-groups-regex'),
  'transform-new-target': require('@babel/plugin-transform-new-target'),
  'transform-object-super': require('@babel/plugin-transform-object-super'),
  'transform-parameters': require('@babel/plugin-transform-parameters'),
  'transform-property-literals': require('@babel/plugin-transform-property-literals'),
  'transform-regenerator': require('@babel/plugin-transform-regenerator'),
  'transform-reserved-words': require('@babel/plugin-transform-reserved-words'),
  'transform-shorthand-properties': require('@babel/plugin-transform-shorthand-properties'),
  'transform-spread': require('@babel/plugin-transform-spread'),
  'transform-sticky-regex': require('@babel/plugin-transform-sticky-regex'),
  'transform-template-literals': require('@babel/plugin-transform-template-literals'),
  'transform-typeof-symbol': require('@babel/plugin-transform-typeof-symbol'),
  'transform-unicode-escapes': require('@babel/plugin-transform-unicode-escapes'),
  'transform-unicode-regex': require('@babel/plugin-transform-unicode-regex')
})