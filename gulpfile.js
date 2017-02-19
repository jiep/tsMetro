const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
  gulp.src(['src/data/**/*']).pipe(gulp.dest('dist/data'));
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
  gulp.watch('src/**/*.ts', ['build']);
});

gulp.task('default', ['watch']);
