"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var stylus = require("gulp-stylus");

var paths = {
    css: "src/style/**/*.styl",
    appJS: "./src/js/app.jsx",
    js: "src/js/**/*.js",
    vendor: "src/vendor/**/*"
};

gulp.task("css", function () {
    return gulp.src(paths.css)
        .pipe(stylus())
        .pipe(gulp.dest("build/css"));
});

gulp.task("vendor", function () {
    return gulp.src(paths.vendor)
        .pipe(gulp.dest("build/vendor"));
});

gulp.task("js", function () {
    browserify(paths.appJS)
        .transform(reactify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("build/js/"));
});

gulp.task("watch", function() {
    gulp.watch(paths.css, ["css"]);
    gulp.watch(paths.js, ["js"]);
});

gulp.task("default", ["watch", "css", "js", "vendor"]);
