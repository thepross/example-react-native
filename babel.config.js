module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      test: 'node_modules/pixelshapern/src/libs/GifLoader.js', // change to your web JS code file path
      // test: '**/GifLoader.js', // also can use this [glob](https://www.npmjs.com/package/glob) patterns
      plugins: [
        [
          'transform-globals',
          {
            import: {
              'react-native-filereader': {
                FileReader: 'default',
              },
            },
          },
        ],
      ],
    },
  ],
};
