// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	AnchorOptions,
	Anchor as FoundationAnchor,
	anchorTemplate as template,
} from '@microsoft/fast-foundation';
import {linkStyles as styles} from './link.styles.js';

/**
 * Link configuration options
 * @public
 */
export type LinkOptions = AnchorOptions;

/**
 * The Visual Studio Code link class.
 *
 * @public
 */
export class Link extends FoundationAnchor {}

/**
 * The Visual Studio Code link component registration.
 *
 * @remarks
 * HTML Element: `<vscode-link>`
 *
 * @public
 */
export const vsCodeLink = Link.compose<LinkOptions, typeof Link>({
	baseName: 'link',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
});
