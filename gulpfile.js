var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyjs = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('development/scss-css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('development/scss-css'));
});

gulp.task('script', function () {
    return gulp.src('development/minify/js/*.js').pipe(minifyjs()).pipe(gulp.dest('development/minify/minified/js'));
});

gulp.task('styles', function () {
    return gulp.src('development/minify/css/style.css').pipe(minifycss()).pipe(gulp.dest('development/minify/minified/css'));
});

gulp.task('minifyall', ['styles', 'script']);
