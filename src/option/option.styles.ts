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
	optionActiveSelectionBackground,
	optionActiveSelectionForeground,
	optionForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const OptionStyles = css`
	${display('inline-flex')} :host {
		font-family: var(--body-font);
		border-radius: ${cornerRadius};
		border: calc(${borderWidth} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${optionForeground};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${designUnit} / 2) * 1px)
			calc((${designUnit} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${focusVisible}) {
		border-color: ${focusBorder};
		background: ${optionActiveSelectionBackground};
		color: ${optionForeground};
	}
	:host([aria-selected='true']) {
		background: ${optionActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
		color: ${optionActiveSelectionForeground};
	}
	:host(:active) {
		background: ${optionActiveSelectionBackground};
		color: ${optionActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${optionActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
		color: ${optionActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${optionActiveSelectionBackground};
		color: ${optionForeground};
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
