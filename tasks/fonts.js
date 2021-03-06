var gulp          = require('gulp');
var config        = require('../package.json').config;

gulp.task('fonts', function () {
    return gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dist.fonts));
  });
   
  gulp.task('fonts:watch', function () {
    gulp.watch(config.src.fonts, ['fonts']);
  });