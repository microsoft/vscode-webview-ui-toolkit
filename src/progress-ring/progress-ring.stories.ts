import {
	createProgressRing,
	ProgressRingArgs,
} from './fixtures/createProgressRing';

export default {
	title: 'Library/Progress Ring',
	argTypes: {
		value: {control: 'number'},
		min: {control: 'number'},
		max: {control: 'number'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: ProgressRingArgs) => {
	return createProgressRing({...args});
};

export const Default: any = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-ring></vscode-progress-ring>`,
		},
	},
};

export const WithValue: any = Template.bind({});
WithValue.args = {
	value: 65,
	min: 0,
	max: 100,
};
WithValue.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-ring min="0" max="100" value="65"></vscode-progress-ring>`,
		},
	},
};
