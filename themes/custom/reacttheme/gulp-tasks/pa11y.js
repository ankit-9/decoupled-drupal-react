/**
 * @file
 * Task: pa11y.
 * Pa11y tests websites for accessibility issues. http://pa11y.org/.
 */

module.exports = function (gulp, plugins, opt) {
  const pa11y = plugins.pa11y;
  const gutil = plugins.gutil;

  gulp.task('pa11y-test', (cb) => {
    let errors = 0;
    let warnings = 0;
    let status = 0;
    const testpa11y = [];
    plugins.gutil.log('Accessibility Audit starts');
    Object.keys(opt.pa11y.urls).forEach((url) => {
      if (Object.keys(opt.pa11y.urls[url]).length) {
        testpa11y.push(pa11y(opt.pa11y.urls[url], opt.pa11y));
      }
    });
    Promise.all(testpa11y)
      .then((results) => {
        Object.keys(results).forEach((key) => {
          if (Object.keys(results[key].issues).length) {
            Object.keys(results[key].issues).forEach((issue) => {
              if (results[key].issues[issue].type === 'error') {
                errors += 1;
                gutil.log(gutil.colors.red(
                  `\n================================================================================\n
                  ${results[key].pageUrl}\n
                  ${results[key].issues[issue].type}\n
                  ${results[key].issues[issue].code}\n
                  ${results[key].issues[issue].context}\n
                  ${results[key].issues[issue].message}\n
                  ${results[key].issues[issue].selector}
                  \n================================================================================\n`,
                ));
              }
              else if (results[key].issues[issue].type === 'warning') {
                warnings += 1;
                gutil.log(gutil.colors.magenta(
                  `\n================================================================================\n
                  ${results[key].pageUrl}\n
                  ${results[key].issues[issue].type}\n
                  ${results[key].issues[issue].code}\n
                  ${results[key].issues[issue].context}\n
                  ${results[key].issues[issue].message}\n
                  ${results[key].issues[issue].selector}
                  \n================================================================================\n`,
                ));
              }
            });
          }
          else {
            gutil.log(results[key]);
          }
        });

        if (opt.pa11y.threshold.errors > -1 && errors > opt.pa11y.threshold.errors) {
          cb(new gutil.PluginError('pa11y',
            gutil.colors.red(
              `\n================================================================================\n
                Build failed due to accessibility errors exceeding threshold ( ${errors} errors) with a threshold of ${opt.pa11y.threshold.errors}
                \n================================================================================\n
                ${errors} errors\n
                ${warnings} warnings\n`,
            ),
          ));
        }
        else if (opt.pa11y.threshold.warnings > -1 && warnings > opt.pa11y.threshold.warnings) {
          cb(new gutil.PluginError('pa11y',
            gutil.colors.magenta(
              `\n================================================================================\n
               Build failed due to accessibility warnings exceeding threshold (${warnings} warnings) with a threshold of ${opt.pa11y.threshold.warnings}
              \n================================================================================\n
              ${errors} errors\n
              ${warnings} warnings\n`,
            ),
          ));
        }
        else {
          gutil.log('pa11y',
            gutil.colors.cyan(
              `\n================================================================================\n
                Build succeeded.
              \n================================================================================\n
              ${errors} errors\n
              ${warnings} warnings\n`,
            ),
          );
          status = 1;
        }
        if (status === 0) {
          return 0;
        }
      })
      .catch((error) => {
        gutil.log(error.message);
        return 0;
      });
  });
};
