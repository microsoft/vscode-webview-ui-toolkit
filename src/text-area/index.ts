// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	TextAreaTemplate as template,
	TextArea,
} from '@microsoft/fast-foundation';
import {TextAreaStyles as styles} from './text-area.styles';

/**
 * The Visual Studio Code text area component.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * @public
 */
@customElement({
	name: 'vscode-text-area',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
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
