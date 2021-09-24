// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Select, SelectTemplate as template} from '@microsoft/fast-foundation';
import {DropdownStyles as styles} from './dropdown.styles';

/**
 * The Visual Studio Code dropdown component.
 *
 * @remarks
 * HTML Element: `<vscode-dropdown>`
 *
 * @public
 */
@customElement({
	name: 'vscode-dropdown',
	template,
	styles,
})
export class VSCodeDropdown extends Select {}
