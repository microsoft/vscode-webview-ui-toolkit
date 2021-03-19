import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createMenu, MenuArgs} from './fixtures/createMenu';
import {VSCodeMenu} from './index';

// Prevent tree-shaking
VSCodeMenu;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Menu',
	argTypes: {
		numberOfChildren: {control: 'number'},
		withDividers: {control: 'boolean'},
	},
};

const Template = ({...args}: MenuArgs) => {
	return createMenu({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	numberOfChildren: 3,
	withDividers: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-menu>\n\t<vscode-menu-item>Menu Item #1</vscode-menu-item>\n\t<vscode-menu-item>Menu Item #2</vscode-menu-item>\n\t<vscode-menu-item>Menu Item #3</vscode-menu-item>\n</vscode-menu>`,
		},
	},
};

export const WithDivider: any = Template.bind({});
WithDivider.args = {
	numberOfChildren: 4,
	withDividers: true,
};
WithDivider.parameters = {
	docs: {
		source: {
			code: `<vscode-menu>\n\t<vscode-menu-item>Menu Item #1</vscode-menu-item>\n\t<vscode-divider></vscode-divider>\n\t<vscode-menu-item>Menu Item #2</vscode-menu-item>\n\t<vscode-menu-item>Menu Item #3</vscode-menu-item>\n\t<vscode-divider></vscode-divider>\n\t<vscode-menu-item>Menu Item #4</vscode-menu-item>\n</vscode-menu>`,
		},
	},
};
