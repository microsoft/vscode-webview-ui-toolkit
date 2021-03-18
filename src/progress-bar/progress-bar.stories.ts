import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createProgressBar, ProgressBarArgs} from './fixtures/createProgressBar';
import {VSCodeProgressBar} from './index';

// Prevent tree-shaking
VSCodeProgressBar;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Progress Bar',
	argTypes: {
		value: {control: 'number'},
		min: {control: 'number'},
		max: {control: 'number'},
		isPaused: {control: 'boolean'},
	},
};

const Template = ({...args}: ProgressBarArgs) => {
	return createProgressBar({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	min: 0,
	max: 100,
	isPaused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar min="0" max="100"></vscode-progress-bar>`,
		},
	},
};

export const SetValue: any = Template.bind({});
SetValue.args = {
	value: 75,
	min: 0,
	max: 100,
	isPaused: false,
};
SetValue.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar min="0" max="100" value="75"></vscode-progress-bar>`,
		},
	},
};

export const Paused: any = Template.bind({});
Paused.args = {
	value: 75,
	min: 0,
	max: 100,
	isPaused: true,
};
Paused.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar min="0" max="100" value="75" paused="true"></vscode-progress-bar>`,
		},
	},
};
