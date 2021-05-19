import {createLink, LinkArgs} from './fixtures/createLink';

export default {
	title: 'Library/Link',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
		isDisabled: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
		iconOnly: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: LinkArgs) => {
	return createLink({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Link Text',
	href: '#',
	isDisabled: false,
	isAutoFocused: false,
	startIcon: false,
	endIcon: false,
	iconOnly: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#">Link Text</vscode-link>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" disabled>Link Text</vscode-link>`,
		},
	},
};

export const WithStartIcon: any = Template.bind({});
WithStartIcon.args = {
	...Default.args,
	startIcon: true,
};
WithStartIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-link href="#">\n\tLink Text\n\t<span slot="start" class="codicon codicon-git-merge"></span>\n</vscode-link>`,
		},
	},
};

export const WithEndIcon: any = Template.bind({});
WithEndIcon.args = {
	...Default.args,
	endIcon: true,
};
WithEndIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-link href="#">\n\tLink Text\n\t<span slot="end" class="codicon codicon-chevron-right"></span>\n</vscode-link>`,
		},
	},
};

export const WithIconOnly: any = Template.bind({});
WithIconOnly.args = {
	...Default.args,
	iconOnly: true,
};
WithIconOnly.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-link href="#">\n\t<span class="codicon codicon-check"></span>\n</vscode-link>`,
		},
	},
};
