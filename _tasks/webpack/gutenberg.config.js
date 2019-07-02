// node module that let's us do file system stuffs...
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Given a string, returns a new string with dash separators converted to
 * camelCase equivalent. This is not as aggressive as `_.camelCase` in
 * converting to uppercase, where Lodash will also capitalize letters
 * following numbers.
 *
 * @param {string} string Input dash-delimited string.
 * @credit Gutenberg
 * @return {string} Camel-cased string.
 */
function camelCaseDash( string ) {
	return string.replace(
		/-([a-z])/g,
		( match, letter ) => letter.toUpperCase()
	);
}

const externals = {
	react: 'React',
	'react-dom': 'ReactDOM',
	'lodash': 'lodash',
};

const wp_externals = [
	'blocks',
	'components',
	'date',
	'editor',
	'element',
	'i18n',
	'utils',
	'block-editor',
	'compose',
	'api-fetch',
	'dom-ready',
	'data',
];

wp_externals.forEach( ( name ) => {
	externals[ `@wordpress/${ name }` ] = {
		window: [ 'wp', camelCaseDash( name ) ],
	};
} );

module.exports = {
	entry: {
		'honey': './src/index',
	},
	output: {
		path: path.resolve(__dirname, './'),
		filename: './assets/js/honey-code.js',
		library: ['wp', '[name]'],
		libraryTarget: 'window',
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							["@babel/transform-react-jsx", {
								"pragma": "wp.element.createElement"
							}],
							"@babel/plugin-proposal-class-properties",
							['lodash'],
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			}
		]
	},
	externals,
	mode: 'development'
}