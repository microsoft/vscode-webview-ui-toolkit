// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {attr, customElement} from '@microsoft/fast-element';
import {Badge, BadgeTemplate as template} from '@microsoft/fast-foundation';
import {BadgeStyles as styles} from './badge.styles';

/**
 * Types of badge appearance.
 * @public
 */
export type BadgeAppearance = 'primary' | 'secondary';

/**
 * The VS Code Badge element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.badge/ | Badge} and
 * {@link https://www.fast.design/docs/api/fast-foundation.badgetemplate/ | BadgeTemplate}.
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
	 * The appearance the badge should have.
	 *
	 * @remarks
	 * HTML Attribute: appearance
	 *
	 * @public
	 */
	@attr public appearance: BadgeAppearance;

	/**
	 * Component lifecycle method that runs when the element is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();
		if (!this.appearance) {
			this.appearance = 'primary';
		}

		// This will override any usage of the circular attribute
		// provided by the FAST Foundation Badge component so that
		// VSCodeBadges are always circular
		if (!this.circular) {
			this.circular = true;
		}
	}
}
