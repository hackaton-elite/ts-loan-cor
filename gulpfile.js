var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function () {
    var tsResult = gulp.src('src/ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'app.js',
            target: 'ES5'
        }));
    return tsResult.js.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['typescript']);

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['default'])
        .on('error', function(err){ console.log(err.message); });
})
