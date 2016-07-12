const gulp = require('gulp')
const webpack = require('gulp-webpack')
const webserver = require('gulp-webserver')
const less = require('gulp-less')
const sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', () => gulp.src('src/js/index.js')
  .pipe(webpack({
    context: __dirname + '/src/js',
    entry: './index.js',
    devtool: "inline-source-map",
    output: {
      path: __dirname + '/bin/js',
      filename: 'compiled-javascript.js',
      sourceMapFilename: 'compiled-javascript.map.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest('bin/js'))
)
gulp.task('html', () => gulp.src('./src/html/*')
  .pipe(gulp.dest('./bin'))
)
gulp.task('less', [], () => {
  gulp.src('./src/less/index.less')
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./bin/css'))
})

gulp.task('watch', () => {
  gulp.watch('./src/js/**/*.js', ['compile'])
  gulp.watch('./src/html/*', ['html'])
  gulp.watch('./src/assets/*', ['assets'])
  gulp.watch('./src/less/*.less', ['less'])
})

gulp.task('default', ['compile', 'html', 'less', 'watch'], () => gulp.src('./bin')
  .pipe(webserver({
    livereload: true,
    open: true
  }))
)
