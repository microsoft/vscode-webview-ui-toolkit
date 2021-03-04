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

export const GroupNoLabel: any = Template.bind({});
GroupNoLabel.args = {
	orientation: 'Vertical',
	numberOfChildren: 3,
};
