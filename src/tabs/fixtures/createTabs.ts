import {createTab, TabArgs} from '../../tab/fixtures/createTab';
import {VSCodeTabPanel, VSCodeTabs} from '../index';

export type TabsArgs = {
	activeTab?: string;
	orientation?: string;
	tabMetaData: any;
};

export function createTabs({activeTab, orientation, tabMetaData}: TabsArgs) {
	let tabs: VSCodeTabs;
	if (tabMetaData) {
		tabs = createTabsWithChildren(tabMetaData);
	}

	if (activeTab) {
		const tabTitles = tabMetaData.map(tabObject => {
			return tabObject.title;
		});
		tabs.setAttribute(
			'activeid',
			convertActiveTabNameToTabId(activeTab, tabTitles)
		);
	}
	if (orientation) {
		tabs.setAttribute('orientation', orientation.toLowerCase());
	}

	return tabs;
}

function createTabsWithChildren(tabMetaData: TabArgs[]) {
	const tabs = new VSCodeTabs();

	// Create and append tab components
	for (let i = 0; i < tabMetaData.length; i++) {
		const tab = createTab({
			title: tabMetaData[i].title,
			isDisabled: tabMetaData[i].isDisabled,
			customIcon: tabMetaData[i].customIcon,
		});
		tab.setAttribute('id', `tab-${i + 1}`);
		tabs.appendChild(tab);
	}

	// Create and append tab-panel components
	for (let i = 0; i < tabMetaData.length; i++) {
		const tabPanel = new VSCodeTabPanel();
		tabPanel.textContent = 'Tab Panel Content';
		tabPanel.setAttribute('id', `tab-panel-${i + 1}`);
		tabs.appendChild(tabPanel);
	}

	return tabs;
}

function convertActiveTabNameToTabId(activeTab: string, tabNames: string[]) {
	const activeTabIndex = tabNames.indexOf(activeTab);
	return `tab-${activeTabIndex + 1}`;
}
