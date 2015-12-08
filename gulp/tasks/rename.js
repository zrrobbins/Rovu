var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');

gulp.task('rename', function() {
  gulp.src(config.dirs.src + '/**/*.html')
    .pipe(gulp.dest(config.dirs.dest));
});
