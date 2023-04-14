// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	TextField as FoundationTextField,
	textFieldTemplate as template,
	TextFieldOptions,
	TextFieldType,
} from '@microsoft/fast-foundation';
import {textFieldStyles as styles} from './text-field.styles.js';

export {TextFieldType};

/**
 * The Visual Studio Code text field class.
 *
 * @public
 */
export class TextField extends FoundationTextField {
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

/**
 * The Visual Studio Code text field component registration.
 *
 * @remarks
 * HTML Element: `<vscode-text-field>`
 *
 * @public
 */
export const vsCodeTextField = TextField.compose<
	TextFieldOptions,
	typeof TextField
>({
	baseName: 'text-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
});
