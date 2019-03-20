import gulp from 'gulp'

function img() {
  return gulp
    .src(['./app/**/*.{png,gif,svg,jpg,jpeg}'])
    .pipe(gulp.dest('./src/mid-pc/public/'))
}

gulp.task('img', img);

// 图片开发模式
gulp.task('img:dev', () => {

  gulp.watch('./app/**/*.{png,gif,svg,jpg,jpeg}',  (event) => {
    return img();
  });

  return img();
});
