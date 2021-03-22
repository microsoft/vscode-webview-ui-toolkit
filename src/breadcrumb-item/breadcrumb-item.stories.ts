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
	parameters: {
		actions: {
			disabled: true,
		},
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
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>`,
		},
	},
};
