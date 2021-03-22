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
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs activeid="tab-4">\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal content.\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};

export const Vertical: any = Template.bind({});
Vertical.args = {
	activeTab: 'Terminal',
	orientation: 'Vertical',
};
Vertical.parameters = {
	docs: {
		source: {
			code: `<vscode-tabs activeid="tab-4" orientation="vertical">\n\t<vscode-tab id="tab-1">PROBLEMS</vscode-tab>\n\t<vscode-tab id="tab-2">OUTPUT</vscode-tab>\n\t<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>\n\t<vscode-tab id="tab-4">TERMINAL</vscode-tab>\n\t<vscode-tab-panel id="tab-panel-1">\n\t\tProblems content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-2">\n\t\tOutput content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-3">\n\t\tDebug content.\n\t</vscode-tab-panel>\n\t<vscode-tab-panel id="tab-panel-4">\n\t\tTerminal content.\n\t</vscode-tab-panel>\n</vscode-tabs>`,
		},
	},
};
