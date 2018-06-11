/**
 * @file
 * Task: Watch.
 */

module.exports = function (gulp, plugins, options) {
  gulp.task('watch', ['watch:sass', 'watch:js']);
  gulp.task('watch:js', () => {
    gulp.watch([
      options.js.files,
    ], ['lint:js', 'lint:css']);
  });

  gulp.task('watch:sass', () => {
    gulp.watch([
      options.sass.files,
    ], ['compile:sass', 'minify:css']);
  });
};
