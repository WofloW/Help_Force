// ����gulp
var gulp = require('gulp');
 
// ����gulp-plugins
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
 
// ����sass�ļ�·��
var paths = {
  sass: ['./scss/**/*.scss']
};
 
/*
  ����sass�����������./scss/ionic.app.scss������ļ��仯��Ȼ�����Ϊcss��./www/css/Ŀ¼.
  Ȼ�����cssѹ������ѹ������ļ�������Ϊmin.css��β��Ȼ���Ƿŵ�./www/css/Ŀ¼�¡�  
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
 
//watch���񣬼����ļ��仯
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(['./www/*.html'], ['html']);
});
 
// connect���񣬼�����Ŀ�仯���Զ�ˢ����Ŀ
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
 
// defaultĬ�����񣬴Ӵ˿�ʼִ��
gulp.task('default', ['connect','sass','watch']);