// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {attr, customElement} from '@microsoft/fast-element';
import {Button, ButtonTemplate as template} from '@microsoft/fast-foundation';
import {ButtonStyles as styles} from './button.styles';

/**
 * Types of button appearance.
 * @public
 */
export type ButtonAppearance = 'primary' | 'secondary' | 'icon';

/**
 * The VS Code Button Element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.button/ | Button} and
 * {@link https://www.fast.design/docs/api/fast-foundation.buttontemplate/ | ButtonTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-button>`
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

	/**
	 * Component lifecycle method that runs when the element is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();
		if (!this.appearance) {
			this.appearance = 'primary';
		}
	}

	/**
	 * Component lifecycle method that runs when an attribute of the
	 * element is changed.
	 *
	 * @param attrName The attribute that was changed
	 * @param oldVal The old value of the attribute
	 * @param newVal The new value of the attribute
	 *
	 * @internal
	 */
	public attributeChangedCallback(
		attrName: string,
		oldVal: string,
		newVal: string
	) {
		// In the case when an icon only button is created add a default ARIA
		// Label to the button since there is no longer button text to use
		// as the label.
		//
		// !Important!
		// For best accessibility practices, this ARIA label should be
		// overridden by extension developers to provide a more descriptive
		// label about the intended use of the button.
		//
		// More documentation on this topic can be found in the button README.
		if (attrName === 'appearance' && newVal === 'icon') {
			this.ariaLabel = 'Icon Button';
		}

		// In the case when the aria-label attribute has been defined (i.e.
		// overriding the default ARIA label) on the <vscode-button>, this
		// will programmatically propogate the value to the <button> HTML
		// element that lives in the Shadow DOM
		if (attrName === 'aria-label') {
			this.ariaLabel = newVal;
		}
	}
}
