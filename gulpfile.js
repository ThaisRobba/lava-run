// including plugins
var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat");

var srcPath = ['./lib/**/*.js', './src/entities/*.js', './src/boot.js',  './src/load.js',  './src/credits.js', './src/play.js',   './src/menu.js', './src/main.js'];

// default
gulp.task('default', function() {

    gulp.src('./**/*.js')
        .pipe(concat('lava-run.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'));
});


// task
gulp.task('uglify', function() {
    gulp.src('./build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});


// task
gulp.task('concat', function() {
    gulp.src(srcPath) // path to your files
    .pipe(concat('concat.js')) // concat and name it "concat.js"
    .pipe(gulp.dest('./build'));
});
