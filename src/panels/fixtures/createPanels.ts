// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodePanels} from '../index';
import {createPanelTab, PanelTabArgs} from './createPanelTab';
import {createPanelView} from './createPanelView';

export type PanelsArgs = {
	activeTab: string;
	hasComplexContent: boolean;
	tabMetaData: any;
};

export function createPanels({
	activeTab,
	hasComplexContent,
	tabMetaData,
}: PanelsArgs) {
	let panels: VSCodePanels;
	if (tabMetaData) {
		panels = createTabsWithChildren(tabMetaData, hasComplexContent);
	}

	if (activeTab) {
		const tabTitles = tabMetaData.map(tabObject => {
			return tabObject.title.toLowerCase();
		});
		panels.setAttribute(
			'activeid',
			convertActiveTabNameToTabId(activeTab.toLowerCase(), tabTitles)
		);
	}

	return panels;
}

function createTabsWithChildren(
	tabMetaData: PanelTabArgs[],
	hasComplexContent: boolean
) {
	const panels = new VSCodePanels();

	// Create and append tab components
	for (let i = 0; i < tabMetaData.length; i++) {
		const panelTab = createPanelTab({
			title: tabMetaData[i].title,
			hasBadge: tabMetaData[i].hasBadge,
		});
		panelTab.setAttribute('id', `tab-${i + 1}`);
		panels.appendChild(panelTab);
	}

	// Create and append tab-panel components
	for (let i = 0; i < tabMetaData.length; i++) {
		const panelView = hasComplexContent
			? createPanelView({hasComplexContent})
			: createPanelView({
					label: `${capitalize(tabMetaData[i].title)} Content`,
			  });
		panelView.setAttribute('id', `view-${i + 1}`);
		panels.appendChild(panelView);
	}

	return panels;
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
