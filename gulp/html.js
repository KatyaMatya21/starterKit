const gulp = require('gulp');

module.exports = function html() {
  return gulp.src('src/html/*')
    .pipe(gulp.dest('docs/'))
};
