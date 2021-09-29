// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Divider, DividerTemplate as template} from '@microsoft/fast-foundation';
import {DividerStyles as styles} from './divider.styles';

/**
 * The Visual Studio Code divider component.
 *
 * @remarks
 * HTML Element: `<vscode-divider>`
 *
 * @public
 */
@customElement({
	name: 'vscode-divider',
	template,
	styles,
})
export class VSCodeDivider extends Divider {}
