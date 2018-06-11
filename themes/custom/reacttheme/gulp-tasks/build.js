/**
 * @file
 * Task: Build.
 */

module.exports = function (gulp, plugins) {
  gulp.task('build', [
    'compile:sass',
    'compress:image',
    'minify:css',
  ], (cb) => {
  // Run linting last, otherwise its output gets lost.
    plugins.runSequence(['lint:js-gulp', 'lint:js-with-fail', 'lint:css-with-fail'], cb);
  });

  gulp.task('build:dev', [
    'compile:sass',
    'compress:image',
    'minify:css',
  ], (cb) => {
    // Run linting last, otherwise its output gets lost.
    plugins.runSequence(['compile:styleguide', 'lint:js-gulp', 'lint:js', 'lint:css'], cb);
  });
};

