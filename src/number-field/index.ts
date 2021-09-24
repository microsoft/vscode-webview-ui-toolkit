// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	NumberField,
	NumberFieldTemplate as template,
} from '@microsoft/fast-foundation';
import {NumberFieldStyles as styles} from './number-field.styles';

/**
 * The Visual Studio Code number field component.
 *
 * @remarks
 * HTML Element: `<vscode-number-field>`
 *
 * @public
 */
@customElement({
	name: 'vscode-number-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeNumberField extends NumberField {}
