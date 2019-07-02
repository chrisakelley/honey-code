/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import { unescape } from './Components/utils';
/**
 * Internal dependencies
 */
import Edit from './Components/edit';

const HoneyCode = {
	id: 'honey-blocks-code',
	title: __('Honey Blocks Code'),
	description: __('A Beautiful way to display code.'),
	icon: '',
	category: 'common',
	keywords: [
		__('syntax-highlighting'),
		__('code'),
		__('developer'),
	],
	supports: {
		align:  [ 'wide', 'full' ],
		anchor: true,
	},
	attributes: {
		markup: {
			type: 'string',
			default: '',
		},
		language: {
			type: 'string',
			default: 'generic',
		},
		theme: {
			type: 'string',
			default: 'honey',
		},
		darkmode: {
			type: 'boolean',
			default: false,
		}
	},
	transforms: {
		to: [
		    {
			   type: 'block',
			   blocks: [ 'core/code' ],
			   transform: ( { markup } ) => {
				  return createBlock( 'core/code', {
					content: markup,
				  } );
			   },
		    },
		],
		from: [
			{
				type: 'block',
				blocks: [ 'core/code' ],
				transform: ( { content } ) => {
				    return createBlock( 'honey/code', {
					   markup: content,
				    } );
				},
			 },
		],
	},
	edit: Edit,
	save: props => {

		let { markup, language, theme, darkmode } = props.attributes;
		return markup ? <pre className={theme}><code data-language={language}>{unescape(markup)}</code></pre> : null;

	}

}

registerBlockType( 'honey/code', HoneyCode );