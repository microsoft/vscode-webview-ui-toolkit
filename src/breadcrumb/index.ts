// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	Breadcrumb,
	BreadcrumbTemplate as template,
} from '@microsoft/fast-foundation';
import {BreadcrumbStyles as styles} from './breadcrumb.styles';

/**
 * The VS Code Breadcrumb element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.breadcrumb/ | Breadcrumb} and
 * {@link https://www.fast.design/docs/api/fast-foundation.breadcrumbtemplate/ | BreadcrumbTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-breadcrumb>`
 *
 * @public
 */
@customElement({
	name: 'vscode-breadcrumb',
	template,
	styles,
})
export class VSCodeBreadcrumb extends Breadcrumb {}
