// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	ElementDefinitionContext,
	focusVisible,
	FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	disabledOpacity,
	dropdownBorder,
	focusBorder,
	fontFamily,
	inputBackground,
	inputForeground,
	inputMinWidth,
	inputPlaceholderForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const textAreaStyles = (
	context: ElementDefinitionContext,
	definition: FoundationElementDefinition
) => css`
	${display('inline-block')} :host {
		font-family: ${fontFamily};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${inputForeground};
		background: ${inputBackground};
		border-radius: calc(${cornerRadius} * 1px);
		border: calc(${borderWidth} * 1px) solid ${dropdownBorder};
		font: inherit;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: calc(${designUnit} * 2px + 1px);
		width: 100%;
		min-width: ${inputMinWidth};
		resize: none;
	}
	.control:hover:enabled {
		background: ${inputBackground};
		border-color: ${dropdownBorder};
	}
	.control:active:enabled {
		background: ${inputBackground};
		border-color: ${focusBorder};
	}
	.control:hover,
	.control:${focusVisible},
	.control:disabled,
	.control:active {
		outline: none;
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${focusBorder};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${inputPlaceholderForeground};
		cursor: pointer;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		margin-bottom: calc(${designUnit} * 1px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		border-color: ${dropdownBorder};
	}
`;
