// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	TextFieldTemplate as template,
	TextField,
} from '@microsoft/fast-foundation';
import {TextFieldStyles as styles} from './text-field.styles';

/**
 * The VS Code Text Field element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.textfield/ | TextField} and
 * {@link https://www.fast.design/docs/api/fast-foundation.textfieldtemplate/ | TextFieldTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-text-field>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 *
 * @public
 */
@customElement({
	name: 'vscode-text-field',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeTextField extends TextField {}
