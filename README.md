# react-transform-count-renders

[![react-transform channel on discord](https://img.shields.io/badge/discord-react--transform%40reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)

A [React Transform](https://github.com/gaearon/babel-plugin-react-transform) that appends `console.count(this.displayName || this.constructor.name || 'Uknown')` inside the `render()` function.

This way you can quickly see how many times certain components render. The higher the count is while just performing a few interactions the likelier you got bottlenecks.

## 🚧🚧🚧🚧🚧

This is **highly experimental tech**. If you’re enthusiastic about hot reloading, by all means, give it a try, but don’t bet your project on it. Either of the technologies it relies upon may change drastically or get deprecated any day. You’ve been warned 😉 .

**This technology exists to prototype next-generation React developer experience**. Please don’t use it blindly if you don’t know the underlying technologies well. Otherwise you are likely to get disillusioned with JavaScript tooling.

**No effort went into making this user-friendly yet. The goal is to eventually kill this technology** in favor of less hacky technologies baked into React. These projects are not long term.

## Installation

First, install the [Babel plugin](https://github.com/gaearon/babel-plugin-react-transform):

```
npm install --save-dev babel-plugin-react-transform
```

Then, install the transform:

```
npm install --save-dev react-transform-count-renders
```

Now edit your `.babelrc` to include `extra.babel-plugin-react-transform`.  
It must be an array of the transforms you want to use:

```js
{
  "presets": ["es2015", "stage-0"],
  "env": {
    // only enable it when process.env.NODE_ENV is 'development' or undefined
    "development": {
      "plugins": [["react-transform", {
        "transforms": [{
          "transform": "react-transform-count-renders",
          // now go the imports!
          "imports": [

            // the first import is your React distribution
            // (if you use React Native, pass "react-native" instead)

            "react"
          ]
        }]
        // note: you can put more transforms into array
        // this is just one of them!
      }]]
    }
  }
}
```

**It is up to you to ensure that the transform is not enabled when you compile the app in production mode.** The easiest way to do this is to put React Transform configuration inside `env.development` in `.babelrc` and ensure you’re calling `babel` with `NODE_ENV=development`. See [babelrc documentation](https://babeljs.io/docs/usage/babelrc/#env-option) for more details about using `env` option.

## License

MIT
