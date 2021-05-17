import {attr, customElement} from '@microsoft/fast-element';
import {
	NumberField,
	NumberFieldTemplate as template,
} from '@microsoft/fast-foundation';
import {NumberFieldStyles as styles} from './number-field.styles';

/**
 * Number field appearances
 * @public
 */
export type NumberFieldAppearance = 'filled' | 'outline';

/**
 * The VS Code Number Field element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.NumberField/ | NumberField} and
 * {@link https://www.fast.design/docs/api/fast-foundation.NumberFieldtemplate/ | NumberFieldTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-number-field>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 *
 * @public
 */
@customElement({
	name: 'vscode-number-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeNumberField extends NumberField {
	/**
	 * The appearance of the element.
	 *
	 * @remarks
	 * HTML Attribute: appearance
	 *
	 * @public
	 */
	@attr
	public appearance: NumberFieldAppearance;

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
