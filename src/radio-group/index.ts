// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	RadioGroup,
	RadioGroupTemplate as template,
} from '@microsoft/fast-foundation';
import {RadioGroupStyles as styles} from './radio-group.styles';

/**
 * The Visual Studio Code radio group component.
 *
 * @remarks
 * HTML Element: `<vscode-radio-group>`
 *
 * @public
 */
@customElement({
	name: 'vscode-radio-group',
	template,
	styles,
})
export class VSCodeRadioGroup extends RadioGroup {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();
		// Generates a unique id for each radio group label so that the label element
		// within the group can be correctly associated with the radio group.
		const label = this.querySelector('label');
		if (label) {
			const id = 'radio-group-' + Math.random().toString(16).slice(2);
			label.setAttribute('id', id);
			this.setAttribute('aria-labelledby', id);
		}
	}
}
