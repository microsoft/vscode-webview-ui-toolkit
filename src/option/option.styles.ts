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
	dropdownForegroundColor,
	focusBorder,
	optionBackgroundFocusColor,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const OptionStyles = css`
	${display('inline-flex')} :host {
		font-family: var(--body-font);
		border-radius: ${cornerRadius};
		border: calc(${borderWidth} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${dropdownForegroundColor};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin: 0 calc(${designUnit} * 1px);
		outline: none;
		overflow: hidden;
		padding: calc(${designUnit} * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${focusVisible}) {
		border-color: ${focusBorder};
		background: ${optionBackgroundFocusColor};
		color: ${dropdownForegroundColor};
	}
	:host([aria-selected='true']) {
		background: ${optionBackgroundFocusColor};
		color: ${dropdownForegroundColor};
	}
	:host(:active) {
		background: ${optionBackgroundFocusColor};
		color: ${dropdownForegroundColor};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${optionBackgroundFocusColor};
		color: ${dropdownForegroundColor};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${optionBackgroundFocusColor};
		color: ${dropdownForegroundColor};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.start,
	.end,
	::slotted(svg),
	::slotted(span) {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		height: calc(${designUnit} * 4px);
		width: calc(${designUnit} * 4px);
	}
	::slotted([slot='end']) {
		margin-inline-start: 6px;
	}
	::slotted([slot='start']) {
		margin-inline-end: 6px;
	}
`;
