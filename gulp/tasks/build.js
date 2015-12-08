var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var config = require('../config');

gulp.task('build', ['rename', 'sass'], function() {
  browserify(config.dirs.src + '/js/rovu.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(fs.createWriteStream(config.dirs.dest + '/js/rovu.js'));
});
