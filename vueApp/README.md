## `package.json`
Apart from the usual `node` project dependencies, `package.json` contains a few scripts that are worth mentioning.

### `npm run build:deps` 
Script to generate the google closure `deps.js` file that is include in the `oldstyleAngularApp`.
 
```
  "scripts": {
    ...
    "build:deps": "python node_modules/google-closure-library/closure/bin/build/depswriter.py --root_with_prefix='src/DEV/oldstyleAngularApp/src src' --root_with_prefix='dist/js ../../../dist/js' --output_file=/tmp/deps && cat node_modules/google-closure-library/closure/goog/base.js /tmp/deps > src/DEV/oldstyleAngularApp/deps.js",
    ...
  }
```

### `npm run build:goog`
Dirty hack to inject the `goog.provide('ngVueComponents');` into the bridge code to make it visible to the google closure build mechanics.
```
  "scripts": {
    ...
    "build:goog": "sed -i '1s/^/goog.provide(\"ngVueComponents\");\\n/' dist/js/appVueLib_NgVueBridge.js",
    ...
  }
```

