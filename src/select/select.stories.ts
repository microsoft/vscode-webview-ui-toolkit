import {action} from '@storybook/addon-actions';
import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createSelect, SelectArgs} from './fixtures/createSelect';
import {VSCodeSelect} from './index';

// Prevent tree-shaking
VSCodeSelect;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Select',
	argTypes: {
		label: {control: 'text'},
		isOpen: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		numberOfChildren: {control: 'number'},
		onChange: {action: 'changed'},
	},
};

const Template = ({...args}: SelectArgs) => {
	return createSelect({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isOpen: false,
	isDisabled: false,
	isFocused: false,
	numberOfChildren: 3,
	onChange: action('select-onchange'),
};

export const SelectOpen: any = Template.bind({});
SelectOpen.args = {
	...Default.args,
	isOpen: true,
};
