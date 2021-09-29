// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Badge, BadgeTemplate as template} from '@microsoft/fast-foundation';
import {BadgeStyles as styles} from './badge.styles';

/**
 * The Visual Studio Code badge component.
 *
 * @remarks
 * HTML Element: `<vscode-badge>`
 *
 * @public
 */
@customElement({
	name: 'vscode-badge',
	template,
	styles,
})
export class VSCodeBadge extends Badge {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the circular attribute
		// inherited by the FAST Foundation Badge component so
		// that VSCodeBadges are always circular
		if (!this.circular) {
			this.circular = true;
		}
	}
}
