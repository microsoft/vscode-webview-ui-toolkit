// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	Divider as FoundationDivider,
	dividerTemplate as template,
} from '@microsoft/fast-foundation';
import {dividerStyles as styles} from './divider.styles';

/**
 * The Visual Studio Code divider class.
 *
 * @public
 */
export class Divider extends FoundationDivider {}

/**
 * The Visual Studio Code divider component registration.
 *
 * @remarks
 * HTML Element: `<vscode-divider>`
 *
 * @public
 */
export const vsCodeDivider = Divider.compose({
	baseName: 'divider',
	template,
	styles,
});
