import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createButton, ButtonArgs} from './fixtures/createButton';
import {VSCodeButton} from './index';
import {action} from '@storybook/addon-actions';

// Prevent tree-shaking
VSCodeButton;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Button',
	argTypes: {
		label: {control: 'text'},
		onClick: {action: 'onClick'},
		disabled: {control: 'boolean'},
	},
};

const Template = ({...args}: ButtonArgs) => {
	return createButton({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Button',
	onClick: action('button-clicked'),
	disabled: false,
};

export const Disabled: any = Template.bind({});
Disabled.args = {
	...Default.args,
	disabled: true,
};
