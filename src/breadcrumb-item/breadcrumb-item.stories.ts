import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {
	BreadcrumbItemArgs,
	createBreadcrumbItem,
} from './fixtures/createBreadcrumbItem';
import {VSCodeBreadcrumbItem} from './index';

// Prevent tree-shaking
VSCodeBreadcrumbItem;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Breadcrumb Item',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
		isFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: BreadcrumbItemArgs) => {
	return createBreadcrumbItem({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'src',
	href: '#',
	isFocused: false,
};
