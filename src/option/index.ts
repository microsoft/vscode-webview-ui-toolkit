// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	ListboxOption,
	ListboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {OptionStyles as styles} from './option.styles';

/**
 * The Visual Studio Code option component.
 *
 * @remarks
 * HTML Element: `<vscode-option>`
 *
 * @public
 */
@customElement({
	name: 'vscode-option',
	template,
	styles,
})
export class VSCodeOption extends ListboxOption {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the orientation attribute
		// inherited by the FAST Foundation Tabs component so that
		// VSCodePanels are always oriented horizontally
		if (this.textContent) {
			this.setAttribute('aria-label', this.textContent);
		} else {
			this.setAttribute('aria-label', 'Option');
		}
	}
}
