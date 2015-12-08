var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('default', ['browserSync'], function() {
  watch(config.dirs.src + '/**/*.*', {debounceDelay: 2000, name: "Active Reload"}, function () {
    gulp.start('build');
  });
});
