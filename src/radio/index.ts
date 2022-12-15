// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	Radio as FoundationRadio,
	RadioOptions,
	radioTemplate as template,
} from '@microsoft/fast-foundation';
import {radioStyles as styles} from './radio.styles.js';

/**
 * The Visual Studio Code radio class.
 *
 * @public
 */
export class Radio extends FoundationRadio {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();
		if (this.textContent) {
			this.setAttribute('aria-label', this.textContent);
		} else {
			// Fallback to the label if there is no text content
			this.setAttribute('aria-label', 'Radio');
		}
	}
}

/**
 * The Visual Studio Code radio component registration.
 *
 * @remarks
 * HTML Element: `<vscode-radio>`
 *
 * @public
 */
export const vsCodeRadio = Radio.compose<RadioOptions, typeof Radio>({
	baseName: 'radio',
	template,
	styles,
	checkedIndicator: `
		<div part="checked-indicator" class="checked-indicator"></div>
	`,
});
