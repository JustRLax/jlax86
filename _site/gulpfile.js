let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    globbing = require('gulp-css-globbing'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    flatten = require('gulp-flatten'),
    newer = require('gulp-newer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    open = require('gulp-open'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    child = require('child_process'),
    //babel = require('gulp-babel'),
    cloudinary = require('gulp-cloudinary-upload'),
    devTasks = ['styles', 'vendor-js', 'js', 'images', 'svg-images', 'resources', 'browser-sync', 'watch'],
    prodTasks = ['prod-styles', 'prod-vendor-js', 'prod-js', 'prod-images', 'prod-svg-images', 'prod-resources'];

    var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
    var messages = {
        jekyllBuild: '<span style="color: blue">Running:</span> $ jekyll build'
    };

// Dev tasks
gulp.task('styles', function() {
  return gulp.src('_assets/styles/application.scss')
    .pipe(flatten())
    .pipe(sourcemaps.init())
    .pipe(globbing({extensions: '.scss'}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sourcemaps.write())
    .on('error', handleError)
    .pipe(gulp.dest('assets/styles'))
    .pipe(gulp.dest('_site/assets/styles'))
    .pipe(browserSync.stream())
});

gulp.task('vendor-js', () => {
  return gulp.src([
    '_assets/js/vendor/**/*.js',
  ])
  .pipe(concat('application-vendor.js'))
  .pipe(uglify())
  .on('error', handleError)
  .pipe(gulp.dest('assets/js'))
  .pipe(gulp.dest('_site/assets/js'))
});

gulp.task('js', () => {
  return gulp.src([
    '_assets/js/scripts/**/*.js',
  ])
  .pipe(sourcemaps.init())
  //.pipe(babel({ presets: ['env'] }))
  // .pipe(jshint())
  // .pipe(jshint.reporter(stylish))
  .on('error', handleError)
  .pipe(concat('application.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets/js'))
  .pipe(gulp.dest('_site/assets/js'))
  .pipe(browserSync.stream())
});

gulp.task('images', () => {
  return gulp.src('_assets/resources/*.{jpg,jpeg,png,gif,ico}')
    .pipe(flatten())
    .pipe(newer('assets/resources'))
    .pipe(cloudinary({
      config: {
        cloud_name: 'justinlaxamana',
        api_key: '654636643421472',
        api_secret: '64gb0ku_I2X5126dl9pBIy8Rc4o'
      }
    }))
    .pipe(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
        svgoPlugins: []
    }))
    .on('error', handleError)
    .pipe(gulp.dest('assets/resources'))
    .pipe(gulp.dest('_site/assets/resources'))
});

gulp.task('svg-images', () => {
  return gulp.src('_assets/resources/*.{svg}')
    .pipe(flatten())
    .pipe(newer('assets/resources'))
    .pipe(cloudinary({
      config: {
        cloud_name: 'justinlaxamana',
        api_key: '654636643421472',
        api_secret: '64gb0ku_I2X5126dl9pBIy8Rc4o'
      }
    }))
    .on('error', handleError)
    .pipe(gulp.dest('assets/resources'))
    .pipe(gulp.dest('_site/assets/resources'))
});

gulp.task('resources', () => {
  return gulp.src('_assets/resources/**/*')
    .pipe(flatten())
    .pipe(newer('assets/resources'))
    .on('error', handleError)
    .pipe(gulp.dest('assets/resources'))
    .pipe(gulp.dest('_site/assets/resources'))
});

gulp.task('jekyll-build', function (done) {

    browserSync.notify(messages.jekyllBuild);
    return child.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);

});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('browser-sync', ['styles', 'vendor-js', 'js', 'images', 'svg-images', 'resources', 'jekyll-build'], function() {

    browserSync({
        server: {
            baseDir: '_site'
        }
    });

});

gulp.task('watch', function(){

  gulp.watch(['_assets/styles/**/*.scss'], ['styles']);
  gulp.watch(['_assets/js/scripts/**/*.js'], ['js']);
  gulp.watch(['_assets/js/vendor/**/*.js'], ['vendor-js']);
  gulp.watch(['_assets/resources/*.{jpg,jpeg,png,gif,ico}'], ['images']);
  gulp.watch(['_assets/resources/*.{svg}'], ['svg-images']);
  gulp.watch(['_assets/resources/**/*', '!src/assets/resources/**/*.{jpg,jpeg,png,gif,ico,svg}'], ['resources']);
  gulp.watch(['*.html', '_includes/*.html', '_pages/*.html', '_layouts/*.html', '_posts/*', '_projects/*'], ['jekyll-rebuild']);

  gulp.watch(['_site/**/*', '_site/assets/**/*', '_site/assets/resources/.{jpg,jpeg,png,gif,ico,svg}', '_site/assets/styles/*.css']).on('change', browserSync.reload);

});


// Production Tasks

gulp.task('prod-styles', () => {
  return gulp.src('_assets/styles/application.scss') // IMPORT ANY OTHER VENDOR LIBS FROM THAT SRC FILE
    .pipe(flatten())
    .pipe(globbing({extensions: '.scss'}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .on('error', handleError)
    .pipe(gulp.dest('assets/styles'))
});

gulp.task('prod-vendor-js', () => {
  return gulp.src([
    '_assets/js/vendor/**/*.js',
  ])
  .pipe(concat('application-vendor.js'))
  .pipe(uglify())
  .on('error', handleError)
  .pipe(gulp.dest('assets/js'))
});

gulp.task('prod-js', () => {
  return gulp.src([
    '_assets/js/scripts/**/*.js',
  ])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .on('error', handleError)
  .pipe(concat('application.js'))
  .pipe(gulp.dest('assets/js'))
});

gulp.task('prod-images', () => {
  return gulp.src('_assets/resources/*.{jpg,jpeg,png,gif,ico}')
    .pipe(flatten())
    .pipe(newer('assets/resources'))
    .pipe(imagemin({
        optimizationLevel: 10,
        progressive: true,
        interlaced: true,
        svgoPlugins: []
    }))
    .on('error', handleError)
    .pipe(gulp.dest('assets/resources'))
});

gulp.task('prod-svg-images', () => {
  return gulp.src('_assets/resources/*.{svg}')
    .pipe(flatten())
    .pipe(newer('assets/resources'))
    .on('error', handleError)
    .pipe(gulp.dest('assets/resources'))
});

gulp.task('prod-resources', () => {
  return gulp.src('_assets/resources/**/*')
    .pipe(flatten())
    .pipe(newer('assets/resources'))
    .on('error', handleError)
    .pipe(gulp.dest('assets/resources'))
});

// Error reporting function
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', devTasks);
gulp.task('prod', prodTasks);
