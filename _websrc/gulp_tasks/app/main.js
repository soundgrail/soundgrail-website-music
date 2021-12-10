const gulp     = require('gulp');
const newer    = require('gulp-newer');
const through  = require('through2');
const argv     = require('yargs').argv;
const del      = require('del');
let isTemplate = __dirname.indexOf('/ultimate-jekyll/') > -1;
let isServer   = (argv.buildLocation == 'server');
const JSON5    = require('json5');
const tools    = new (require('../../libraries/tools.js'));

gulp.task('cloneFiles', async function() {

  gulp.src(['./assets/_src/sass/theme/**/*'])
    .pipe(newer('./assets/css'))
    .pipe(gulp.dest('./assets/css'));

  return gulp.src(['./assets/_src/sass/theme/style.css'])
    .pipe(newer('./assets/css'))
    .pipe(gulp.dest('./assets/css'));
});
