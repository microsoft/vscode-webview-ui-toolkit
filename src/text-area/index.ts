// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	textAreaTemplate as template,
	TextArea,
} from '@microsoft/fast-foundation';
import {TextAreaStyles as styles} from './text-area.styles';

/**
 * The Visual Studio Code text area class.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * @public
 */
export class VSCodeTextArea extends TextArea {
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
			this.setAttribute('aria-label', 'Text area');
		}
	}
}

/**
 * The Visual Studio Code text area component registration.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * @public
 */
export const vsCodeTextArea = VSCodeTextArea.compose({
	baseName: 'text-area',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
});
