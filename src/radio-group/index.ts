// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	RadioGroup,
	RadioGroupTemplate as template,
} from '@microsoft/fast-foundation';
import {RadioGroupStyles as styles} from './radio-group.styles';

/**
 * The VS Code Radio Group element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.radiogroup/ | RadioGroup} and
 * {@link https://www.fast.design/docs/api/fast-foundation.radiogrouptemplate/ | RadioGroupTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-radio-group>`
 *
 * @public
 */
@customElement({
	name: 'vscode-radio-group',
	template,
	styles,
})
export class VSCodeRadioGroup extends RadioGroup {}
