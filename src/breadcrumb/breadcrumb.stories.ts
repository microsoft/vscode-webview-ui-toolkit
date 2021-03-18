import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {BreadcrumbArgs, createBreadcrumb} from './fixtures/createBreadcrumb';
import {VSCodeBreadcrumb} from './index';

// Prevent tree-shaking
VSCodeBreadcrumb;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Breadcrumb',
	argTypes: {
		numberOfChildren: {control: 'number'},
	},
};

const Template = ({...args}: BreadcrumbArgs) => {
	return createBreadcrumb({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	numberOfChildren: 3,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-breadcrumb>\n\t<vscode-breadcrumb-item href="#">directory</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">directory</vscode-breadcrumb-item>\n\t<vscode-breadcrumb-item href="#">file</vscode-breadcrumb-item>\n</vscode-breadcrumb>`,
		},
	},
};
