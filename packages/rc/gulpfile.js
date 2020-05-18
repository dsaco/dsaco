const gulp = require('gulp');
const sass = require('gulp-sass');

function scss(cb) {
	gulp.src(['./src/components/**/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('lib/'));
	cb();
}

gulp.task('build', gulp.series(scss));