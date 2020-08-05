const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssCustomMedia = require('postcss-custom-media');
const precss = require('precss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

module.exports = function styles() {
  var plugins = [
    postcssImport(),
    postcssMixins(),
    postcssCustomMedia(),
    precss(),
    postcssPresetEnv({
      autoprefixer: {
        grid: true
      },
      stage: 3
    }),
    cssnano()
  ];
  return gulp.src('src/css/*.pcss')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest('docs/css'))
};
