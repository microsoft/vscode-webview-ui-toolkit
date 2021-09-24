// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Radio, RadioTemplate as template} from '@microsoft/fast-foundation';
import {RadioStyles as styles} from './radio.styles';

/**
 * The Visual Studio Code radio component.
 *
 * @remarks
 * HTML Element: `<vscode-radio>`
 *
 * @public
 */
@customElement({
	name: 'vscode-radio',
	template,
	styles,
})
export class VSCodeRadio extends Radio {}
