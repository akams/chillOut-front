var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

// Compiles SCSS files from /scss into /css
gulp.task('sass', function () {
	// return gulp.src('src/assets/scss/freelancer.scss')
	// 	.pipe(sass())
	// 	.pipe(gulp.dest('src/assets/css-freelancer-template'))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('src/assets/impact/**/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/assets/impact'))
});

// Minify custom JS
gulp.task('minify-js', function() {
  // return gulp.src('src/assets/js-freelancer-template/freelancer.js')
  //   .pipe(uglify())
  //   .pipe(rename({
  //     suffix: '.min'
  //   }))
  //   .pipe(gulp.dest('src/assets/js-freelancer-template'))
});

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task("scripts.client", function () {
  // 'src/assets/impact/**/*.js'
  return gulp.src([
  ])
  .pipe(sourcemaps.init())
  .pipe(concat("client.0.0.0.min.js"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("src/assets/script"));
});
gulp.task("scripts.third", function () {
  return gulp.src([
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/tether/dist/js/tether.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat("third.0.0.0.min.js"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("src/assets/script"));
});

// Stylesheets
gulp.task("stylesheets.client", function () {
  // 'src/assets/impact/**/*.css'
  return gulp.src([
  ])
  .pipe(sourcemaps.init())
  .pipe(concat("client.0.0.0.min.css"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("src/assets/stylesheets"));
});

gulp.task("stylesheets.third", function () {
  return gulp.src([
    'node_modules/bootstrap/dist/**/*.css',
    'node_modules/tether/dist/**/*.css',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat("third.0.0.0.min.css"))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("src/assets/stylesheets"));
});


gulp.task('font', function() {
  gulp.src([
      'node_modules/font-awesome/**',
      '!node_modules/font-awesome/**/*.map',
      '!node_modules/font-awesome/.npmignore',
      '!node_modules/font-awesome/*.txt',
      '!node_modules/font-awesome/*.md',
      '!node_modules/font-awesome/*.json',
      'src/assets/impact/fonts/**'
    ])
    .pipe(gulp.dest('src/assets/fonts'))
});

// Default 2 task
gulp.task('default2', ['sass', 'minify-css', 'minify-js', 'copy']);

// Default 1 - task
gulp.task('default', ['scripts', 'stylesheets', 'font']);

// Script
gulp.task("scripts", ["scripts.client", "scripts.third"]);
// Stylesheet
gulp.task("stylesheets", ["stylesheets.client", "stylesheets.third"]);



// Dev task with browserSync
gulp.task('dev', ['sass', 'minify-css', 'minify-js'], function() {
  // gulp.watch('src/assets/scss/*.scss', ['sass']);
  // gulp.watch('src/assets/css/*.css', ['minify-css']);
  // gulp.watch('src/assets/js/*.js', ['minify-js']);
});
