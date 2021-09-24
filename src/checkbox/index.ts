// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	Checkbox,
	CheckboxTemplate as template,
} from '@microsoft/fast-foundation';
import {CheckboxStyles as styles} from './checkbox.styles';

/**
 * The Visual Studio Code checkbox component.
 *
 * @remarks
 * HTML Element: `<vscode-checkbox>`
 *
 * @public
 */
@customElement({
	name: 'vscode-checkbox',
	template,
	styles,
})
export class VSCodeCheckbox extends Checkbox {}
