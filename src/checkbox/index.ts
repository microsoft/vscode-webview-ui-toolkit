// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	Checkbox,
	CheckboxOptions,
	checkboxTemplate as template,
} from '@microsoft/fast-foundation';
import {CheckboxStyles as styles} from './checkbox.styles';

/**
 * The Visual Studio Code checkbox class.
 *
 * @public
 */
export class VSCodeCheckbox extends Checkbox {
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
			this.setAttribute('aria-label', 'Checkbox');
		}
	}
}

/**
 * The Visual Studio Code checkbox component registration.
 *
 * @remarks
 * HTML Element: `<vscode-checkbox>`
 *
 * @public
 */
export const vsCodeCheckbox = VSCodeCheckbox.compose<CheckboxOptions>({
	baseName: 'checkbox',
	template,
	styles,
})