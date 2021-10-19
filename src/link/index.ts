// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Anchor, AnchorOptions, anchorTemplate as template} from '@microsoft/fast-foundation';
import {LinkStyles as styles} from './link.styles';

/**
 * The Visual Studio Code link component.
 *
 * @remarks
 * HTML Element: `<vscode-link>`
 *
 * @public
 */
export const vsCodeLink = Anchor.compose<AnchorOptions>({
	name: 'vscode-link',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
