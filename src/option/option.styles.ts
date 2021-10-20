// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css, ElementStyles} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	ElementDefinitionContext,
	focusVisible,
	ListboxOptionOptions,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	disabledOpacity,
	focusBorder,
	foreground,
	listActiveSelectionBackground,
	listActiveSelectionForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const OptionStyles: (
	context: ElementDefinitionContext,
	definition: ListboxOptionOptions
) => ElementStyles = (
	context: ElementDefinitionContext,
	definition: ListboxOptionOptions
) => css`
	${display('inline-flex')} :host {
		font-family: var(--body-font);
		border-radius: ${cornerRadius};
		border: calc(${borderWidth} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${foreground};
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
		background: ${listActiveSelectionBackground};
		color: ${foreground};
	}
	:host([aria-selected='true']) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
		color: ${listActiveSelectionForeground};
	}
	:host(:active) {
		background: ${listActiveSelectionBackground};
		color: ${listActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${listActiveSelectionBackground};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
		color: ${listActiveSelectionForeground};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${listActiveSelectionBackground};
		color: ${foreground};
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
`;
