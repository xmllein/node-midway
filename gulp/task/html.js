import gulp from 'gulp'
// 处理html 任务
function html() {
  return gulp
    .src('./app/views/**/*.pug')
    // .pipe(changed('./dev'))
    .pipe(gulp.dest('./src/mid-pc/views/'))
}

gulp.task('html', html);

// 开发模式
gulp.task('html:dev', () => {

  gulp.watch('./app/views/**/*.pug', (event) =>{
    return html();
  });

  return html();
});
