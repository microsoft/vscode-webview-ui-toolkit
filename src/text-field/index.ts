// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	TextFieldTemplate as template,
	TextField,
} from '@microsoft/fast-foundation';
import {TextFieldStyles as styles} from './text-field.styles';

/**
 * The Visual Studio Code text field component.
 *
 * @remarks
 * HTML Element: `<vscode-text-field>`
 *
 * @public
 */
@customElement({
	name: 'vscode-text-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeTextField extends TextField {
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
			// Describe the generic component if no label is provided
			this.setAttribute('aria-label', 'Text field');
		}
	}
}
