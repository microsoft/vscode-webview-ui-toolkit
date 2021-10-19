// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Anchor, AnchorOptions, anchorTemplate as template} from '@microsoft/fast-foundation';
import {LinkStyles as styles} from './link.styles';

/**
 * The Visual Studio Code link component registration.
 *
 * @remarks
 * HTML Element: `<vscode-link>`
 *
 * @public
 */
export const vsCodeLink = Anchor.compose<AnchorOptions>({
	baseName: 'link',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
