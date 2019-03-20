import gulp from 'gulp';
import path from 'path';
import nodemon from 'gulp-nodemon';
import express from 'express';
import compress from 'compression';
const browserSync = require('browser-sync').create();


//koas启动项
gulp.task("node", function() {
  nodemon({
    script: 'src/mid-pc/app.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
});


// 项目根目录
const projectRoot = path.resolve(__dirname, '../../');

global.browserSync = browserSync;

gulp.task('server', gulp.parallel('node',() => {
  //mock基于fis-team的yog-devtools
  const app = express()
    .use(compress())
    .use(require('yog-devtools')({
      view_path: '', // 避免报错。
      rewrite_file: [path.join(projectRoot, './mock', 'server.conf')],
      data_path: [path.join(projectRoot, './mock')]
    }));
  browserSync.init(['src/**/*.pug','src/**/*.css','src/**/*.js','src/**/*.{png,gif,svg,jpg,jpeg}'],{
    proxy: 'http://localhost:3005', //所要代理的地址，端口要与bin/www中的端口一致
    // browser: 'chrome',
    notify: false,
    port: 3201,    //代理地址的端口号
    middleware: [app]
  });



}));
