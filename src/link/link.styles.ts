// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	display,
	ElementDefinitionContext,
	focusVisible,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	focusBorder,
	fontFamily,
	linkActiveForeground,
	linkForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';
import {LinkOptions} from './';

export const LinkStyles = (
	context: ElementDefinitionContext,
	definition: LinkOptions
) => css`
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
	:host(:hover) {
		color: ${linkActiveForeground};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${linkActiveForeground};
	}
	:host(:${focusVisible}) .control {
		border: calc(${borderWidth} * 1px) solid ${focusBorder};
	}
`;
