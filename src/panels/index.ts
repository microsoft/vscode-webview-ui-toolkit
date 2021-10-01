// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
 * The Visual Studio Code panels component.
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
 * The Visual Studio Code panel tab component.
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
	}
}

/**
 * The Visual Studio Code panel view component.
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
