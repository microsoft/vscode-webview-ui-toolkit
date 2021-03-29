import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createLink, LinkArgs} from './fixtures/createLink';
import {VSCodeLink} from './index';

// Prevent tree-shaking
VSCodeLink;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Link',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
		appearance: {
			control: {
				type: 'select',
				options: ['Link', 'Primary', 'Secondary', 'Install', 'Text'],
			},
		},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
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
	appearance: 'Link',
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

export const Primary: any = Template.bind({});
Primary.args = {
	...Default.args,
	appearance: 'Primary',
};
Primary.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" appearance="primary">Link Text</vscode-link>`,
		},
	},
};

export const Secondary: any = Template.bind({});
Secondary.args = {
	...Default.args,
	appearance: 'Secondary',
};
Secondary.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" appearance="secondary">Link Text</vscode-link>`,
		},
	},
};

export const Text: any = Template.bind({});
Text.args = {
	...Default.args,
	appearance: 'Text',
};
Text.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" appearance="text">Link Text</vscode-link>`,
		},
	},
};

export const Install: any = Template.bind({});
Install.args = {
	...Default.args,
	appearance: 'Install',
};
Install.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" appearance="install">Link Text</vscode-link>`,
		},
	},
};

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
	...Default.args,
	isAutoFocused: true,
};
WithAutofocus.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" autofocus>Link Text</vscode-link>`,
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
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-link href="#">\n\tLink Text\n\t<svg slot="start" class="codicon codicon-git-merge"></svg>\n</vscode-link>`,
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
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-link href="#">\n\tLink Text\n\t<svg slot="end" class="codicon codicon-chevron-right"></svg>\n</vscode-link>`,
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
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-link href="#">\n\t<svg class="codicon codicon-check"></svg>\n</vscode-link>`,
		},
	},
};
