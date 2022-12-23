// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	SelectPosition as DropdownPosition,
	Select as FoundationSelect,
	SelectOptions,
	selectTemplate as template,
} from '@microsoft/fast-foundation';
import {dropdownStyles as styles} from './dropdown.styles.js';

export {DropdownPosition};

/**
 * Dropdown configuration options
 * @public
 */
export type DropdownOptions = SelectOptions;

/**
 * The Visual Studio Code dropdown class.
 *
 * @public
 */
export class Dropdown extends FoundationSelect {}

/**
 * The Visual Studio Code link dropdown registration.
 *
 * @remarks
 * HTML Element: `<vscode-dropdown>`
 *
 * @public
 */
export const vsCodeDropdown = Dropdown.compose<
	DropdownOptions,
	typeof Dropdown
>({
	baseName: 'dropdown',
	template,
	styles,
	indicator: `
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`,
});
