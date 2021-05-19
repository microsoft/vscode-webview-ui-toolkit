import {BadgeArgs, createBadge} from './fixtures/createBadge';

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
	...Default.args,
	fill: '#007aac',
	textColor: '#ffffff',
};
WithFill.parameters = {
	docs: {
		source: {
			code: `vscode-badge {\n\t--badge-fill-foo: #007aac;\n\t--badge-color-bar: #ffffff;\n}\n<vscode-badge fill="foo" color="bar">Badge Text</vscode-badge>`,
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
			code: `vscode-badge {\n\t--badge-fill-foo: #007aac;\n\t--badge-color-bar: #ffffff;\n}\n<vscode-badge fill="foo" color="bar" circular>1</vscode-badge>`,
		},
	},
};
