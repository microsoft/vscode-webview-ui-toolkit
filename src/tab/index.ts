import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Tab, TabTemplate as template} from '@microsoft/fast-foundation';
import {TabStyles as styles} from './tab.styles';

/**
 * The VSCode Tab element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tab/ | Tab} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabtemplate/ | TabTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-tab>`
 */
@customElement({
	name: 'vscode-tab',
	template,
	styles,
})
export class VSCodeTab extends Tab {}

/**
 * Styles for the VSCode Tab component
 * @public
 */
export const TabStyles: ElementStyles = styles;
