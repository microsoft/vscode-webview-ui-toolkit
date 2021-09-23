// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Select, SelectTemplate as template} from '@microsoft/fast-foundation';
import {DropdownStyles as styles} from './dropdown.styles';

/**
 * The Visual Studio Code Dropdown element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.select/ | Select} and
 * {@link https://www.fast.design/docs/api/fast-foundation.selecttemplate/ | SelectTemplate}.
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
