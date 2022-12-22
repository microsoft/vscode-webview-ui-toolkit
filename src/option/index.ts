// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	ListboxOption as FoundationListboxOption,
	ListboxOptionOptions,
	listboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {optionStyles as styles} from './option.styles.js';

/**
 * Dropdown option configuration options
 * @public
 */
export type OptionOptions = ListboxOptionOptions;

/**
 * The Visual Studio Code option class.
 *
 * @public
 */
export class Option extends FoundationListboxOption {
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
			this.setAttribute('aria-label', 'Option');
		}
	}
}

/**
 * The Visual Studio Code option component registration.
 *
 * @remarks
 * HTML Element: `<vscode-option>`
 *
 * @public
 */
export const vsCodeOption = Option.compose<OptionOptions, typeof Option>({
	baseName: 'option',
	template,
	styles,
});
