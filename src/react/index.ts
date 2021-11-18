import React from 'react';
import {provideReactWrapper} from '@microsoft/fast-react-wrapper';
import {provideFASTDesignSystem} from '@microsoft/fast-components';

import {
	vsCodeButton,
	vsCodeCheckbox,
	vsCodeBadge,
	vsCodeDivider,
	vsCodeLink,
	vsCodeProgressRing,
	vsCodeTag,
	vsCodeTextArea,
	vsCodeTextField,
	vsCodeOption,
	vsCodeDropdown,
	vsCodePanels,
	vsCodePanelTab,
	vsCodePanelView,
	vsCodeRadio,
	vsCodeRadioGroup,
} from '..';

const {wrap} = provideReactWrapper(React, provideFASTDesignSystem());

export const VSCodeBadge = wrap(vsCodeBadge());
export const VSCodeButton = wrap(vsCodeButton());
export const VSCodeCheckbox = wrap(vsCodeCheckbox());
export const VSCodeDivider = wrap(vsCodeDivider());
export const VSCodeLink = wrap(vsCodeLink());
export const VSCodeProgressRing = wrap(vsCodeProgressRing());
export const VSCodeTag = wrap(vsCodeTag());
export const VSCodeTextArea = wrap(vsCodeTextArea());
export const VSCodeTextField = wrap(vsCodeTextField());
export const VSCodeOption = wrap(vsCodeOption());
export const VSCodeDropdown = wrap(vsCodeDropdown());
export const VSCodePanels = wrap(vsCodePanels());
export const VSCodePanelTab = wrap(vsCodePanelTab());
export const VSCodePanelView = wrap(vsCodePanelView());
export const VSCodeRadio = wrap(vsCodeRadio());
export const VSCodeRadioGroup = wrap(vsCodeRadioGroup());
