var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyjs = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('development/scss-css/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('development/scss-css'));
});

gulp.task('script', function () {
    return gulp.src('development/minify/js/*.js')
        .pipe(minifyjs())
        .pipe(gulp.dest('development/minify/minified/js'));
});

gulp.task('styles', function () {
    return gulp.src('development/minify/css/style.css')
        .pipe(minifycss())
        .pipe(gulp.dest('development/minify/minified/css'));
});

gulp.task('watchjs', function () {
    gulp.watch('development/minify/js/*.js', ['script']);
});

gulp.task('watchcss', function () {
    gulp.watch('development/minify/css/*.css', ['styles']);
});

gulp.task('minifyimg', function () {
    return gulp.src('development/minify/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('development/minify/minified/img'));
});

gulp.task('watchall', ['watchjs', 'watchcss']);

gulp.task('watchnminify', ['styles', 'script', 'minifyimg', 'watchall']);
