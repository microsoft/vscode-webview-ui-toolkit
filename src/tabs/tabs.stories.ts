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
			code: `<vscode-text-area placeholder="Placeholder Text">Text Area Label</vscode-text-area>`,
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
			code: `<vscode-text-area placeholder="Placeholder Text">Text Area Label</vscode-text-area>`,
		},
	},
};
