# my-babel-standalone

This standalone build uses [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env), [@babel/polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill), and [whatwg-fetch](https://github.com/github/fetch) to create an experience that mirrors modern browsers. It does not include presets for flow, react, and typescript.

* [@babel/standalone](https://github.com/babel/babel/tree/master/packages/babel-standalone) = 5-6 mb minified
* [my-babel-standalone](https://github.com/joncasey/my-babel-standalone) = 1.5 mb minified

Currently, it's being used in the latest builds of [modern-hta](https://github.com/joncasey/modern-hta).