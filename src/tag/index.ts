// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {attr, customElement} from '@microsoft/fast-element';
import {Badge, BadgeTemplate as template} from '@microsoft/fast-foundation';
import {TagStyles as styles} from './tag.styles';

/**
 * Types of tag appearance.
 * @public
 */
export type TagAppearance = 'primary' | 'secondary';

/**
 * The VS Code Tag element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.badge/ | Badge} and
 * {@link https://www.fast.design/docs/api/fast-foundation.badgetemplate/ | BadgeTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-tag>`
 *
 * @public
 */
@customElement({
	name: 'vscode-tag',
	template,
	styles,
})
export class VSCodeTag extends Badge {
	/**
	 * The appearance the tag should have.
	 *
	 * @remarks
	 * HTML Attribute: appearance
	 *
	 * @public
	 */
	@attr public appearance: TagAppearance;

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
		// VSCodeTags are never circular
		if (this.circular) {
			this.circular = false;
		}
	}
}
