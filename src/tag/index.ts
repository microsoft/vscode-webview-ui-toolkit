// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Badge, badgeTemplate as template} from '@microsoft/fast-foundation';
import {TagStyles as styles} from './tag.styles';

/**
 * The Visual Studio Code tag class.
 *
 * @public
 */
export class VSCodeTag extends Badge {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the circular attribute
		// inherited by the FAST Foundation Badge component so that
		// VSCodeTags are never circular
		if (this.circular) {
			this.circular = false;
		}
	}
}

/**
 * The Visual Studio Code tag component.
 *
 * @remarks
 * HTML Element: `<vscode-tag>`
 *
 * @public
 */
 export const vsCodeTag = VSCodeTag.compose({
	name: 'tag',
	template,
	styles,
})