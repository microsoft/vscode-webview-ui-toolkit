import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createTabs, TabsArgs} from './fixtures/createTabs';
import {VSCodeTab, VSCodeTabPanel, VSCodeTabs} from './index';

// Prevent tree-shaking
VSCodeTab;
VSCodeTabs;
VSCodeTabPanel;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Tabs',
	argTypes: {
		activeTab: {
			control: {
				type: 'select',
				options: ['Problems', 'Output', 'Debug Console', 'Terminal'],
			},
		},
		activeIndicator: {control: 'boolean'},
		hasComplexContent: {control: 'boolean'},
		tabMetaData: {control: 'array'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TabsArgs) => {
	return createTabs({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	activeTab: '',
	activeIndicator: true,
	hasComplexContent: false,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: false, customIcon: false},
		{title: 'OUTPUT', isDisabled: false, customIcon: false},
		{title: 'DEBUG CONSOLE', isDisabled: false, customIcon: false},
		{title: 'TERMINAL', isDisabled: false, customIcon: false},
	],
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs>\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug Console Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal Content\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: true, customIcon: false},
		{title: 'OUTPUT', isDisabled: true, customIcon: false},
		{title: 'DEBUG CONSOLE', isDisabled: true, customIcon: false},
		{title: 'TERMINAL', isDisabled: true, customIcon: false},
	],
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs>\n\t<vscode-tab id="tab-1" disabled>PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2" disabled>OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3" disabled>DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4" disabled>TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug Console Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal Content\n\t</vscode-tab-panel>\n</vscode-tabs>`,
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
			code: `<vscode-tabs activeid="tab-4">\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug Console Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal Content\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const WithNoActiveIndicator: any = Template.bind({});
WithNoActiveIndicator.args = {
	...Default.args,
	activeIndicator: false,
};
WithNoActiveIndicator.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs activeindicator="false">\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug Console Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal Content\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const WithCustomTabIcons: any = Template.bind({});
WithCustomTabIcons.args = {
	...Default.args,
	tabMetaData: [
		{title: 'Tab Panel', isDisabled: false, customIcon: true},
		{title: 'Tab Panel', isDisabled: false, customIcon: true},
		{title: 'Tab Panel', isDisabled: false, customIcon: true},
		{title: 'Tab Panel', isDisabled: false, customIcon: true},
	],
};
WithCustomTabIcons.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-tabs>\n\t<vscode-tab id="tab-1">\n\t\t<svg class="codicon codicon-heart"></svg>\n\t</vscode-tab>\n\t<vscode-tab id="tab-2">\n\t\t<svg class="codicon codicon-database"></svg>\n\t</vscode-tab>\n\t<vscode-tab id="tab-3">\n\t\t<svg class="codicon codicon-check"></svg>\n\t</vscode-tab>\n\t<vscode-tab id="tab-4">\n\t\t<svg class="codicon codicon-add"></svg>\n\t</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tTab Panel Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tTab Panel Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tTab Panel Content\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTab Panel Content\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const WithComplexPanelContent: any = Template.bind({});
WithComplexPanelContent.args = {
	...Default.args,
	tabMetaData: [
		{title: 'Smoothie Maker #1', isDisabled: false, customIcon: false},
		{title: 'Smoothie Maker #2', isDisabled: false, customIcon: false},
		{title: 'Smoothie Maker #3', isDisabled: false, customIcon: false},
		{title: 'Smoothie Maker #4', isDisabled: false, customIcon: false},
	],
	hasComplexContent: true,
};
WithComplexPanelContent.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs>\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\t<section style="display: flex; flex-direction: column; width: 100%;">\n\t\t\t<h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>\n\t\t\t<vscode-checkbox>Apples</vscode-checkbox>\n\t\t\t<vscode-checkbox>Oranges</vscode-checkbox>\n\t\t\t<vscode-checkbox>Grapes</vscode-checkbox>\n\t\t\t<vscode-checkbox disabled>Blueberries</vscode-checkbox>\n\t\t\t<vscode-checkbox>Pineapple</vscode-checkbox>\n\t\t\t<vscode-checkbox>Mango</vscode-checkbox>\n\t\t\t<vscode-checkbox>Lemon</vscode-checkbox>\n\t\t\t<vscode-button style="margin-top: 1rem;">Make Smoothie!</vscode-button>\n\t\t</section>\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\t... Insert Complex Content ...\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\t... Insert Complex Content ...\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\t... Insert Complex Content ...\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};
