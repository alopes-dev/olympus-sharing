module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@root': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@configurations': './src/configurations',
            '@constants': './src/constants',
            '@contexts': './src/contexts',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@stores': './src/stores',
          },
        },
        'react-native-reanimated/plugin',
      ],
    ],
  }
}
