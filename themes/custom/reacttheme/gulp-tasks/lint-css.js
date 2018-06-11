/**
 * @file
 * Task: Lint: scss Files.
 */

module.exports = function (gulp, plugins, options) {
  // Lint scss files.
  gulp.task('lint:css', () => {
    gulp.src(options.sass.files)
      .pipe(plugins.plumber())
      .pipe(plugins.gulpStylelint({
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
      }))
      .pipe(plugins.plumber.stop());
  });

  // Lint scss files and throw an error for a CI to catch.
  gulp.task('lint:css-with-fail', () => {
    gulp.src(options.sass.files)
      .pipe(plugins.gulpStylelint({
        reporters: [
          {
            formatter: 'string',
            console: true,
            failAfterError: true,
          },
        ],
      }));
  });
};
