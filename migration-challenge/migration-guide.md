# ES modules migration guide 

## tl;dr

* [How can I update CJS to ESM?](#how-can-i-update-cjs-to-esm)
* [How can I use Purescript v0.15 on Node.js?](#how-can-i-use-purescript-v015-on-nodejs)
* [How can I bundle my library or application?](#how-can-i-bundle-my-library-or-application)

## A little bit of background

In April 2021 the Node.js LTS version 10 reached end-of-life, which was the last version that did not yet support ES modules (ESM). This means, that all Node.js LTS and current versions support ES modules. And since all major browsers support ESM already since a long time, there is no need anymore in the JS ecosystem to support Common JS (CJS) and the community is advocating to [drop CJS support](https://github.com/sindresorhus/meta/discussions/15), which kinda makes sense. The community is following suit and is dropping its support for CJS, some notable examples are [remark](https://github.com/remarkjs/remark/tree/main/packages/remark#install), [`node-fetch`](https://github.com/node-fetch/node-fetch#commonjs) and [`framer-motion`](https://github.com/framer/motion) amongst many others. 

What does that mean for Purescript v0.14? Well, a little bit of bad news, because Purescript v0.14 only supports CJS. Fortunately, there has been a [long-standing PR](https://github.com/purescript/purescript/pull/3791) to support ES modules in Purescript. So time to get this over the finish line and get ESM and

## Welcome to Purescript v0.15 with ESM support!

Purescript v0.15 is here and supports ESM with all of its advantages:

* You can use ESM-only libraries
* A cleaner and simpler way of writing FFI
* Helping tools to do their job like [DCE](https://en.wikipedia.org/wiki/Dead_code_elimination) or [Code-Splitting](https://reactjs.org/docs/code-splitting.html#code-splitting)

However, this has a couple of implications that will need you to migrate your code and tooling setup:

* v0.15 drops support of CJS

  With no real [reason](#a-little-bit-of-background) to keep supporting CJS, we have decided to drop CJS support alltogether. The maintenance burden would have been just too high to support CJS as well. This means you will need to update your FFI to ESM. More on this here:

  [How can I update CJS to ESM?](#how-can-i-update-cjs-to-esm)


* v0.15 drops support for Node.js versions < 12
  
  This is just the logical consequence of Node.js versions < 12 having reached EOL and not supporting ESM. More on this here:

  [How can I use Purescript on Node.js?](#how-can-i-update-cjs-to-esm)

* v0.15 drops `purs bundle` and relies on an external bundlers
  
  Yes, you heard right. The Purescript compiler no longer comes with a built-in `bundle` command. `purs bundle` was already broken in a couple of ways, didn't do a great job on bundle size, and was basically unmaintained. Updating `purs bundle` to ESM would have required a considerable amount of work, taking time away from the compiler team to work on more urgent matters in the compiler.

  Therefore, v0.15 relies on an external bundler like `esbuild`, `webpack` or `parcel`. And that is good news because these tools are used industry-wide and do a much better job on bundling than `purs bundle`. You will see significantly improved bundle sizes with v0.15, like e.g. for [purescript-halogen template](https://github.com/purescript-halogen/purescript-halogen-template):

  | Bundler         | Size |
  |--------------|-----------|
  | v0.14 with `purs bundle` | **259Kb** |
  | v0.14 with `purs-bundle` and `esbuild` | **110Kb** |
  | v0.15 with `esbuild` | **82Kb** |


  More on this here:

  [How can I bundle my library or application?](#how-can-i-bundle-my-library-or-application)

## How can I update CJS to ESM?

When you are writing JS FFI the most common situations where you will see changes are: 

* Importing a module

  In v0.14 you had to import a module using `require` 

  ```javascript
  const mymodule = require('mymodule')
  ```

  In v0.15 you need to use `import`

  ```javascript
  import * as M from 'mymodule'
  // or import specific items from the module
  import { main } from 'mymodule'
  ```
* Exporting variables and functions in your FFI

  In v0.14 you had to use `exports`
  ```javascript
  exports.world = "🗺"
  exports.greet = function() { return "hello " + world }
  ```

  In v0.15 you need to use `export` 
  ```javascript
  export const world = "🗺"

  export function greet() { return "hello " + world }
  ```

Fortunately, there are tools that can automatically perform this conversion for you in most of the cases.


### Automatically convert CJS to ESM

The best migration tool we have evaluated and recommend is [lebab](https://github.com/lebab/lebab).

You can do just that transformation with one of the following commands:
```bash
# replace all *.js files in the src directory by rewriting them from
# commonjs modules to es modules
lebab --replace src --transform commonjs
lebab --replace test --transform commonjs

# you can also provide glob patterns, if you would like
lebab --replace 'src/js/**/*.jsx' --transform commonjs
```

The CommonJS → ES modules transform is considered unsafe, because there are some edge cases the tool is unable to handle. These are issues worth checking for in your updated code:
https://github.com/lebab/lebab#unsafe-transforms

In general though it works well in most of the cases.


Another option you can try is [`cjstoesm`](https://github.com/wessberg/cjstoesm).

## How can I use Purescript v0.15 on Node.js?

Purescript v0.15 dropped support for Node.js versions below 12. If you are on an older version, you will need to upgrade to at least version 12, but better to the current versions. At the time of writing these are Node.js 16 (LTS) and Node.js 17 (Current).

To run your application, you can either use `spago run` or create an `index.js`

```javascript
// index.js
import { main } from 'output/Main/index.js'
main()
```

and run 
```bash
node index.js
# or if you are on Node.js 12
node --experimental-modules index.js
```


## How can I bundle my library or application?

As discussed before, v0.15 drops support for `purs bundle` and therefore relies on an external bundler. We recommend three bundlers, namely [`esbuild`](https://esbuild.github.io/), [`webpack`](https://webpack.js.org/) and [`parcel`](https://parceljs.org/docs/). To make the transition easy for you, we have decided to make `spago bundle-app` and `spago bundle-module` use `esbuild` internally. The reasons for this are:

* the evaluated bundlers don't differ much in minified bundle size and are much better than the current purs-bundle
* `esbuild` outperforms the other bundlers when producing a "readable" bundle
* `esbuild` is a standalone tool that doesn't require npm or node
* `esbuild` doesn't require a config in comparison to webpack
* `esbuild` is way faster than the others

So you can keep using `spago` to bundle, but it requires you to install `esbuild`. More on this [later](#using-spago-to-bundle).

Nonetheless, the other two bundlers are also great options:
* [`webpack`](https://webpack.js.org/) - has shown the best results in bundle size, but is also the slowest and most difficult to set up. If you need the smallest bundle size and full flexibility, this is probably the one you want.
* [`parcel`](https://parceljs.org/docs/) - a good compromise between ease of use, speed and bundle size. If you need bundling involving html and css but still want a small, simple bundler, this is probably the one you want.

For a full discussion see [the github issue](https://github.com/working-group-purescript-es/challenges/issues/5).

### Using `spago` to bundle

See [`spago` documentation](https://github.com/purescript/spago#bundle-a-project-into-a-single-js-file).

Basic usage: 
```bash
spago bundle-app # bundle for the browser 
spago bundle-app --platform node # bundle for node
spago bundle-app --minify # minified bundle for the browser 
spago bundle-app --platform node --minify # minified bundle for node

spago bundle-module # bundle for the browser 
spago bundle-module --platform node # bundle for node
spago bundle-module --minify # minified bundle for the browser 
spago bundle-module --platform node --minify # minified bundle for node
```

### Using `esbuild` to bundle 

See [`esbuild` documentation](https://esbuild.github.io/).

Basic usage:
```bash
esbuild --bundle index.js --platform=browser --outfile="bundle.js" # bundle for the browser
esbuild --bundle index.js --platform=node --outfile="bundle.js" # bundle for node
esbuild --bundle index.js --platform=browser --minify --outfile="bundle.minified.js" # minified bundle for the browser
esbuild --bundle index.js --platform=node --minify --outfile="bundle.minified.js" # minified bundle for the node
```

### Using `webpack` to bundle

See [`webpack` documentation](https://webpack.js.org/configuration/mode/).

Basic usage:
```bash
# Create webpack.config.js according to docs
webpack --mode=development # bundle
webpack --mode=production # minified bundle
```

### Using `parcel` to bundle

See [`parcel` documentation](https://parceljs.org/docs/).

Basic usage:
```bash
parcel build index.html --no-source-maps --no-optimize --no-scope-hoist --dist-dir "dist/" # bundle for the browser
parcel build index.html --no-source-maps --dist-dir "dist/" # minified bundle for the browser
```
