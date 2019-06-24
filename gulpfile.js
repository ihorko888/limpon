var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer'); 
var concatCSS       = require('gulp-concat-css'); 
var ftp             = require('gulp-ftp');


gulp.task('common-js', function() {
	return gulp.src([
		'src/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCSS('style.css'))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', ['common-js'], function() {
	return gulp.src([
		'src/libraries/jquery/dist/jquery.min.js',
		'src/libraries/mmenu/js/jquery.mmenu.all.min.js',
		'src/libraries/owl.carousel/owl.carousel.min.js',
		'src/libraries/fotorama/fotorama.js',
		'src/libraries/selectize/js/standalone/selectize.min.js',
		'src/libraries/equalHeights/equalheights.js',
		'src/js/common.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('src/js'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('default', ['serve']);