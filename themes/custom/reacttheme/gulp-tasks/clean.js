/**
 * @file
 * Task: Clean.
 */

module.exports = (gulp) => {
  gulp.task('clean', ['clean:css', 'clean:styleguide']);
};
