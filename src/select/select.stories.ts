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
		isOpen: {control: 'boolean'},
		position: {
			control: {
				type: 'select',
				options: ['Above', 'Below'],
			},
		},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		customIndicator: {control: 'boolean'},
		numberOfChildren: {control: 'number'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: SelectArgs) => {
	return createSelect({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isOpen: false,
	position: 'Below',
	isDisabled: false,
	isFocused: false,
	numberOfChildren: 3,
	customIndicator: false,
	onChange: action('select-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-select>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-select>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-select disabled>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-select>`,
		},
	},
};

export const WithOpen: any = Template.bind({});
WithOpen.args = {
	...Default.args,
	isOpen: true,
};
WithOpen.parameters = {
	docs: {
		source: {
			code: `<vscode-select open>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-select>`,
		},
	},
};

export const WithPositionAbove: any = Template.bind({});
WithPositionAbove.args = {
	...Default.args,
	position: 'Above',
};
WithPositionAbove.parameters = {
	docs: {
		source: {
			code: `<vscode-select position="above">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-select>`,
		},
	},
};

export const WithPositionBelow: any = Template.bind({});
WithPositionBelow.args = {
	...Default.args,
	position: 'Below',
};
WithPositionBelow.parameters = {
	docs: {
		source: {
			code: `<vscode-select position="below">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-select>`,
		},
	},
};

export const WithCustomIndicator: any = Template.bind({});
WithCustomIndicator.args = {
	...Default.args,
	customIndicator: true,
};
WithCustomIndicator.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-select>\n\t<svg slot="indicator" class="codicon codicon-settings"></svg>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-select>`,
		},
	},
};

export const WithLongList: any = Template.bind({});
WithLongList.args = {
	...Default.args,
	numberOfChildren: 50,
};
WithLongList.parameters = {
	docs: {
		source: {
			code: `<vscode-select>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n\t<!-- Insert more options... -->\n</vscode-select>`,
		},
	},
};
