# Node challenge

This is a minimal project on how to import cjs and esm and ps v0.15.0 for node.

The project is defined in the [`project-node`](./project-node) folder. It is a minimal project that loads and prints a string

* from a common js module, see [`example-cjs`](./example-cjs)
* from an esm module, see [`example-esm`](./example-esm)
* from a ps v0.15.0 esm module, see [`example-ps-esm`](./example-ps-esm)
  * first, via purescript import
  * second, via esm import in the FFI

To run it in node, we currently need to define a simple wrapper function for our application, see [`index.mjs`](./project-node/index.mjs). This is probably something that `spago run` should generate.
The alternative is to run it fromt he cli:
```
node -e "import('./output/Main/index.js').then(m => m.main())"
```

## Running

```bash
purs --version # make sure you get v0.15.0
cd example-ps-esm
spago build
cd ..

cd project-node
spago build
node index.mjs # use the wrapper
# or run it directly
node -e "import('./output/Main/index.js').then(m => m.main())"
```

## Output

```bash
Hello from my project
Hello from CJS
Hello from ESM
Hello from Purescript ESM
Hello from Purescript ESM via FFI
```
