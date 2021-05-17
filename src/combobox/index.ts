import {attr, customElement} from '@microsoft/fast-element';
import {
	Combobox,
	ComboboxTemplate as template,
} from '@microsoft/fast-foundation';
import {ComboboxStyles as styles} from './combobox.styles';

/**
 * Combobox appearances
 * @public
 */
export type ComboboxAppearance = 'filled' | 'outline';

/**
 * The VS Code Combobox element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.Combobox/ | Combobox} and
 * {@link https://www.fast.design/docs/api/fast-foundation.Comboboxtemplate/ | ComboboxTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-combo-box>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 *
 * @public
 */
@customElement({
	name: 'vscode-combobox',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeCombobox extends Combobox {
	/**
	 * The appearance of the element.
	 *
	 * @remarks
	 * HTML Attribute: appearance
	 *
	 * @public
	 */
	@attr
	public appearance: ComboboxAppearance;

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
