/**
 * @file
 * Task: Lint: Scripts.
 */

module.exports = function (gulp, plugins, options) {
  // Lint JavaScript.
  gulp.task('lint:js', () => {
    gulp.src(options.jsLinting.files.theme)
      .pipe(plugins.plumber())
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.plumber.stop());
  });

  gulp.task('lint:js-gulp', () => {
    gulp.src(options.jsLinting.files.gulp)
      .pipe(plugins.plumber())
      .pipe(plugins.eslint({
        rules: {
          'no-mutable-exports': 0,
          'func-names': 0,
          'max-nested-callbacks': 0,
        },
        useEslintrc: true,
        ecmaFeatures: {
          modules: true,
          module: true,
        },
        env: {
          mocha: true,
          node: true,
          es6: true,
        },
      }))
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failOnError());
  });

  // Lint JavaScript and throw an error for a CI to catch.
  gulp.task('lint:js-with-fail', () => {
    gulp.src(options.jsLinting.files.theme)
      .pipe(plugins.plumber())
      .pipe(plugins.eslint({
        rules: {
          'no-mutable-exports': 0,
          'func-names': 0,
          'max-nested-callbacks': 0,
        },
        useEslintrc: true,
        ecmaFeatures: {
          modules: true,
          module: true,
        },
        env: {
          mocha: true,
          node: true,
          es6: true,
        },
      }))
      .pipe(plugins.eslint.format())
      .pipe(plugins.eslint.failOnError());
  });
};
