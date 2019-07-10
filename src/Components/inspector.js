import Select from 'react-select';

import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor'
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
	SelectControl
} from '@wordpress/components';

class Inspector extends Component {

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
	toggleDarkMode = (value) => {
		this.props.setAttributes({ dakrmode: value });
	}

	/**
	 * @since 1.0.0
	 */
	handleThemeChange = ( value ) => {
		this.props.setAttributes({ theme: value });
	}
	/**
	 * @since 1.0.0
	 */
	handleLangChange = ( value ) => {
		this.props.setAttributes({ language: value });
	}

	/**
	 * @since 1.0.0
	 */
	render(){
		const { attributes } = this.props;

		let langOpts = honey_code.languages.find(obj => {
			return obj.value == attributes.language;
		})

		let themeOpts = honey_code.themes.find(obj => {
			return obj.value == attributes.theme;
		})
		return (
			<InspectorControls>
				<PanelBody title={__('Honey Code')} className="honey-code-inspector-panelbody">
					<h3>{__('Code Theme')}</h3>
					<SelectControl
                              label="Size"
                              value={ attributes.theme }
                              options={honey_code.themes}
						onChange={this.handleThemeChange}
						menuContainerStyle={{'zIndex': 999}}
                         />
					<h3>{__('Language')}</h3>
					<SelectControl
                              label="Size"
                              value={ attributes.language }
                              options={honey_code.languages}
						onChange={this.handleLangChange}
						menuContainerStyle={{'zIndex': 999}}
                         />

				</PanelBody>
			</InspectorControls>
		)
	}
}

export default Inspector;