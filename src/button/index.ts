import {attr, customElement, ElementStyles} from '@microsoft/fast-element';
import {Button, ButtonTemplate as template} from '@microsoft/fast-foundation';
import {ButtonStyles as styles} from './button.styles';

/**
 * Types of button appearance.
 * @public
 */
export type ButtonAppearance =
	| 'install'
	| 'link'
	| 'primary'
	| 'secondary'
	| 'text';

/**
 * The VS Code Button Element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.button/ | Button} and
 * {@link https://www.fast.design/docs/api/fast-foundation.buttontemplate/ | ButtonTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-button>`
 *
 * HTML Attribute: `appearance = primary | secondary | install | text | link`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 * 
 * @public
 */
@customElement({
	name: 'vscode-button',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeButton extends Button {
	/**
	 * The appearance the button should have.
	 *
	 * @remarks
	 * HTML Attribute: appearance
	 * 
	 * @public
	 */
	@attr public appearance: ButtonAppearance;

	public connectedCallback() {
		super.connectedCallback();
		if (!this.appearance) {
			this.appearance = 'primary';
		}
	}
}

/**
 * Styles for the VS Code Button component
 * @public
 */
export const ButtonStyles: ElementStyles = styles;
