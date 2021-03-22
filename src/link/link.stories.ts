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
		isFocused: {control: 'boolean'},
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
	label: 'Link',
	href: '#',
	appearance: 'Link',
	isDisabled: false,
	isFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#">Link</vscode-link>`,
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
			code: `<vscode-link appearance="primary" href="#">Link</vscode-link>`,
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
			code: `<vscode-link appearance="secondary" href="#">Link</vscode-link>`,
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
			code: `<vscode-link appearance="install" href="#">Link</vscode-link>`,
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
			code: `<vscode-link appearance="text" href="#">Link</vscode-link>`,
		},
	},
};
