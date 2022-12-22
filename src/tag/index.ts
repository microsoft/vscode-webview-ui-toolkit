// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	Badge as FoundationBadge,
	FoundationElementDefinition,
	badgeTemplate as template,
} from '@microsoft/fast-foundation';
import {tagStyles as styles} from './tag.styles.js';

/**
 * The Visual Studio Code tag class.
 *
 * @public
 */
export class Tag extends FoundationBadge {
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
 * The Visual Studio Code tag component registration.
 *
 * @remarks
 * HTML Element: `<vscode-tag>`
 *
 * @public
 */
export const vsCodeTag = Tag.compose<FoundationElementDefinition, typeof Tag>({
	baseName: 'tag',
	template,
	styles,
});
