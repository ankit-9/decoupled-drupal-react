/**
 * @file
 * Task: Clean:CSS.
 */

module.exports = function (gulp, plugins, options) {
  gulp.task('compress:image', () => {
    gulp.src(options.images.files)
      .pipe(plugins.plumber())
      .pipe(plugins.imagemin([
        plugins.imagemin.gifsicle({ interlaced: true }),
        plugins.imagemin.svgo({ plugins: [{ removeViewBox: true }] }),
        plugins.pngquant({
          speed: 8,
          quality: '25-35',
        }),
        plugins.jpegoptim({
          max: 40,
          progressive: true,
        }),
      ])).on('error', () => {
        plugins.gutil.log(options.images.files);
      })
      .pipe(gulp.dest(options.images.destination))
      .pipe(plugins.plumber.stop());
  });
};
