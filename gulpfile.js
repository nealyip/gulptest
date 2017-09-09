const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const merge = require('merge2');

gulp.task("default", () => {
    let result = tsProject.src().pipe(tsProject());
    return merge(
        [
            result.dts.pipe(gulp.dest("dist")),
            result.js.pipe(gulp.dest("dist"))
        ]);
});
