import gulp from 'gulp';
import del from 'del';

// 删除开发目录
gulp.task('clean:dev',  () => {
  return del('./src/mid-pc/public/dev');
});

// 删除打包目录
gulp.task('clean:prod', () => {
  return del('./dist');
});

gulp.task('clean', gulp.parallel('clean:prod', 'clean:dev'));
