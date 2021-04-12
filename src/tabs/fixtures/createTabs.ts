import {createTab, TabArgs} from '../../tab/fixtures/createTab';
import {createTabPanel} from '../../tab-panel/fixtures/createTabPanel';
import {VSCodeTabs} from '../index';

export type TabsArgs = {
	activeTab?: string;
	activeIndicator?: boolean;
	hasComplexContent?: boolean;
	tabMetaData: any;
};

export function createTabs({
	activeTab,
	activeIndicator,
	hasComplexContent,
	tabMetaData,
}: TabsArgs) {
	let tabs: VSCodeTabs;
	if (tabMetaData) {
		tabs = createTabsWithChildren(tabMetaData, hasComplexContent);
	}

	if (activeTab) {
		const tabTitles = tabMetaData.map(tabObject => {
			return tabObject.title.toLowerCase();
		});
		tabs.setAttribute(
			'activeid',
			convertActiveTabNameToTabId(activeTab.toLowerCase(), tabTitles)
		);
	}
	if (!activeIndicator) {
		tabs.setAttribute('activeindicator', activeIndicator.toString());
	}

	return tabs;
}

function createTabsWithChildren(
	tabMetaData: TabArgs[],
	hasComplexContent: boolean
) {
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
		const tabPanel = hasComplexContent
			? createTabPanel({hasComplexContent})
			: createTabPanel({
					label: `${capitalize(tabMetaData[i].title)} Content`,
			  });
		tabPanel.setAttribute('id', `tab-panel-${i + 1}`);
		tabs.appendChild(tabPanel);
	}

	return tabs;
}

function convertActiveTabNameToTabId(activeTab: string, tabNames: string[]) {
	const activeTabIndex = tabNames.indexOf(activeTab);
	return `tab-${activeTabIndex + 1}`;
}

function capitalize(str: string) {
	let result = '';
	const wordList = str.toLowerCase().split(' ');
	for (const word of wordList) {
		result = `${result} ${word.charAt(0).toUpperCase() + word.slice(1)}`;
	}
	return result;
}
