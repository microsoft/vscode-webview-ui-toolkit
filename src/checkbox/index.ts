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
	checkedIndicator: `
		<svg
			part="checked-indicator"
			class="checked-indicator"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
			/>
		</svg>
	`,
	indeterminateIndicator: `
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`,
})