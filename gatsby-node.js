exports.onCreateWebpackConfig = ({
    actions,
  }) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
      externals: {
        jquery: 'jQuery', // important: 'Q' capitalized
      },
      resolve: {
        fallback: {
          "fs": false,
          "path": require.resolve("path-browserify"),
          "stream": require.resolve("stream-browserify"),
          "util": false, //require.resolve
        },
      }
    })
  }