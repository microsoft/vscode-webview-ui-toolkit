// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	NumberField,
	NumberFieldTemplate as template,
} from '@microsoft/fast-foundation';
import {NumberFieldStyles as styles} from './number-field.styles';

/**
 * The VS Code Number Field element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.NumberField/ | NumberField} and
 * {@link https://www.fast.design/docs/api/fast-foundation.NumberFieldtemplate/ | NumberFieldTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-number-field>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
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
