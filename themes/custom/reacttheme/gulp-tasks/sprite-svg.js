/**
 * @file
 * Task: Clean:CSS.
 */

module.exports = function (gulp, plugins, options) {
  gulp.task('sprite:svg', () => {
    gulp.src([
      options.svg.files,
    ])
      .pipe(plugins.plumber())
      .pipe(plugins.svgSprite(options.svg.config)).on('error', () => {
        plugins.gutil.log(options.svg.files);
      })
      .pipe(gulp.dest(options.svg.destination));
  });
};
