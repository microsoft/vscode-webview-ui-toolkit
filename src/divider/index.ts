// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Divider, DividerTemplate as template} from '@microsoft/fast-foundation';
import {DividerStyles as styles} from './divider.styles';

/**
 * The Visual Studio Code Divider element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.divider/ | Divider} and
 * {@link https://www.fast.design/docs/api/fast-foundation.dividertemplate/ | DividerTemplate}.
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
