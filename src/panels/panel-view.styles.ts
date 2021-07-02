// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	borderWidth,
	designUnit,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const PanelViewStyles = css`
	${display('flex')} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${borderWidth} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: 10px calc((${designUnit} + 2) * 1px);
	}
`;
