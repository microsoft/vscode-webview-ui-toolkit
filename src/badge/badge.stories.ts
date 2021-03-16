import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {BadgeArgs, createBadge} from './fixtures/createBadge';
import {VSCodeBadge} from './index';

// Prevent tree-shaking
VSCodeBadge;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Badge',
	argTypes: {
		label: {control: 'text'},
		fill: {control: 'color'},
		textColor: {control: 'color'},
		isCircular: {control: 'boolean'},
	},
};

const Template = ({...args}: BadgeArgs) => {
	return createBadge({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: '1 UNSAVED',
	fill: '#4d4d4d',
	textColor: '#ffffff',
	isCircular: false,
};

export const Circular: any = Template.bind({});
Circular.args = {
	label: '1',
	fill: '#007aac',
	textColor: '#ffffff',
	isCircular: true,
};

export const NoFillColor: any = Template.bind({});
NoFillColor.args = {
	label: '1 UNSAVED',
	isCircular: false,
};
