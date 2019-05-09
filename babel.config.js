module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "last 2 versions",
            "ie >= 11"
          ]
        },
        "useBuiltIns": "usage"
      }
    ]
  ]
  const plugins = [
    "babel-plugin-dynamic-import-webpack",
    [
      "@babel/plugin-transform-runtime", {
        "corejs": 2
      }
    ]

  ]

  return {
    presets,
    plugins
  }
}
