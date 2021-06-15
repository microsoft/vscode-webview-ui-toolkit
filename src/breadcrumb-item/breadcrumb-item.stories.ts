import {
	BreadcrumbItemArgs,
	createBreadcrumbItem,
} from './fixtures/createBreadcrumbItem';

export default {
	title: 'Library/Breadcrumb Item',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
		customElement: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		separatorIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: BreadcrumbItemArgs) => {
	return createBreadcrumbItem({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Breadcrumb Item Label',
	href: '',
	customElement: false,
	startIcon: false,
	separatorIcon: false,
	endIcon: false,
	isFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-breadcrumb-item>Breadcrumb Item Label</vscode-breadcrumb-item>`,
		},
	},
};

export const WithLink: any = Template.bind({});
WithLink.args = {
	...Default.args,
	href: '#',
};
WithLink.parameters = {
	docs: {
		source: {
			code: `<vscode-breadcrumb-item href="#">Breadcrumb Item Label</vscode-breadcrumb-item>`,
		},
	},
};

export const WithCustomSeparator: any = Template.bind({});
WithCustomSeparator.args = {
	...Default.args,
	href: '#',
	separatorIcon: true,
};
WithCustomSeparator.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-breadcrumb-item href="#">\n\tBreadcrumb Item Label\n\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n</vscode-breadcrumb-item>`,
		},
	},
};

export const WithStartIcon: any = Template.bind({});
WithStartIcon.args = {
	...Default.args,
	href: '#',
	startIcon: true,
	separatorIcon: true,
};
WithStartIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-breadcrumb-item href="#">\n\tBreadcrumb Item Label\n\t<span slot="start" class="codicon codicon-symbol-method"></span>\n\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n</vscode-breadcrumb-item>`,
		},
	},
};

export const WithEndIcon: any = Template.bind({});
WithEndIcon.args = {
	...Default.args,
	href: '#',
	separatorIcon: true,
	endIcon: true,
};
WithEndIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-breadcrumb-item href="#">\n\tBreadcrumb Item Label\n\t<span slot="end" class="codicon codicon-symbol-method"></span>\n\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n</vscode-breadcrumb-item>`,
		},
	},
};
