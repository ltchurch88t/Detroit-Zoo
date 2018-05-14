const gulp = require( 'gulp' );
const connect = require( 'gulp-connect' );
const sass = require( 'gulp-ruby-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );
const uglify = require( 'gulp-uglify' );
const concat = require( 'gulp-concat' );
const imagemin = require( 'gulp-imagemin' );
const minify = require( 'gulp-clean-css' );
const htmlmin = require( 'gulp-htmlmin' );

gulp.task('sass', () =>
	sass('styles/style.sass')
		.on('error', sass.logError)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(''))
		.pipe(connect.reload()) //adding reload functionality to sass files
);

gulp.task('miniCSS', function() {
  return gulp.src('style.css')
    .pipe(minify())
    .pipe(gulp.dest('build'))
}
);

gulp.task('minifyHTML', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('html', function() {
    return gulp.src('*.html')
      .pipe(gulp.dest('build'))
      .pipe(connect.reload())
});

gulp.task('js', function() {
    return gulp.src('*.js')
      .pipe(gulp.dest('build'))
      .pipe(connect.reload())
});

gulp.task('minifyImages', function() {
    return gulp.src('assets/*')
      .pipe(imagemin({progressive: true}))
      .pipe(gulp.dest('build/assets'))
});

// Watch
gulp.task('watch', function() {

  // Watch .sass files
  gulp.watch('styles/**/*.sass', ['sass'])

  gulp.watch('*.html', ['html'])

  gulp.watch('*.js', ['js'])

  // Create connect server
  connect.server({
  	livereload: true, //setting default to true
  	port: 8080 //localhost:8080
  });

});

// Default task
gulp.task('default', function() {
  gulp.start('sass', 'watch');
});