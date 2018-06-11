/**
 * @file
 * Task: Test: CSS.
 */

module.exports = function (gulp, plugins, options) {
  gulp.task('test:css', () => {
    gulp.src(options.css.file)
      .pipe(plugins.plumber())
      .pipe(plugins.parker());
  });
};
