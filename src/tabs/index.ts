import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Tabs, TabsTemplate as template} from '@microsoft/fast-foundation';
import {TabsStyles as styles} from './tabs.styles';

/**
 * The VS Code Tabs element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tabs/ | Tabs} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabstemplate/ | TabsTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-tabs>`
 *
 * @public
 */
@customElement({
	name: 'vscode-tabs',
	template,
	styles,
})
export class VSCodeTabs extends Tabs {}

export * from '../tab/index';
export * from '../tab-panel/index';

/**
 * Styles for the VS Code Tabs component
 * @public
 */
export const TabsStyles: ElementStyles = styles;
