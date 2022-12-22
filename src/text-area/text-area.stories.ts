// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createTextArea, TextAreaArgs} from './fixtures/createTextArea.js';

export default {
	title: 'Library/Text Area',
	argTypes: {
		label: {control: 'text'},
		placeholder: {control: 'text'},
		value: {control: 'text'},
		resize: {
			control: {
				type: 'select',
				options: ['None', 'Both', 'Horizontal', 'Vertical'],
			},
		},
		cols: {control: 'number'},
		rows: {control: 'number'},
		maxLength: {control: 'number'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TextAreaArgs) => {
	return createTextArea({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Text Area Label',
	placeholder: '',
	resize: 'None',
	value: '',
	cols: '',
	rows: '',
	maxLength: '',
	isReadOnly: false,
	isDisabled: false,
	isAutoFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area>Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithPlaceholder: any = Template.bind({});
WithPlaceholder.args = {
	...Default.args,
	placeholder: 'Placeholder Text',
};
WithPlaceholder.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area placeholder="Placeholder Text">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
	...Default.args,
	isAutoFocused: true,
};
WithAutofocus.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area autofocus>Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithCustomCols: any = Template.bind({});
WithCustomCols.args = {
	...Default.args,
	placeholder: 'This text area is 50 characters in width',
	cols: 50,
};
WithCustomCols.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area cols="50">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithCustomRows: any = Template.bind({});
WithCustomRows.args = {
	...Default.args,
	placeholder: 'This text area is 20 characters in height',
	rows: 20,
};
WithCustomRows.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area rows="20">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithMaxLength: any = Template.bind({});
WithMaxLength.args = {
	...Default.args,
	placeholder: 'This text area can only contain a maximum of 10 characters',
	maxLength: 10,
};
WithMaxLength.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area maxlength="10">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithReadonly: any = Template.bind({});
WithReadonly.args = {
	...Default.args,
	placeholder: 'This text is read only',
	isReadOnly: true,
};
WithReadonly.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area readonly>Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	placeholder: 'This text area cannot be interacted with',
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area disabled>Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithResizeNone: any = Template.bind({});
WithResizeNone.args = {
	...Default.args,
	placeholder: 'This text area cannot be resized',
	resize: 'None',
};
WithResizeNone.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area resize="none">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithResizeBoth: any = Template.bind({});
WithResizeBoth.args = {
	...Default.args,
	placeholder:
		'This text area can be resized both vertically and horizontally',
	resize: 'Both',
};
WithResizeBoth.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area resize="both">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithResizeVertical: any = Template.bind({});
WithResizeVertical.args = {
	...Default.args,
	placeholder: 'This text area can be resized vertically',
	resize: 'Vertical',
};
WithResizeVertical.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area resize="vertical">Text Area Label</vscode-text-area>`,
		},
	},
};

export const WithResizeHorizontal: any = Template.bind({});
WithResizeHorizontal.args = {
	...Default.args,
	placeholder: 'This text area can be resized horizontally',
	resize: 'Horizontal',
};
WithResizeHorizontal.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area resize="horizontal">Text Area Label</vscode-text-area>`,
		},
	},
};
