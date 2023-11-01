module.exports = function clean(cb) {
  import('del').then(function(del){
    return del.deleteAsync('docs').then(() => {
      cb();
   });
  });
};
