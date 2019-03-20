import gulp from 'gulp'
import sass from 'gulp-sass';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
// 处理html 任务
let devServer = false;
function css() {
  return gulp
    .src('./app/**/*.scss')
    .pipe(gulpif(devServer, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(devServer, sourcemaps.write()))
    .pipe(gulp.dest('./src/mid-pc/public/'))
}

gulp.task('css', css);

// 开发模式
gulp.task('css:dev', () => {

  gulp.watch('./app/css/**/*.scss', (event) =>{
    return css();
  });

  return css();
});
