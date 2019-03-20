import gulp from 'gulp'
// 处理html 任务
function js() {
  return gulp
    .src('./app/**/*.js')
    // .pipe(changed('./dev'))
    .pipe(gulp.dest('./src/mid-pc/public/'))
}

gulp.task('js', js);

// 开发模式
gulp.task('js:dev', () => {

  gulp.watch('./app/**/*.js', (event) =>{
    return js();
  });

  return js();
});
