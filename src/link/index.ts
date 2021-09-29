// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Anchor, AnchorTemplate as template} from '@microsoft/fast-foundation';
import {LinkStyles as styles} from './link.styles';

/**
 * The Visual Studio Code link component.
 *
 * @remarks
 * HTML Element: `<vscode-link>`
 *
 * @public
 */
@customElement({
	name: 'vscode-link',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeLink extends Anchor {}
