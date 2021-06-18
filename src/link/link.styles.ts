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
	fontFamily,
	linkActiveForeground,
	linkForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const LinkStyles = css`
	${display('inline-flex')} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${linkForeground};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		outline: none;
	}
	.control {
		align-items: center;
		background: transparent;
		border: calc(${borderWidth} * 1px) solid transparent;
		border-radius: calc(${cornerRadius} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		display: inline-flex;
		fill: inherit;
		font-family: inherit;
		flex-grow: 1;
		height: inherit;
		justify-content: center;
		padding: 0;
		outline: none;
		text-decoration: none;
		white-space: nowrap;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:not([disabled]):hover) {
		color: ${linkActiveForeground};
	}
	:host(:not([disabled]):hover) .content {
		text-decoration: underline;
	}
	:host(:not([disabled]):active) {
		background: transparent;
		color: ${linkActiveForeground};
	}
	:host(:not([disabled]):${focusVisible}) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		background: transparent;
		opacity: ${disabledOpacity};
		text-decoration: none;
	}
	.start,
	.end {
		display: flex;
	}
	.control.icon-only {
		line-height: 0;
		padding: 0;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
	.end {
		margin-inline-start: 8px;
	}
`;
