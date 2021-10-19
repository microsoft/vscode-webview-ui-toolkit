// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	Tab,
	TabPanel,
	tabPanelTemplate,
	Tabs,
	TabsOrientation,
	tabsTemplate,
	tabTemplate,
} from '@microsoft/fast-foundation';
import {PanelsStyles} from './panels.styles';
import {PanelTabStyles} from './panel-tab.styles';
import {PanelViewStyles} from './panel-view.styles';

/**
 * The Visual Studio Code panels class.
 *
 * @public
 */
export class VSCodePanels extends Tabs {
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
export const vsCodePanels = VSCodePanels.compose({
	baseName: 'panels',
	template: tabsTemplate,
	styles: PanelsStyles,
})

/**
 * The Visual Studio Code panel tab class.
 *
 * @public
 */
export class VSCodePanelTab extends Tab {
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
export const vsCodePanelTab = VSCodePanelTab.compose({
	baseName: 'panel-tab',
	template: tabTemplate,
	styles: PanelTabStyles,
})

/**
 * The Visual Studio Code panel view component registration.
 *
 * @remarks
 * HTML Element: `<vscode-panel-view>`
 *
 * @public
 */
export const vsCodePanelView = TabPanel.compose({
	baseName: 'panel-view',
	template: tabPanelTemplate,
	styles: PanelViewStyles,
})
