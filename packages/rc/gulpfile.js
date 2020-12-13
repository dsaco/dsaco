const gulp = require('gulp');
const sass = require('gulp-sass');

function css(cb) {
	gulp.src(['./src/components/**/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('lib/'));
	cb();
}
function scss(cb) {
	gulp.src(['./src/components/**/*.scss']).pipe(gulp.dest('lib/'));
	cb();
}

gulp.task('build', gulp.series(css, scss));
