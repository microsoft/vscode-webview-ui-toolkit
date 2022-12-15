// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {attr} from '@microsoft/fast-element';
import {
	ButtonOptions,
	Button as FoundationButton,
	buttonTemplate as template,
} from '@microsoft/fast-foundation';
import {buttonStyles as styles} from './button.styles.js';

/**
 * Types of button appearance.
 * @public
 */
export type ButtonAppearance = 'primary' | 'secondary' | 'icon';

/**
 * The Visual Studio Code button class.
 *
 * @public
 */
export class Button extends FoundationButton {
	/**
	 * The appearance the button should have.
	 *
	 * @public
	 */
	@attr public appearance: ButtonAppearance;

	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// If the appearance property has not been set, set it to the
		// value of the appearance attribute.
		if (!this.appearance) {
			const appearanceValue = this.getAttribute('appearance');
			this.appearance = appearanceValue as ButtonAppearance;
		}
	}

	/**
	 * Component lifecycle method that runs when an attribute of the
	 * element is changed.
	 *
	 * @param attrName - The attribute that was changed
	 * @param oldVal - The old value of the attribute
	 * @param newVal - The new value of the attribute
	 *
	 * @internal
	 */
	public attributeChangedCallback(
		attrName: string,
		oldVal: string,
		newVal: string
	) {
		// In the case when an icon only button is created add a default ARIA
		// label to the button since there is no longer button text to use
		// as the label
		if (attrName === 'appearance' && newVal === 'icon') {
			// Only set the ARIA label to the default text if an aria-label attribute
			// does not exist on the button
			const ariaLabelValue = this.getAttribute('aria-label');
			if (!ariaLabelValue) {
				this.ariaLabel = 'Icon Button';
			}
		}

		// In the case when the aria-label attribute has been defined on the
		// <vscode-button>, this will programmatically propogate the value to
		// the <button> HTML element that lives in the Shadow DOM
		if (attrName === 'aria-label') {
			this.ariaLabel = newVal;
		}

		if (attrName === 'disabled') {
			this.disabled = newVal !== null;
		}
	}
}

/**
 * The Visual Studio Code button component registration.
 *
 * @remarks
 * HTML Element: `<vscode-button>`
 *
 * @public
 */
export const vsCodeButton = Button.compose<ButtonOptions, typeof Button>({
	baseName: 'button',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
});
