import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	TabPanel,
	TabPanelTemplate as template,
} from '@microsoft/fast-foundation';
import {TabPanelStyles as styles} from './tab-panel.styles';

/**
 * The VSCode Tab Panel element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tabpanel/ | TabPanel} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabpaneltemplate/ | TabPanelTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-tab-panel>`
 */
@customElement({
	name: 'vscode-tab-panel',
	template,
	styles,
})
export class VSCodeTabPanel extends TabPanel {}

/**
 * Styles for the VSCode Tab Panel component
 * @public
 */
export const TabPanelStyles: ElementStyles = styles;
