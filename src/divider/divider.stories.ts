import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createDivider} from './fixtures/createDivider';
import {VSCodeDivider} from './index';

// Prevent tree-shaking
VSCodeDivider;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Divider',
	parameters: {
		controls: {
			disabled: true,
		},
		actions: {
			disabled: true,
		},
	},
};

const Template = () => {
	return createDivider();
};

export const Default: any = Template.bind({});
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-divider></vscode-divider>`,
		},
	},
};
