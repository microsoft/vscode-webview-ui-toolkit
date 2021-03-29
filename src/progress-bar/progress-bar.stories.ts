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
Default.args = {
	isPaused: false,
};
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
	isPaused: false,
};
WithValue.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar min="0" max="100" value="75"></vscode-progress-bar>`,
		},
	},
};

export const WithPaused: any = Template.bind({});
WithPaused.args = {
	value: 75,
	min: 0,
	max: 100,
	isPaused: true,
};
WithPaused.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-bar min="0" max="100" value="75" paused></vscode-progress-bar>`,
		},
	},
};
