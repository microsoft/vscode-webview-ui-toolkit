// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	ListboxOption,
	ListboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {OptionStyles as styles} from './option.styles';

/**
 * The Visual Studio Code option component.
 *
 * @remarks
 * HTML Element: `<vscode-option>`
 *
 * @public
 */
@customElement({
	name: 'vscode-option',
	template,
	styles,
})
export class VSCodeOption extends ListboxOption {}
