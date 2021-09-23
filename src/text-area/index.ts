// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	TextAreaTemplate as template,
	TextArea,
} from '@microsoft/fast-foundation';
import {TextAreaStyles as styles} from './text-area.styles';

/**
 * The Visual Studio Code Text Area element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.textarea/ | TextArea} and
 * {@link https://www.fast.design/docs/api/fast-foundation.textareatemplate/ | TextAreaTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 *
 * @public
 */
@customElement({
	name: 'vscode-text-area',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeTextArea extends TextArea {}
