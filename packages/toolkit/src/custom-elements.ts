// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type {Container} from '@microsoft/fast-foundation';
import {vsCodeBadge} from './badge/index.js';
import {vsCodeButton} from './button/index.js';
import {vsCodeCheckbox} from './checkbox/index.js';
import {
	vsCodeDataGrid,
	vsCodeDataGridCell,
	vsCodeDataGridRow,
} from './data-grid/index.js';
import {vsCodeDivider} from './divider/index.js';
import {vsCodeDropdown} from './dropdown/index.js';
import {vsCodeLink} from './link/index.js';
import {vsCodeOption} from './option/index.js';
import {vsCodePanels, vsCodePanelTab, vsCodePanelView} from './panels/index.js';
import {vsCodeProgressRing} from './progress-ring/index.js';
import {vsCodeRadioGroup} from './radio-group/index.js';
import {vsCodeRadio} from './radio/index.js';
import {vsCodeTag} from './tag/index.js';
import {vsCodeTextArea} from './text-area/index.js';
import {vsCodeTextField} from './text-field/index.js';

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Badge} from './badge/index.js';
import type {Button} from './button/index.js';
import type {Checkbox} from './checkbox/index.js';
import type {DataGrid, DataGridCell, DataGridRow} from './data-grid/index.js';
import type {Divider} from './divider/index.js';
import type {Dropdown} from './dropdown/index.js';
import type {Link} from './link/index.js';
import type {Option} from './option/index.js';
import type {Panels, PanelTab, PanelView} from './panels/index.js';
import type {ProgressRing} from './progress-ring/index.js';
import type {RadioGroup} from './radio-group/index.js';
import type {Radio} from './radio/index.js';
import type {Tag} from './tag/index.js';
import type {TextArea} from './text-area/index.js';
import type {TextField} from './text-field/index.js';

// export all components
export {
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
	vsCodeRadioGroup,
	vsCodeRadio,
	vsCodeTag,
	vsCodeTextArea,
	vsCodeTextField,
};

/**
 * All VSCode Web Components
 * @public
 * @remarks
 * This object can be passed directly to the Design System's `register` method to
 * statically link and register all available components.
 */
export const allComponents = {
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
	vsCodeRadioGroup,
	vsCodeRadio,
	vsCodeTag,
	vsCodeTextArea,
	vsCodeTextField,
	register(container?: Container, ...rest: any[]) {
		if (!container) {
			// preserve backward compatibility with code that loops through
			// the values of this object and calls them as funcs with no args
			return;
		}

		for (const key in this) {
			if (key === 'register') {
				continue;
			}

			(this as any)[key]().register(container, ...rest);
		}
	},
};
