const sassFiles = [ 'assets/themes/scss/*.scss', 'assets/themes/scss/utils/fira-code.scss' ];

module.exports = function (gulp, plugins) {
	return function(){
		let stream = gulp.src( sassFiles )
		.pipe( plugins.sass( { outputStyle: 'compressed' } ).on( 'error', plugins.sass.logError ) )
		.pipe( plugins.rename( function( path ) {
			path.dirname = path.dirname.replace('scss', 'css');
			return path;
		} ) )
		.pipe( gulp.dest( './assets/themes/css' ) )
		.pipe( plugins.notify({ onLast: true, message: "Themes Built"}));
	    return stream;

	};
};