const phpcs = require('gulp-phpcs');

module.exports = function (gulp, plugins) {
	return function(){
		gulp.src(['*/**/*.php', '!node_modules/', '!vendor/**/*' ] )
          // Validate files using PHP Code Sniffer
          .pipe(phpcs({
               bin: 'vendor/bin/phpcs',
               standard: './phpcs.xml',
               warningSeverity: 0
	     }))
		.pipe( phpcs.reporter('log') )
	     .pipe( phpcs.reporter('fail', { failOnFirst: true } ) );
	    return Promise.resolve('this is ignore');

	};
};