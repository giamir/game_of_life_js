module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'public/js/**/*.js',
      'test/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'js/**/*.js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};