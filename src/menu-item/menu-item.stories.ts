import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createMenuItem, MenuItemArgs} from './fixtures/createMenuItem';
import {VSCodeMenuItem} from './index';

// Prevent tree-shaking
VSCodeMenuItem;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Menu Item',
	argTypes: {
		label: {control: 'text'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: MenuItemArgs) => {
	return createMenuItem({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Menu Item #1',
	isDisabled: false,
	isFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-menu-item>Menu Item #1</vscode-menu-item>`,
		},
	},
};
