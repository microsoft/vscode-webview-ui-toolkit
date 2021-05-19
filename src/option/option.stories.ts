import {createOption, OptionArgs} from './fixtures/createOption';

export default {
	title: 'Library/Option',
	argTypes: {
		label: {control: 'text'},
		isDisabled: {control: 'boolean'},
		isSelected: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: OptionArgs) => {
	return createOption({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Option Label',
	isDisabled: false,
	isSelected: false,
	startIcon: false,
	endIcon: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-option>Option Label</vscode-option>`,
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
			code: `<vscode-option disabled>Option Label</vscode-option>`,
		},
	},
};

export const WithSelected: any = Template.bind({});
WithSelected.args = {
	...Default.args,
	isSelected: true,
};
WithSelected.parameters = {
	docs: {
		source: {
			code: `<vscode-option selected>Option Label</vscode-option>`,
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
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-option>\n\tOption Label\n\t<span slot="start" class="codicon codicon-check"></span>\n</vscode-option>`,
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
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-option>\n\tOption Label\n\t<span slot="end" class="codicon codicon-bug"></span>\n</vscode-option>`,
		},
	},
};
