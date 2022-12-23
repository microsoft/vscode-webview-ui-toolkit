// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {provideReactWrapper} from '@microsoft/fast-react-wrapper';
import React from 'react';
import {
	vsCodeBadge,
	vsCodeButton,
	vsCodeCheckbox,
	vsCodeDataGrid,
	vsCodeDataGridCell,
	vsCodeDataGridRow,
	vsCodeDivider,
	vsCodeDropdown,
	vsCodeLink,
	vsCodeOption,
	vsCodePanels,
	vsCodePanelTab,
	vsCodePanelView,
	vsCodeProgressRing,
	vsCodeRadio,
	vsCodeRadioGroup,
	vsCodeTag,
	vsCodeTextArea,
	vsCodeTextField,
} from '../index.js';

import {provideVSCodeDesignSystem} from '../vscode-design-system.js';

const {wrap} = provideReactWrapper(React, provideVSCodeDesignSystem());

/**
 * VS Code Badge React component.
 *
 * @public
 */
export const VSCodeBadge = wrap(vsCodeBadge(), {
	name: 'vscode-badge',
});

/**
 * VS Code Button React component.
 *
 * @public
 */
export const VSCodeButton = wrap(vsCodeButton(), {
	name: 'vscode-button',
});

/**
 * VS Code Checkbox React component.
 *
 * @public
 */
export const VSCodeCheckbox = wrap(vsCodeCheckbox(), {
	name: 'vscode-checkbox',
	events: {
		onChange: 'change',
	},
});

/**
 * VS Code Data Grid React component.
 *
 * @public
 */
export const VSCodeDataGrid = wrap(vsCodeDataGrid(), {
	name: 'vscode-data-grid',
});

/**
 * VS Code Data Grid Cell React component.
 *
 * @public
 */
export const VSCodeDataGridCell = wrap(vsCodeDataGridCell(), {
	name: 'vscode-data-grid-cell',
});

/**
 * VS Code Data Grid Row React component.
 *
 * @public
 */
export const VSCodeDataGridRow = wrap(vsCodeDataGridRow(), {
	name: 'vscode-data-grid-row',
});

/**
 * VS Code Divider React component.
 *
 * @public
 */
export const VSCodeDivider = wrap(vsCodeDivider(), {
	name: 'vscode-divider',
});

/**
 * VS Code Dropdown React component.
 *
 * @public
 */
export const VSCodeDropdown = wrap(vsCodeDropdown(), {
	name: 'vscode-dropdown',
	events: {
		onChange: 'change',
	},
});

/**
 * VS Code Link React component.
 *
 * @public
 */
export const VSCodeLink = wrap(vsCodeLink(), {
	name: 'vscode-link',
});

/**
 * VS Code Option React component.
 *
 * @public
 */
export const VSCodeOption = wrap(vsCodeOption(), {
	name: 'vscode-option',
});

/**
 * VS Code Panels React component.
 *
 * @public
 */
export const VSCodePanels = wrap(vsCodePanels(), {
	name: 'vscode-panels',
	events: {
		onChange: 'change',
	},
});

/**
 * VS Code Panel Tab React component.
 *
 * @public
 */
export const VSCodePanelTab = wrap(vsCodePanelTab(), {
	name: 'vscode-panel-tab',
});

/**
 * VS Code Panel View React component.
 *
 * @public
 */
export const VSCodePanelView = wrap(vsCodePanelView(), {
	name: 'vscode-panel-view',
});

/**
 * VS Code Progress Ring React component.
 *
 * @public
 */
export const VSCodeProgressRing = wrap(vsCodeProgressRing(), {
	name: 'vscode-progress-ring',
});

/**
 * VS Code Radio React component.
 *
 * @public
 */
export const VSCodeRadio = wrap(vsCodeRadio(), {
	name: 'vscode-radio',
	events: {
		onChange: 'change',
	},
});

/**
 * VS Code Radio Group React component.
 *
 * @public
 */
export const VSCodeRadioGroup = wrap(vsCodeRadioGroup(), {
	name: 'vscode-radio-group',
	events: {
		onChange: 'change',
	},
});

/**
 * VS Code Tag React component.
 *
 * @public
 */
export const VSCodeTag = wrap(vsCodeTag(), {
	name: 'vscode-tag',
});

/**
 * VS Code Text Area React component.
 *
 * @public
 */
export const VSCodeTextArea = wrap(vsCodeTextArea(), {
	name: 'vscode-text-area',
	events: {
		onChange: 'change',
		onInput: 'input',
	},
});

/**
 * VS Code Text Field React component.
 *
 * @public
 */
export const VSCodeTextField = wrap(vsCodeTextField(), {
	name: 'vscode-text-field',
	events: {
		onChange: 'change',
		onInput: 'input',
	},
});
