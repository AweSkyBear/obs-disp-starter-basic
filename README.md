# Obs Disp Starter - Basic

Live reload (dev server) with `TypeScript` support, built with `Webpack`, linted with `Prettier`, and basic `obs-disp` starter setup (with its API initialized and ready to use).

Technologies:
- [obs-disp](https://github.com/AweSkyBear/obs-disp)
- Webpack
- TypeScript
- prettier

## How to use

To run and develop on the dev server
```
npm install
npm start
``` 

Then open `localhost:9000` in your browser.


**To build for production**
```
npm run build
```

This will output minified `dist/index.js`

Both `start` and `build` commands will output to `dist` folder.

## Note on obs-disp

`obs-disp` is a thin wrapper for writing straight-to-the-point JavaScript.

## Note on webpack

Modify the `webpack.config.js` at your convenience. For example, change the port of the dev server there.

Currently `target` is set to

## Note on TS and output

Currently `target` is set to `es6` which should be good for all modern browsers.

## Note on tsconfig.json

Modify the `tsconfig.json` at your convenience
