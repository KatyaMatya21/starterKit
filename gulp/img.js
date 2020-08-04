const gulp = require('gulp');

module.exports = function img() {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('docs/img'))
};
