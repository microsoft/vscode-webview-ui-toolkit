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
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		onChange: {action: 'changed'},
	},
};

const Template = ({...args}: SelectArgs) => {
	return createSelect({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isDisabled: false,
	isFocused: false,
	onChange: action('select-onchange'),
};
