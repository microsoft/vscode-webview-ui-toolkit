import React from 'react';
import {provideReactWrapper} from '@microsoft/fast-react-wrapper';
import {provideVSCodeDesignSystem} from '../vscode-design-system';

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
} from '..';

const {wrap} = provideReactWrapper(React, provideVSCodeDesignSystem());

/**
 * VS Code Badge React component.
 *
 * @public
 */
export const VSCodeBadge = wrap(vsCodeBadge());

/**
 * VS Code Button React component.
 *
 * @public
 */
export const VSCodeButton = wrap(vsCodeButton());

/**
 * VS Code Checkbox React component.
 *
 * @public
 */
export const VSCodeCheckbox = wrap(vsCodeCheckbox());

/**
 * VS Code Divider React component.
 *
 * @public
 */
export const VSCodeDivider = wrap(vsCodeDivider());

/**
 * VS Code Link React component.
 *
 * @public
 */
export const VSCodeLink = wrap(vsCodeLink());

/**
 * VS Code Progress Ring React component.
 *
 * @public
 */
export const VSCodeProgressRing = wrap(vsCodeProgressRing());

/**
 * VS Code Tag React component.
 *
 * @public
 */
export const VSCodeTag = wrap(vsCodeTag());

/**
 * VS Code Text Area React component.
 *
 * @public
 */
export const VSCodeTextArea = wrap(vsCodeTextArea());

/**
 * VS Code Text Field React component.
 *
 * @public
 */
export const VSCodeTextField = wrap(vsCodeTextField());

/**
 * VS Code Option React component.
 *
 * @public
 */
export const VSCodeOption = wrap(vsCodeOption());

/**
 * VS Code Dropdown React component.
 *
 * @public
 */
export const VSCodeDropdown = wrap(vsCodeDropdown());

/**
 * VS Code Panels React component.
 *
 * @public
 */
export const VSCodePanels = wrap(vsCodePanels());

/**
 * VS Code Panel Tab React component.
 *
 * @public
 */
export const VSCodePanelTab = wrap(vsCodePanelTab());

/**
 * VS Code Panel View React component.
 *
 * @public
 */
export const VSCodePanelView = wrap(vsCodePanelView());

/**
 * VS Code Radio React component.
 *
 * @public
 */
export const VSCodeRadio = wrap(vsCodeRadio());

/**
 * VS Code Radio Group React component.
 *
 * @public
 */
export const VSCodeRadioGroup = wrap(vsCodeRadioGroup());

/**
 * VS Code Data Grid React component.
 *
 * @public
 */
export const VSCodeDataGrid = wrap(vsCodeDataGrid());

/**
 * VS Code Data Grid Cell React component.
 *
 * @public
 */
export const VSCodeDataGridCell = wrap(vsCodeDataGridCell());

/**
 * VS Code Data Grid Row React component.
 *
 * @public
 */
export const VSCodeDataGridRow = wrap(vsCodeDataGridRow());
