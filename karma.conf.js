// Karma configuration
// Generated on Mon Jul 10 2017 20:06:14 GMT+0530 (IST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular.min.js',
      "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-animate.min.js",
      "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular-aria.min.js",
      "https://ajax.googleapis.com/ajax/libs/angular_material/1.1.4/angular-material.min.js",
      "https://unpkg.com/@angular/router@0.2.0/angular1/angular_1_router.js",
      'src/main/webapp/angular.mocks.js',
      'src/main/webapp/app/services/**.js',
      'src/main/webapp/app/**/**.js',
      'src/main/webapp/app.js',
      
      'src/main/webapp/tests/tournaments.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 8080,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
