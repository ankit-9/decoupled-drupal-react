/**
 * @file
 * Task: Compile: Sass.
 */

/* global module */

module.exports = function (gulp, plugins, options) {
  gulp.task('compile:sass', () => {
    gulp.src([
      options.sass.files,
    ])
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sassGlob())
      .pipe(plugins.sass({
        errLogToConsole: true,
        outputStyle: 'expanded',
      }))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions', 'iOS >=6'],
        cascade: false,
      }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(options.sass.destination));
  });
};
