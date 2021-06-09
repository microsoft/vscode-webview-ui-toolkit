import {BadgeArgs, createBadge} from './fixtures/createBadge';

export default {
	title: 'Library/Badge',
	argTypes: {
		label: {control: 'text'},
		appearance: {
			control: {
				type: 'select',
				options: ['Primary', 'Secondary'],
			},
		},
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
	label: 'BADGE TEXT',
	appearance: 'Primary',
	isCircular: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-badge appearance="primary">BADGE TEXT</vscode-badge>`,
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
			code: `<vscode-badge appearance="secondary">BADGE TEXT</vscode-badge>`,
		},
	},
};

export const WithCircular: any = Template.bind({});
WithCircular.args = {
	...Default.args,
	label: '1',
	isCircular: true,
};
WithCircular.parameters = {
	docs: {
		source: {
			code: `<vscode-badge circular>1</vscode-badge>`,
		},
	},
};