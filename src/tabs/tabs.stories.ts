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
		orientation: {
			control: {
				type: 'select',
				options: ['Horizontal', 'Vertical'],
			},
		},
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
	activeTab: 'Terminal',
	orientation: 'Horizontal',
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
			code: `<vscode-tabs activeid="tab-4">\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal content.\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: true, customIcon: false},
		{title: 'OUTPUT', isDisabled: false, customIcon: false},
		{title: 'DEBUG CONSOLE', isDisabled: true, customIcon: false},
		{title: 'TERMINAL', isDisabled: false, customIcon: false},
	],
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs activeid="tab-4" orientation="vertical">\n\t<vscode-tab id="tab-1" disabled>PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3" disabled>DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal content.\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const WithCustomTabIcons: any = Template.bind({});
WithCustomTabIcons.args = {
	...Default.args,
	tabMetaData: [
		{title: 'PROBLEMS', isDisabled: false, customIcon: true},
		{title: 'OUTPUT', isDisabled: false, customIcon: true},
		{title: 'DEBUG CONSOLE', isDisabled: false, customIcon: true},
		{title: 'TERMINAL', isDisabled: false, customIcon: true},
	],
};
WithCustomTabIcons.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs activeid="tab-4" orientation="vertical">\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal content.\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};
