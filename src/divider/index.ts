// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Divider, dividerTemplate as template} from '@microsoft/fast-foundation';
import {DividerStyles as styles} from './divider.styles';

/**
 * The Visual Studio Code divider class.
 *
 * @public
 */
export class VSCodeDivider extends Divider {}

/**
 * The Visual Studio Code divider component registration.
 *
 * @remarks
 * HTML Element: `<vscode-divider>`
 *
 * @public
 */
export const vsCodeDivider = VSCodeDivider.compose({
	baseName: 'divider',
	template,
	styles,
});
