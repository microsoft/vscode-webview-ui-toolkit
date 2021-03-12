import {attr, customElement, ElementStyles} from '@microsoft/fast-element';
import {
	TextFieldTemplate as template,
	TextField,
} from '@microsoft/fast-foundation';
import {TextFieldStyles as styles} from './text-field.styles';

/**
 * Text field appearances
 * @public
 */
export type TextFieldAppearance = 'filled' | 'outline';

/**
 * The VSCode Text Field element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.textfield/ TextField} and
 * {@link https://www.fast.design/docs/api/fast-foundation.textfieldtemplate/ TextFieldTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-text-field>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus delegatesFocus}
 */
@customElement({
	name: 'vscode-text-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeTextField extends TextField {
	/**
	 * The appearance of the element.
	 *
	 * @public
	 * @remarks
	 * HTML Attribute: appearance
	 */
	@attr
	public appearance: TextFieldAppearance;

	/**
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		if (!this.appearance) {
			this.appearance = 'outline';
		}
	}
}

/**
 * Styles for TextField
 * @public
 */
export const TextFieldStyles: ElementStyles = styles;
