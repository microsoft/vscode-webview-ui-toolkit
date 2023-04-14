// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	FoundationElementDefinition,
	Tab as FoundationTab,
	TabPanel as FoundationTabPanel,
	Tabs as FoundationTabs,
	tabPanelTemplate,
	TabsOrientation,
	tabsTemplate,
	tabTemplate,
} from '@microsoft/fast-foundation';
import {panelsStyles} from './panels.styles.js';
import {panelTabStyles} from './panel-tab.styles.js';
import {panelViewStyles} from './panel-view.styles.js';

/**
 * The Visual Studio Code panels class.
 *
 * @public
 */
export class Panels extends FoundationTabs {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the orientation attribute
		// inherited by the FAST Foundation Tabs component so that
		// VSCodePanels are always oriented horizontally
		if (this.orientation) {
			this.orientation = TabsOrientation.horizontal;
		}

		// Sets a default ARIA label on the panels component only if an
		// aria-label attribute does not already exist
		const ariaLabelValue = this.getAttribute('aria-label');
		if (!ariaLabelValue) {
			this.setAttribute('aria-label', 'Panels');
		}
	}
}

/**
 * The Visual Studio Code panels component registration.
 *
 * @remarks
 * HTML Element: `<vscode-panels>`
 *
 * @public
 */
export const vsCodePanels = Panels.compose<
	FoundationElementDefinition,
	typeof Panels
>({
	baseName: 'panels',
	template: tabsTemplate,
	styles: panelsStyles,
});

/**
 * The Visual Studio Code panel tab class.
 *
 * @public
 */
export class PanelTab extends FoundationTab {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the disabled attribute
		// inherited by the FAST Foundation Tab component so that
		// VSCodePanelTab can never be disabled
		if (this.disabled) {
			this.disabled = false;
		}

		if (this.textContent) {
			this.setAttribute('aria-label', this.textContent);
		}
	}
}

/**
 * The Visual Studio Code panel tab component registration.
 *
 * @remarks
 * HTML Element: `<vscode-panel-tab>`
 *
 * @public
 */
export const vsCodePanelTab = PanelTab.compose<
	FoundationElementDefinition,
	typeof PanelTab
>({
	baseName: 'panel-tab',
	template: tabTemplate,
	styles: panelTabStyles,
});

/**
 * The Visual Studio Code panel view class.
 *
 * @public
 */
export class PanelView extends FoundationTabPanel {}

/**
 * The Visual Studio Code panel view component registration.
 *
 * @remarks
 * HTML Element: `<vscode-panel-view>`
 *
 * @public
 */
export const vsCodePanelView = PanelView.compose<
	FoundationElementDefinition,
	typeof PanelView
>({
	baseName: 'panel-view',
	template: tabPanelTemplate,
	styles: panelViewStyles,
});
