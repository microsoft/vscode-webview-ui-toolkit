import {createProgressBar, ProgressBarArgs} from './fixtures/createProgressBar';

export default {
	title: 'Library/Progress Bar',
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

const Template = ({...args}: ProgressBarArgs) => {
	return createProgressBar({...args});
};

export const Default: any = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar></vscode-progress-bar>`,
		},
	},
};

export const WithValue: any = Template.bind({});
WithValue.args = {
	value: 75,
	min: 0,
	max: 100,
};
WithValue.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar min="0" max="100" value="75"></vscode-progress-bar>`,
		},
	},
};
