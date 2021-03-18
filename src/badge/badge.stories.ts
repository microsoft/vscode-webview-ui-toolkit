import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {BadgeArgs, createBadge} from './fixtures/createBadge';
import {VSCodeBadge} from './index';

// Prevent tree-shaking
VSCodeBadge;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Badge',
	argTypes: {
		label: {control: 'text'},
		fill: {control: 'color'},
		textColor: {control: 'color'},
		isCircular: {control: 'boolean'},
	},
};

const Template = ({...args}: BadgeArgs) => {
	return createBadge({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: '1 UNSAVED',
	fill: '#4d4d4d',
	textColor: '#ffffff',
	isCircular: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `vscode-badge {\n\t--badge-fill-foo: #4d4d4d;\n\t--badge-color-bar: #ffffff;\n}\n<vscode-badge fill="foo" color="bar">1 UNSAVED</vscode-badge>`,
		},
	},
};

export const Circular: any = Template.bind({});
Circular.args = {
	label: '1',
	fill: '#007aac',
	textColor: '#ffffff',
	isCircular: true,
};
Circular.parameters = {
	docs: {
		source: {
			code: `vscode-badge {\n\t--badge-fill-foo: #007aac;\n\t--badge-color-bar: #ffffff;\n}\n<vscode-badge fill="foo" color="bar" circular="true">1</vscode-badge>`,
		},
	},
};

export const NoFillColor: any = Template.bind({});
NoFillColor.args = {
	label: '1 UNSAVED',
	isCircular: false,
};
NoFillColor.parameters = {
	docs: {
		source: {
			code: `<vscode-badge>1 UNSAVED</vscode-badge>`,
		},
	},
};
