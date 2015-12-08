var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var config = require('../config').serve;
var dirs = require('../config').dirs;

gulp.task('browserSync', ['build'], function() {
  browserSync.init(config);
  browserSync.watch(dirs.dest + '/**/*').on('change', browserSync.reload);
});
