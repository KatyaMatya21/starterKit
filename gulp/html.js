const gulp = require('gulp');
const hb = require('gulp-hb');
const rename = require('gulp-rename');
const path = require('path');
//const root = path.resolve('src/img/svg');

module.exports = function html() {
  return gulp.src('src/html/*.hbs')
    .pipe(hb()
      .partials('./src/html/templates/**/*.hbs')
    )
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('docs/'))
};
