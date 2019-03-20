import gulp from 'gulp'

gulp.task('dev',
  gulp.series(
    'clean:dev',
    gulp.parallel('html:dev','css:dev','img:dev','js:dev'),
    'server',

  ))
