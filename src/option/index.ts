// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	ListboxOption,
	ListboxOptionOptions,
	listboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {OptionStyles as styles} from './option.styles';

/**
 * The Visual Studio Code option class.
 *
 * @public
 */
export class VSCodeOption extends ListboxOption {
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
 * The Visual Studio Code option component.
 *
 * @remarks
 * HTML Element: `<vscode-option>`
 *
 * @public
 */
export const vsCodeOption = VSCodeOption.compose<ListboxOptionOptions>({
	name: 'option',
	template,
	styles,
})