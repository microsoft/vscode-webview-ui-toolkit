// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createPanels, PanelsArgs} from './fixtures/createPanels';

export default {
	title: 'Library/Panels',
	argTypes: {
		activeTab: {
			control: {
				type: 'select',
				options: ['Problems', 'Output', 'Debug Console', 'Terminal'],
			},
		},
		hasComplexContent: {control: 'boolean'},
		tabMetaData: {control: 'array'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: PanelsArgs) => {
	return createPanels({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	activeTab: '',
	hasComplexContent: false,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: false, hasBadge: false},
		{title: 'OUTPUT', isDisabled: false, hasBadge: false},
		{title: 'DEBUG CONSOLE', isDisabled: false, hasBadge: false},
		{title: 'TERMINAL', isDisabled: false, hasBadge: false},
	],
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-panels>\n\t<vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>\n\t<vscode-panel-view id="view-1">\n\t\tProblems Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-2">\n\t\tOutput Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-3">\n\t\tDebug Console Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-4">\n\t\tTerminal Content\n\t</vscode-panel-view>\n</vscode-panels>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: true, hasBadge: false},
		{title: 'OUTPUT', isDisabled: true, hasBadge: false},
		{title: 'DEBUG CONSOLE', isDisabled: true, hasBadge: false},
		{title: 'TERMINAL', isDisabled: true, hasBadge: false},
	],
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-panels>\n\t<vscode-panel-tab id="tab-1" disabled>PROBLEMS</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-2" disabled>OUTPUT</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-3" disabled>DEBUG CONSOLE</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-4" disabled>TERMINAL</vscode-panel-tab>\n\t<vscode-panel-view id="view-1">\n\t\tProblems Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-2">\n\t\tOutput Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-3">\n\t\tDebug Console Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-4">\n\t\tTerminal Content\n\t</vscode-panel-view>\n</vscode-panels>`,
		},
	},
};

export const WithActiveTab: any = Template.bind({});
WithActiveTab.args = {
	...Default.args,
	activeTab: 'Terminal',
};
WithActiveTab.parameters = {
	docs: {
		source: {
			code: `<vscode-panels activeid="tab-4">\n\t<vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>\n\t<vscode-panel-view id="view-1">\n\t\tProblems Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-2">\n\t\tOutput Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-3">\n\t\tDebug Console Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-4">\n\t\tTerminal Content\n\t</vscode-panel-view>\n</vscode-panels>`,
		},
	},
};

export const WithVSCodeBadge: any = Template.bind({});
WithVSCodeBadge.args = {
	...Default.args,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: false, hasBadge: true},
		{title: 'OUTPUT', isDisabled: false, hasBadge: true},
		{title: 'DEBUG CONSOLE', isDisabled: false, hasBadge: true},
		{title: 'TERMINAL', isDisabled: false, hasBadge: true},
	],
};
WithVSCodeBadge.parameters = {
	docs: {
		source: {
			code: `<vscode-panels>\n\t<vscode-panel-tab id="tab-1">\n\t\tPROBLEMS\n\t\t<vscode-badge appearance="secondary">1</vscode-badge>\n\t</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-2">\n\t\tOUTPUT\n\t\t<vscode-badge appearance="secondary">1</vscode-badge>\n\t</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-3">\n\t\tDEBUG CONSOLE\n\t\t<vscode-badge appearance="secondary">1</vscode-badge>\n\t</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-4">\n\t\tTERMINAL\n\t\t<vscode-badge appearance="secondary">1</vscode-badge>\n\t</vscode-panel-tab>\n\t<vscode-panel-view id="view-1">\n\t\tProblems Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-2">\n\t\tOutput Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-3">\n\t\tDebug Console Content\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-4">\n\t\tTerminal Content\n\t</vscode-panel-view>\n</vscode-panels>`,
		},
	},
};

export const WithComplexPanelViewContent: any = Template.bind({});
WithComplexPanelViewContent.args = {
	...Default.args,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: false, hasBadge: false},
		{title: 'OUTPUT', isDisabled: false, hasBadge: false},
		{title: 'DEBUG CONSOLE', isDisabled: false, hasBadge: false},
		{title: 'TERMINAL', isDisabled: false, hasBadge: false},
	],
	hasComplexContent: true,
};
WithComplexPanelViewContent.parameters = {
	docs: {
		source: {
			code: `<vscode-panels>\n\t<vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>\n\t<vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>\n\t<vscode-panel-view id="view-1">\n\t\t<section style="display: flex; flex-direction: column; width: 100%;">\n\t\t\t<h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>\n\t\t\t<vscode-checkbox>Apples</vscode-checkbox>\n\t\t\t<vscode-checkbox>Oranges</vscode-checkbox>\n\t\t\t<vscode-checkbox>Grapes</vscode-checkbox>\n\t\t\t<vscode-checkbox disabled>Blueberries</vscode-checkbox>\n\t\t\t<vscode-checkbox>Pineapple</vscode-checkbox>\n\t\t\t<vscode-checkbox>Mango</vscode-checkbox>\n\t\t\t<vscode-checkbox>Lemon</vscode-checkbox>\n\t\t\t<vscode-button style="margin-top: 1rem;">Make Smoothie!</vscode-button>\n\t\t</section>\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-2">\n\t\t... Insert Complex Content ...\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-3">\n\t\t... Insert Complex Content ...\n\t</vscode-panel-view>\n\t<vscode-panel-view id="view-4">\n\t\t... Insert Complex Content ...\n\t</vscode-panel-view>\n</vscode-panels>`,
		},
	},
};
