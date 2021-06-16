// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {Menu, MenuTemplate as template} from '@microsoft/fast-foundation';
import {MenuStyles as styles} from './menu.styles';

/**
 * The VS Code Menu element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.menu/ | Menu} and
 * {@link https://www.fast.design/docs/api/fast-foundation.menutemplate/ | MenuTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-menu>`
 *
 * @public
 */
@customElement({
	name: 'vscode-menu',
	template,
	styles,
})
export class VSCodeMenu extends Menu {}
