import { Component, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import Inspector from './inspector';
import Toolbar from './toolbar';
import { PlainText } from '@wordpress/block-editor';
import { escape, unescape } from './utils';


class CodeEdit extends Component {

	/**
	 *
	 * @since 1.0.0
	 *
	 * @param {*} props
	 */
	constructor(props) {
		super(...arguments);
	}

	/**
	 *
	 * @since 1.0.0
	 */
	componentDidUpdate(){
		Rainbow.color();
	}

	/**
	 *
	 * @since 1.0.0
	 */
	renderToolbar(){
		return(
			<Toolbar {...this.props} />
		)
	}

	/**
	 *
	 * @since 1.0.0
	 */
	renderInspector(){
		return (
			<Inspector {...this.props} />
		)
	}

	/**
	 *
	 * @since 1.0.0
	 */
	handleChange = (content) => {
		this.props.setAttributes({markup: escape( content ) })
	}

	/**
	 *
	 * @since 1.0.0
	 */
	renderEdit(){
		const { isSelected, attributes } = this.props;
		const { theme, language, markup } = attributes;
		return(
			<Fragment>
				<div className="honey-code-block">
				{isSelected ? (
					<PlainText
						value={ unescape( markup ) }
						onChange={this.handleChange}
						placeholder={ __( 'Write code…' ) }
						aria-label={ __( 'Honey Code' ) }
					/>
					) : (
						<pre className={theme} data-language={language}><code>{unescape(markup)}</code></pre>
					)}

				</div>
			</Fragment>
		)
	}

	/**
	 *
	 * @since 1.0.0
	 */
	render() {
		return [ this.renderEdit(), this.renderInspector() ];
	}
}

export default CodeEdit;