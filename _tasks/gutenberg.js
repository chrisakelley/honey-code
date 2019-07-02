const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const rename = require( 'gulp-rename' );
const webpack_config = require('./webpack/gutenberg.config.js');

module.exports = function (gulp, plugins) {
	return function(){
		let stream = gulp.src(['./src/index.js'])
		.pipe(webpackStream(webpack_config, webpack))
		.pipe(rename('honey-code.js'))
		.pipe(gulp.dest('./assets/js/'));
		return stream;
	};
};