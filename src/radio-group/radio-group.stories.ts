import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {VSCodeRadio} from '../radio/index';
import {createRadioGroup, RadioGroupArgs} from './fixtures/createRadioGroup';
import {VSCodeRadioGroup} from './index';

// Prevent tree-shaking
VSCodeRadio;
VSCodeRadioGroup;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Radio Group',
	argTypes: {
		label: {control: 'text'},
		orientation: {
			control: {
				type: 'select',
				options: ['Vertical', 'Horizontal'],
			},
		},
		numberOfChildren: {control: 'number'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: RadioGroupArgs) => {
	return createRadioGroup({...args});
};

export const Group: any = Template.bind({});
Group.args = {
	label: 'Radio Group Label',
	orientation: 'Vertical',
	numberOfChildren: 3,
};
Group.parameters = {
	docs: {
		source: {
			code: `<vscode-radio-group>\n\t<label slot="label">Radio Group Label</label>\n\t<vscode-radio>Radio Label</vscode-radio>\n\t<vscode-radio>Radio Label</vscode-radio>\n\t<vscode-radio>Radio Label</vscode-radio>\n</vscode-radio-group>`,
		},
	},
};

export const GroupNoLabel: any = Template.bind({});
GroupNoLabel.args = {
	orientation: 'Vertical',
	numberOfChildren: 3,
};
GroupNoLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-radio-group>\n\t<vscode-radio>Radio Label</vscode-radio>\n\t<vscode-radio>Radio Label</vscode-radio>\n\t<vscode-radio>Radio Label</vscode-radio>\n</vscode-radio-group>`,
		},
	},
};
