/**
 * @file
 * Task: Clean:CSS.
 */

module.exports = function (gulp, plugins, options) {
  // Clean CSS files.
  gulp.task('clean:css', () => {
    plugins.del.sync([
      options.css.files,
    ]);
  });
};
