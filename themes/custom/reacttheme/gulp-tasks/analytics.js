/**
 * @file
 * Task: Compress analysis
 '!' + options.analytics.destination + 'all.js'
 */

module.exports = function (gulp, plugins, options) {
  gulp.task('analytics:analytics', () => {
    gulp.src([
      options.analytics.files.try_block,
      options.analytics.files.js,
      options.analytics.files.catch_block,
    ])
      .pipe(plugins.plumber())
      .pipe(plugins.concat('all.js'))
      .pipe(gulp.dest(options.analytics.destination))
      .pipe(plugins.plumber.stop());
  });
};
