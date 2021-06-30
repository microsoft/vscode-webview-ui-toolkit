// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	disabledOpacity,
	focusBorder,
	panelTabActiveBorder,
	panelTabActiveForeground,
	panelTabForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const PanelTabStyles = css`
	${display('inline-flex')} :host {
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		height: calc(${designUnit} * 7px);
		padding: calc(${designUnit} * 1px) 0;
		color: ${panelTabForeground};
		fill: currentcolor;
		border-radius: calc(${cornerRadius} * 1px);
		border: solid calc(${borderWidth} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]:hover) {
		color: ${panelTabActiveForeground};
		background: transparent;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${panelTabActiveForeground};
		fill: currentcolor;
	}
	:host(:${focusVisible}) {
		outline: none;
		border: solid calc(${borderWidth} * 1px) ${panelTabActiveBorder};
		box-shadow: 0 0 0 calc((${focusBorder} - ${borderWidth}) * 1px)
			transparent;
	}
	:host(:focus) {
		outline: none;
	}
`;
