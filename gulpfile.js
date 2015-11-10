var gulp = require('gulp'),
    bower = require('gulp-bower'),
    rimraf = require('rimraf'),
    serve = require('gulp-serve'),
    browserSync = require('browser-sync').create();

gulp.task('install', ['clean'], function(cb) {
  return bower()
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
      directory: false
    },
    ghostMode: false,
    notify: false,
    debounce: 200,
    index: 'index.html'
  });
});
