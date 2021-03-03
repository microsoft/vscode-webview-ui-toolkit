import {attr, customElement} from '@microsoft/fast-element';
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
 * The VSCode Button Element. Extends {@link @microsoft/fast-foundation#Button},
 * {@link @microsoft/fast-foundation#ButtonTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<vscode-button\>
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
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
	 * @public
	 * @remarks
	 * HTML Attribute: appearance
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
 * Styles for the VSCode Button
 * @public
 */
export const ButtonStyles = styles;
