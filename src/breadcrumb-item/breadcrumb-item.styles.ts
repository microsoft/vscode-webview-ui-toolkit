// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display, focusVisible} from '@microsoft/fast-foundation';
import {
	borderWidth,
	breadcrumbItemForeground,
	breadcrumbItemForegroundHover,
	breadcrumbSeparatorMarginHorizontal,
	designUnit,
	focusBorder,
	fontFamily,
	iconHeight,
	iconWidth,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const BreadcrumbItemStyles = css`
	${display('inline-flex')} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${breadcrumbItemForeground};
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		fill: current;
		line-height: ${typeRampBaseLineHeight};
		min-width: calc(${designUnit} * 7px);
		outline: none;
	}
	:host(:not([href])) slot:not([name]) {
		display: block;
		cursor: default;
		color: ${breadcrumbItemForeground};
		border: calc(${borderWidth} * 1px) solid transparent;
	}
	:host(:not([href]):${focusVisible}) slot:not([name]) {
		color: ${breadcrumbItemForegroundHover};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host(:${focusVisible}) .control {
		color: ${breadcrumbItemForegroundHover};
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
	:host(:hover) .control {
		color: ${breadcrumbItemForegroundHover};
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		color: ${breadcrumbItemForeground};
		border: calc(${borderWidth} * 1px) solid transparent;
		cursor: pointer;
		display: flex;
		fill: inherit;
		outline: none;
		text-decoration: none;
		white-space: nowrap;
	}
	.control .content {
		position: relative;
	}
	.listitem {
		display: flex;
		align-items: center;
	}
	.separator {
		display: flex;
		align-items: center;
		margin: 0 ${breadcrumbSeparatorMarginHorizontal};
	}
	.start,
	.end {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: ${iconWidth};
		height: ${iconHeight};
	}
	.start {
		margin-inline-end: 6px;
	}
	.end {
		margin-inline-start: 6px;
	}
`;
