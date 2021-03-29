import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {
	createProgressRing,
	ProgressRingArgs,
} from './fixtures/createProgressRing';
import {VSCodeProgressRing} from './index';

// Prevent tree-shaking
VSCodeProgressRing;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Progress Ring',
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

const Template = ({...args}: ProgressRingArgs) => {
	return createProgressRing({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isPaused: false,
};
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
	isPaused: false,
};
WithValue.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-ring min="0" max="100" value="65"></vscode-progress-ring>`,
		},
	},
};

export const WithPaused: any = Template.bind({});
WithPaused.args = {
	value: 65,
	min: 0,
	max: 100,
	isPaused: true,
};
WithPaused.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-ring min="0" max="100" value="65" paused></vscode-progress-ring>`,
		},
	},
};
