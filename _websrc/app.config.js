module.exports = {
  tasks: {
    cloneFiles: true,
  },
  watch: function(gulp, watch) {
    return [
      watch([
        './assets/_src/sass/theme/**/*',
      ], function () {
        gulp.start('cloneFiles');
      })

    ]
  },
}
