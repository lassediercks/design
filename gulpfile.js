var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('css', function () {
    var processors = [
        cssnext({browsers: ['last 1 version']}),
        cssnano(),
    ];
    return gulp.src('./lassediercks.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});