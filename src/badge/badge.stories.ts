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
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: BadgeArgs) => {
	return createBadge({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Badge Text',
	isCircular: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-badge>Badge Text</vscode-badge>`,
		},
	},
};

export const WithFill: any = Template.bind({});
WithFill.args = {
	label: '1 UNSAVED',
	fill: '#4d4d4d',
	textColor: '#ffffff',
	isCircular: false,
};
WithFill.parameters = {
	docs: {
		source: {
			code: `vscode-badge {\n\t--badge-fill-foo: #4d4d4d;\n\t--badge-color-bar: #ffffff;\n}\n<vscode-badge fill="foo" color="bar">1 UNSAVED</vscode-badge>`,
		},
	},
};

export const WithCircular: any = Template.bind({});
WithCircular.args = {
	label: '1',
	fill: '#007aac',
	textColor: '#ffffff',
	isCircular: true,
};
WithCircular.parameters = {
	docs: {
		source: {
			code: `vscode-badge {\n\t--badge-fill-foo: #007aac;\n\t--badge-color-bar: #ffffff;\n}\n<vscode-badge fill="foo" color="bar" circular="true">1</vscode-badge>`,
		},
	},
};
