const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

/**
 * Helper method to load tasks within the _tasks folder.
 *
 * @since 1.0.0
 *
 * @param {*} task  Task to Load.
 */
function getTask(task) {
	return require('./_tasks/' + task)(gulp, plugins);
}

exports.themes    = getTask('themes');
exports.phpcs     = getTask('phpcs');
exports.gutenberg = getTask('gutenberg');