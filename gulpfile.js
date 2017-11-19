var gulp = require('gulp'),
sass = require("gulp-sass"),
cleanCSS = require("gulp-clean-css"),
connect = require('gulp-connect');

var cors = function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', '*');
next();
};

gulp.task('connect', function() {
connect.server({
  root: './',
  port: 3000,
  livereload: true,
  middleware: function () {
    return [cors];
  }
});
});

gulp.task('sass', function () {
return gulp.src('./sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'));
});


// Converts CSS to minified CSS with gulp-clean-css
gulp.task("minify-css", ["sass"], function() {
return gulp.src('./style.css')
  .pipe(cleanCSS({
    compatibility: "ie8"
  }))
  .pipe(gulp.dest('./'))
  .pipe(connect.reload());
});

gulp.task('html', function() {
gulp.src('./*.html')
  .pipe(connect.reload());
});

gulp.task('scripts', function() {
gulp.src('**/*.js')
  .pipe(connect.reload());
});

gulp.task('watch', function() {
gulp.watch(['./*.html'], ['html']);
gulp.watch(['**/*.js'], ['scripts']);
gulp.watch(['./sass/*.scss'], ['sass', 'minify-css']);
});

gulp.task('default', ['connect', 'watch']);