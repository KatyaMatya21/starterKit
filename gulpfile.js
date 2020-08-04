const gulp = require('gulp');

const html = require('./gulp/html');
const styles = require('./gulp/styles');
const fonts = require('./gulp/fonts');
const img = require('./gulp/img');
const scripts = require('./gulp/scripts');

const clean = require('./gulp/clean');

const dev = gulp.parallel(html, fonts, img, styles, scripts);
const build = gulp.series(clean, dev);

module.exports.start = gulp.series(build);
