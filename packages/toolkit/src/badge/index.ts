// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	Badge as FoundationBadge,
	FoundationElementDefinition,
	badgeTemplate as template,
} from '@microsoft/fast-foundation';
import {badgeStyles as styles} from './badge.styles.js';

/**
 * The Visual Studio Code badge class.
 *
 * @public
 */
export class Badge extends FoundationBadge {
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
		// that VSCode Badges are always circular
		if (!this.circular) {
			this.circular = true;
		}
	}
}

/**
 * The Visual Studio Code badge component registration.
 *
 * @remarks
 * HTML Element: `<vscode-badge>`
 *
 * @public
 */
export const vsCodeBadge = Badge.compose<
	FoundationElementDefinition,
	typeof Badge
>({
	baseName: 'badge',
	template,
	styles,
});
