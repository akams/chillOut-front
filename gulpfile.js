var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// Compiles SCSS files from /scss into /css
gulp.task('sass', function () {
	return gulp.src('src/assets/scss/freelancer.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/assets/css-freelancer-template'))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('src/assets/css-freelancer-template/freelancer.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/assets/css-freelancer-template'))
});

// Minify custom JS
gulp.task('minify-js', function() {
  return gulp.src('src/assets/js-freelancer-template/freelancer.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/assets/js-freelancer-template'))
});

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function() {
  gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('src/assets/bootstrap'))

  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/assets/jquery'))

  gulp.src(['node_modules/popper.js/dist/umd/popper.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/assets/popper'))

  gulp.src([
      'node_modules/font-awesome/**',
      '!node_modules/font-awesome/**/*.map',
      '!node_modules/font-awesome/.npmignore',
      '!node_modules/font-awesome/*.txt',
      '!node_modules/font-awesome/*.md',
      '!node_modules/font-awesome/*.json'
    ])
    .pipe(gulp.dest('src/assets/font-awesome'))
})

// Default task
gulp.task('default', ['sass', 'minify-css', 'minify-js', 'copy']);

// Dev task with browserSync
gulp.task('dev', ['sass', 'minify-css', 'minify-js'], function() {
  gulp.watch('src/assets/scss/*.scss', ['sass']);
  gulp.watch('src/assets/css/*.css', ['minify-css']);
  gulp.watch('src/assets/js/*.js', ['minify-js']);
});

