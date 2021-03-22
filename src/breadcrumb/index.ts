import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	Breadcrumb,
	BreadcrumbTemplate as template,
} from '@microsoft/fast-foundation';
import {BreadcrumbStyles as styles} from './breadcrumb.styles';

/**
 * The VSCode Breadcrumb element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.breadcrumb/ Breadcrumb} and
 * {@link https://www.fast.design/docs/api/fast-foundation.breadcrumbtemplate/ BreadcrumbTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-breadcrumb>`
 */
@customElement({
	name: 'vscode-breadcrumb',
	template,
	styles,
})
export class VSCodeBreadcrumb extends Breadcrumb {}

/**
 * Styles for the VSCode Breadcrumb component
 * @public
 */
export const BreadcrumbStyles: ElementStyles = styles;
