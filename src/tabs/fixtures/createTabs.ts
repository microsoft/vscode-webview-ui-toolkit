import {VSCodeTab, VSCodeTabPanel, VSCodeTabs} from '../index';

export type TabsArgs = {
	activeTab?: string;
	orientation?: string;
};

// <fast-tabs id="myTab" activeId="tab-1">
//     <fast-tab id="tab-1">Tab one</fast-tab>
//     <fast-tab id="tab-2">Tab two</fast-tab>
//     <fast-tab id="tab-3">Tab three</fast-tab>
//     <fast-tab-panel id="tab-panel-1">
//         Tab #1 content.
//     </fast-tab-panel>
//     <fast-tab-panel id="tab-panel-2">
//         Tab #2 content.
//     </fast-tab-panel>
//     <fast-tab-panel id="tab-panel-3">
//         Tab #3 content.
//     </fast-tab-panel>
// </fast-tabs>

export function createTabs({activeTab, orientation}: TabsArgs) {
	const tabNames = ['Problems', 'Output', 'Debug Console', 'Terminal'];
	const tabs = createTabsWithChildren(tabNames);

	if (activeTab) {
		tabs.setAttribute(
			'activeid',
			convertActiveTabNameToTabId(activeTab, tabNames)
		);
	}
	if (orientation) {
		tabs.setAttribute('orientation', orientation.toLowerCase());
	}

	return tabs;
}

function createTabsWithChildren(tabNames: string[]) {
	const tabs = new VSCodeTabs();

	// Create and append tab components
	for (let i = 0; i < tabNames.length; i++) {
		const tab = new VSCodeTab();
		tab.textContent = tabNames[i].toUpperCase();
		tab.setAttribute('id', `tab-${i + 1}`);
		tabs.appendChild(tab);
	}

	// Create and append tab-panel components
	for (let i = 0; i < tabNames.length; i++) {
		const tabPanel = new VSCodeTabPanel();
		tabPanel.textContent = `${tabNames[i]} content.`;
		tabPanel.setAttribute('id', `tab-panel-${i + 1}`);
		tabs.appendChild(tabPanel);
	}

	return tabs;
}

function convertActiveTabNameToTabId(activeTab: string, tabNames: string[]) {
	const activeTabIndex = tabNames.indexOf(activeTab);
	return `tab-${activeTabIndex + 1}`;
}
