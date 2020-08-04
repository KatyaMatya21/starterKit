const del = require('del');

module.exports = function clean(cb) {
  return del('docs').then(() => {
    cb();
  });
};
