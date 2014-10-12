// 引入gulp
var gulp = require('gulp');
 
// 引入gulp-plugins
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
 
// 定义sass文件路径
var paths = {
  sass: ['./scss/**/*.scss']
};
 
/*
  创建sass任务，它会监听./scss/ionic.app.scss里面的文件变化，然后编译为css到./www/css/目录.
  然后进行css压缩，将压缩后的文件重命名为min.css结尾，然后还是放到./www/css/目录下。  
*/
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});
 
//watch任务，监听文件变化
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(['./www/*.html'], ['html']);
});
 
// connect任务，监听项目变化后自动刷新项目
gulp.task('connect', function() {
  connect.server({
    root: 'www',
    livereload: true
  });
});
  
gulp.task('html', function () {
  gulp.src('./www/*.html')
    .pipe(connect.reload());
});
 
// default默认任务，从此开始执行
gulp.task('default', ['connect','sass','watch']);