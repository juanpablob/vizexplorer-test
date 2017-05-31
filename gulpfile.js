/*!
 * Gulpfile
 * since 2015-07-20
 * author juanpablob <m.juanpablob@gmail.com>
 */

var	gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	src = './src',
	dist = './dist',
	bower = './bower_components',
	npm = './node_modules',
	scripts = [
		bower + '/angular/angular.js',
		bower + '/angular-animate/angular-animate.js',
		bower + '/chart.js/dist/Chart.js',
		bower + '/angular-chart.js/dist/angular-chart.js',
		bower + '/moment/moment.js',
		bower + '/humanize-duration/humanize-duration.js',
		bower + '/angular-timer/dist/angular-timer.js',
		src + '/scripts/app.js',
		src + '/scripts/controllers/**/*.js',
		src + '/scripts/components/**/**/*.js',
		src + '/scripts/filters/**/**/*.js'
	];

// Compile Styles
gulp.task('styles', function() {
	gulp.src(src + '/styles/styles.less')
		.pipe($.sourcemaps.init())
		.pipe($.less())
		.pipe($.sourcemaps.write('./'))
		.pipe(gulp.dest(dist + '/styles/'));
});

// Compile Scripts
gulp.task('scripts', function() {
	gulp.src(scripts)
		.pipe($.concat('scripts.js'))
		.pipe(gulp.dest(dist + '/scripts/'));
});

// Validate Scripts
gulp.task('jshint', function() {
	gulp.src(src + '/**/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter('default'));
});

// Watchers
gulp.watch(src + '/**/*.js', function() {
	gulp.start('scripts');
	gulp.start('jshint');
});

gulp.watch(src + '/styles/**/*.less', function() {
	gulp.start('styles');
});

// Default
gulp.task('default', function() {
	gulp.start('styles');
	gulp.start('scripts');
	gulp.start('jshint');
});

// Build for dist
gulp.task('build', function() {
	gulp.src(src + '/styles/styles.scss')
		.pipe($.less())
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest(dist + '/'));

	gulp.src(scripts)
		.pipe($.concat('scripts.js'))
		.pipe($.stripDebug())
		.pipe($.jsmin())
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest(dist + '/'));
});
