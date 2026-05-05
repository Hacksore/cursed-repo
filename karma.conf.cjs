module.exports = function configureKarma(config) {
  config.set({
    frameworks: ['mocha'],
    files: ['test/**/*.test.js'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
  });
};
