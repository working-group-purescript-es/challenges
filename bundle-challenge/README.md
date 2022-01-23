# bundle-challenge

The following shows the result of bundling the following versions

* [es-modules+purity-none](https://github.com/working-group-purescript-es/purescript/tree/es-modules%2Bpurity-none)
* [es-modules+purity-ctors](https://github.com/working-group-purescript-es/purescript/tree/es-modules%2Bpurity-ctors)
* [es-modules+purity-all](https://github.com/working-group-purescript-es/purescript/tree/es-modules%2Bpurity-all)
* [v0.14.5](https://github.com/purescript/purescript)

with the following bundlers
* esbuild
* parcel
* webpack
* purs bundle (v0.14.5 only)

in the following configurations
* non-optimized 
* optimized (minified)
* gzipped


## purescript-halogen-template

Build the purescript branches and store them to `~/.local/bin/{pure-all|pure-ctors|pure-none}/purs`.

Branch [bundle-challenge](https://github.com/working-group-purescript-es/purescript-halogen-template/tree/bundle-challenge), run `bundle.sh`. 

### results

The output bundles can be seen [here](https://github.com/working-group-purescript-es/purescript-halogen-template/tree/bundle-challenge/bundles).

```
➜ exa -lah --no-user --no-time --no-permissions -R bundles/
Size Name
   - esbuild
   - parcel
   - purs
   - webpack

bundles/esbuild:
Size Name
   - pure-all
   - pure-ctors
   - pure-none
   - v0.14.5

bundles/esbuild/pure-all:
Size Name
271k index.js
 40k index.js.gz
113k index.minified.js
 24k index.minified.js.gz

bundles/esbuild/pure-ctors:
Size Name
427k index.js
 60k index.js.gz
178k index.minified.js
 36k index.minified.js.gz

bundles/esbuild/pure-none:
Size Name
582k index.js
 80k index.js.gz
259k index.minified.js
 49k index.minified.js.gz

bundles/esbuild/v0.14.5:
Size Name
259k index.js
 36k index.js.gz
113k index.minified.js
 25k index.minified.js.gz

bundles/parcel:
Size Name
   - pure-all
   - pure-ctors
   - pure-none
   - v0.14.5

bundles/parcel/pure-all:
Size Name
155k index.2304616d.js
 30k index.2304616d.js.gz
2.0M index.fc5e18cc.js
229k index.fc5e18cc.js.gz
 166 index.html

bundles/parcel/pure-ctors:
Size Name
156k index.07601cbb.js
 30k index.07601cbb.js.gz
2.0M index.1a037f39.js
229k index.1a037f39.js.gz
 166 index.html

bundles/parcel/pure-none:
Size Name
243k index.61a85490.js
 43k index.61a85490.js.gz
2.0M index.70c415b0.js
234k index.70c415b0.js.gz
 166 index.html

bundles/parcel/v0.14.5:
Size Name
109k index.cjs.4c13a45e.js
 23k index.cjs.4c13a45e.js.gz
290k index.cjs.19e88ac9.js
 40k index.cjs.19e88ac9.js.gz
 156 index.cjs.html

bundles/purs:
Size Name
 172 index.cjs.html
280k index.js
 40k index.js.gz

bundles/webpack:
Size Name
   - pure-all
   - pure-ctors
   - pure-none
   - v0.14.5

bundles/webpack/pure-all:
Size Name
2.9M index.js
256k index.js.gz
 91k index.minified.js
 19k index.minified.js.gz

bundles/webpack/pure-ctors:
Size Name
2.9M index.js
256k index.js.gz
135k index.minified.js
 26k index.minified.js.gz

bundles/webpack/pure-none:
Size Name
2.9M index.js
262k index.js.gz
232k index.minified.js
 41k index.minified.js.gz

bundles/webpack/v0.14.5:
Size Name
292k index.js
 41k index.js.gz
110k index.minified.js
 23k index.minified.js.gz
(base) 
```
