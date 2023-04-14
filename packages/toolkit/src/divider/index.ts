// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	DividerRole,
	Divider as FoundationDivider,
	FoundationElementDefinition,
	dividerTemplate as template,
} from '@microsoft/fast-foundation';
import {dividerStyles as styles} from './divider.styles.js';

export {DividerRole};

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
export const vsCodeDivider = Divider.compose<
	FoundationElementDefinition,
	typeof Divider
>({
	baseName: 'divider',
	template,
	styles,
});
