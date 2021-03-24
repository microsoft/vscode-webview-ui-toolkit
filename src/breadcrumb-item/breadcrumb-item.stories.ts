import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {
	BreadcrumbItemArgs,
	createBreadcrumbItem,
} from './fixtures/createBreadcrumbItem';
import {VSCodeBreadcrumbItem} from './index';

// Prevent tree-shaking
VSCodeBreadcrumbItem;
VSCodeDesignSystemProvider;

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
	label: 'src',
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
			code: `<vscode-breadcrumb-item>src</vscode-breadcrumb-item>`,
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
			code: `<vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>`,
		},
	},
};

export const WithCustomElement: any = Template.bind({});
WithCustomElement.args = {
	...Default.args,
	href: '#',
	customElement: true,
};
WithCustomElement.parameters = {
	docs: {
		source: {
			code: `<vscode-breadcrumb-item href="#">\n\t<vscode-button>Button Element</vscode-button>\n</vscode-breadcrumb-item>`,
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
			code: `<!-- Context: Import VSCode Codicon Library -->\n\n<vscode-breadcrumb-item href="#">\n\tsrc\n\t<svg slot="separator" class="codicon codicon-chevron-right"></svg>\n</vscode-breadcrumb-item>`,
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
			code: `<!-- Context: Import VSCode Codicon Library -->\n\n<vscode-breadcrumb-item href="#">\n\tsrc\n\t<svg slot="start" class="codicon codicon-symbol-method"></svg>\n\t<svg slot="separator" class="codicon codicon-chevron-right"></svg>\n</vscode-breadcrumb-item>`,
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
			code: `<!-- Context: Import VSCode Codicon Library -->\n\n<vscode-breadcrumb-item href="#">\n\tsrc\n\t<svg slot="end" class="codicon codicon-symbol-method"></svg>\n\t<svg slot="separator" class="codicon codicon-chevron-right"></svg>\n</vscode-breadcrumb-item>`,
		},
	},
};
