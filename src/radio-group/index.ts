// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Orientation as RadioGroupOrientation} from '@microsoft/fast-web-utilities';
import {
	FoundationElementDefinition,
	RadioGroup as FoundationRadioGroup,
	radioGroupTemplate as template,
} from '@microsoft/fast-foundation';
import {radioGroupStyles as styles} from './radio-group.styles.js';

export {RadioGroupOrientation};

/**
 * The Visual Studio Code radio group class.
 *
 * @public
 */
export class RadioGroup extends FoundationRadioGroup {
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

/**
 * The Visual Studio Code radio group component registration.
 *
 * @remarks
 * HTML Element: `<vscode-radio-group>`
 *
 * @public
 */
export const vsCodeRadioGroup = RadioGroup.compose<
	FoundationElementDefinition,
	typeof RadioGroup
>({
	baseName: 'radio-group',
	template,
	styles,
});
