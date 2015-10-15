var gulp = require('gulp'),
    bower = require('gulp-bower'),
    filter = require('gulp-filter'),
    rename = require('gulp-rename'),
    rimraf = require('rimraf'),
    serve = require('gulp-serve'),
    browserSync = require('browser-sync').create();

gulp.task('install', ['clean'], function(cb) {
  var myFilter = filter(['angular/**', 'onsenui/build/{js,css}/**']);

  return bower()
    .pipe(myFilter)
    .pipe(rename(function(file) {
      file.dirname = file.dirname.replace(/^onsenui\/build/, 'onsenui');
    }))
    .pipe(gulp.dest('www/lib/'));
});

gulp.task('clean', function(cb) {
  rimraf('./bower_components', function() {
    rimraf('./www/lib', cb);
  });
});

gulp.task('watch', ['install'], function() {
  gulp.watch('www/**', function() {
    browserSync.reload();
  });
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: __dirname + '/www/',
      directory: true
    },
    ghostMode: false,
    notify: false,
    debounce: 200,
    startPath: 'index.html'
  });
});
