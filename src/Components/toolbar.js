/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { IconButton, Toolbar } from '@wordpress/components';
import { BlockControls } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

class CodeToolbar extends Component {

	/**
	 *
	 * @since 1.0.0
	 *
	 * @param {*} props
	 */
	constructor(props){
		super(...arguments);
	}

	/**
	 * @since 1.0.0
	 */
	render(){
		return (
			<BlockControls>
				<Toolbar>
					<IconButton
						className="components-toolbar__control"
						label={ __( 'Edit gallery' ) }
						icon="format-gallery"
						onClick={false}
					/>
				</Toolbar>
			</BlockControls>
		)
	}
}

export default CodeToolbar;