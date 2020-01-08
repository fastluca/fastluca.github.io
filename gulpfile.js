const gulp = require('gulp');
const log = require('fancy-log');
const critical = require('critical').stream;

// Generate & Inline Critical-path CSS
gulp.task('critical', () => {
  return gulp
    .src('index.html')
    .pipe(critical({
      base: '',
      inline: true,
      css: [
        'css/*.css'
      ]
    }))
    .on('error', err => {
      log.error(err.message);
    })
    .pipe(gulp.dest('dist'));
});
