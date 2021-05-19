import {action} from '@storybook/addon-actions';
import {ButtonArgs, createButton} from './fixtures/createButton';

export default {
	title: 'Library/Button',
	argTypes: {
		label: {control: 'text'},
		appearance: {
			control: {
				type: 'select',
				options: ['Primary', 'Secondary', 'Icon'],
			},
		},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
		iconOnly: {control: 'boolean'},
		onClick: {
			action: 'clicked',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: ButtonArgs) => {
	return createButton({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Button Text',
	appearance: 'Primary',
	isDisabled: false,
	isAutoFocused: false,
	startIcon: false,
	endIcon: false,
	iconOnly: false,
	onClick: action('button-clicked'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-button>Button Text</vscode-button>`,
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
			code: `<vscode-button appearance="secondary">Button Text</vscode-button>`,
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
			code: `<vscode-button autofocus>Button Text</vscode-button>`,
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
			code: `<vscode-button disabled>Button Text</vscode-button>`,
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
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-button>\n\tButton Text\n\t<span slot="start" class="codicon codicon-git-merge"></span>\n</vscode-button>`,
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
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-button>\n\tButton Text\n\t<span slot="end" class="codicon codicon-chevron-right"></span>\n</vscode-button>`,
		},
	},
};

export const WithIconOnly: any = Template.bind({});
WithIconOnly.args = {
	...Default.args,
	appearance: 'Icon',
	iconOnly: true,
};
WithIconOnly.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-button appearance="icon">\n\t<span class="codicon codicon-check"></span>\n</vscode-button>`,
		},
	},
};
