import {BreadcrumbArgs, createBreadcrumb} from './fixtures/createBreadcrumb';

export default {
	title: 'Library/Breadcrumb',
	argTypes: {
		breadcrumbItemList: {control: 'array'},
		customElement: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		separatorIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: BreadcrumbArgs) => {
	return createBreadcrumb({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	breadcrumbItemList: ['src', 'components', 'index.ts'],
	customElement: false,
	startIcon: false,
	separatorIcon: false,
	endIcon: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-breadcrumb>\n\t<vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">components</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">index.ts</vscode-breadcrumb-item>\n</vscode-breadcrumb>`,
		},
	},
};

export const WithCustomSeparators: any = Template.bind({});
WithCustomSeparators.args = {
	...Default.args,
	separatorIcon: true,
};
WithCustomSeparators.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-breadcrumb>\n\t<vscode-breadcrumb-item href="#">\n\t\tsrc\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">\n\t\tcomponents\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">\n\t\tindex.ts\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n</vscode-breadcrumb>`,
		},
	},
};

export const WithStartIcons: any = Template.bind({});
WithStartIcons.args = {
	...Default.args,
	startIcon: true,
	separatorIcon: true,
};
WithStartIcons.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-breadcrumb>\n\t<vscode-breadcrumb-item href="#">\n\t\tsrc\n\t\t<span slot="start" class="codicon codicon-symbol-method"></span>\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">\n\t\tcomponents\n\t\t<span slot="start" class="codicon codicon-symbol-method"></span>\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">\n\t\tindex.ts\n\t\t<span slot="start" class="codicon codicon-symbol-method"></span>\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n</vscode-breadcrumb>`,
		},
	},
};

export const WithEndIcons: any = Template.bind({});
WithEndIcons.args = {
	...Default.args,
	separatorIcon: true,
	endIcon: true,
};
WithEndIcons.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-breadcrumb>\n\t<vscode-breadcrumb-item href="#">\n\t\tsrc\n\t\t<span slot="end" class="codicon codicon-symbol-method"></span>\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">\n\t\tcomponents\n\t\t<span slot="end" class="codicon codicon-symbol-method"></span>\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">\n\t\tindex.ts\n\t\t<span slot="end" class="codicon codicon-symbol-method"></span>\n\t\t<span slot="separator" class="codicon codicon-chevron-right"></span>\n\t</vscode-breadcrumb-item>\n</vscode-breadcrumb>`,
		},
	},
};
