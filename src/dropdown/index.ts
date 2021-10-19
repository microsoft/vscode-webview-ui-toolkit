// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Select, SelectOptions, selectTemplate as template} from '@microsoft/fast-foundation';
import {DropdownStyles as styles} from './dropdown.styles';

/**
 * The Visual Studio Code dropdown class.
 *
 * @public
 */
 export class VSCodeDropdown extends Select {}

/**
 * The Visual Studio Code link dropdown registration.
 *
 * @remarks
 * HTML Element: `<vscode-dropdown>`
 *
 * @public
 */
export const vsCodeDropdown = VSCodeDropdown.compose<SelectOptions>({
	baseName: 'dropdown',
	template,
	styles,
})