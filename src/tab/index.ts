import {customElement} from '@microsoft/fast-element';
import {Tab, TabTemplate as template} from '@microsoft/fast-foundation';
import {TabStyles as styles} from './tab.styles';

/**
 * The VS Code Tab element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tab/ | Tab} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabtemplate/ | TabTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-tab>`
 *
 * @public
 */
@customElement({
	name: 'vscode-tab',
	template,
	styles,
})
export class VSCodeTab extends Tab {}
