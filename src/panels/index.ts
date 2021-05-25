import {customElement} from '@microsoft/fast-element';
import {
	Tab,
	TabPanel,
	TabPanelTemplate,
	Tabs,
	TabsOrientation,
	TabsTemplate,
	TabTemplate,
} from '@microsoft/fast-foundation';
import {PanelsStyles} from './panels.styles';
import {PanelTabStyles} from './panel-tab.styles';
import {PanelViewStyles} from './panel-view.styles';

/**
 * The VS Code Panels element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tabs/ | Tabs} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabstemplate/ | TabsTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-panels>`
 *
 * @public
 */
@customElement({
	name: 'vscode-panels',
	template: TabsTemplate,
	styles: PanelsStyles,
})
export class VSCodePanels extends Tabs {
	/**
	 * Component lifecycle method that runs when the element is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the orientation attribute
		// provided by the FAST Foundation Tabs component so that
		// VSCodePanels are always oriented horizontally
		if (this.orientation) {
			this.orientation = TabsOrientation.horizontal;
		}
	}
}

/**
 * The VS Code Panel Tab element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tab/ | Tab} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabtemplate/ | TabTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-panel-tab>`
 *
 * @public
 */
@customElement({
	name: 'vscode-panel-tab',
	template: TabTemplate,
	styles: PanelTabStyles,
})
export class VSCodePanelTab extends Tab {}

/**
 * The VS Code Panel View element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.tabpanel/ | TabPanel} and
 * {@link https://www.fast.design/docs/api/fast-foundation.tabpaneltemplate/ | TabPanelTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-panel-view>`
 *
 * @public
 */
@customElement({
	name: 'vscode-panel-view',
	template: TabPanelTemplate,
	styles: PanelViewStyles,
})
export class VSCodePanelView extends TabPanel {}
