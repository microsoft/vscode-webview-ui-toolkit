import {VSCodeTab, VSCodeTabPanel, VSCodeTabs} from '../index';

export type TabsArgs = {
	activeTab?: string;
	orientation?: string;
};

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
