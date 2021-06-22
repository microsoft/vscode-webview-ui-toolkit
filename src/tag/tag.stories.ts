// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createTag, TagArgs} from './fixtures/createTag';

export default {
	title: 'Library/Tag',
	argTypes: {
		label: {control: 'text'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TagArgs) => {
	return createTag({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Tag Text',
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-tag>Tag Text</vscode-tag>`,
		},
	},
};
