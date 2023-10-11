// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	ButtonOptions,
	disabledCursor,
	display,
	ElementDefinitionContext,
	focusVisible,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	buttonBorder,
	buttonIconBackground,
	buttonIconCornerRadius,
	buttonIconFocusBorderOffset,
	buttonIconHoverBackground,
	buttonIconPadding,
	buttonPaddingHorizontal,
	buttonPaddingVertical,
	buttonPrimaryBackground,
	buttonPrimaryForeground,
	buttonPrimaryHoverBackground,
	buttonSecondaryBackground,
	buttonSecondaryForeground,
	buttonSecondaryHoverBackground,
	contrastActiveBorder,
	cornerRadiusRound,
	designUnit,
	disabledOpacity,
	focusBorder,
	fontFamily,
	foreground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens.js';

/**
 * Developer note:
 *
 * The prettier-ignore command is used on this block of code because when removed the
 * '.control:${focusVisible}' CSS selector will be automatically reformatted to
 * '.control: ${focusVisible}' (note the space between the colon and dollar sign).
 *
 * This results in non-valid CSS that will not render a focus outline on base buttons.
 *
 * Additionally, this prettier command must be declared on the entire code block and not
 * directly above the CSS selector line because the below code block is a template literal
 * string which will end up being used directly in the final component CSS.
 *
 * Thus having '// prettier-ignore' directly in the final CSS will also break the component
 * styling.
 *
 * @internal
 */
// prettier-ignore
const BaseButtonStyles = css`
	${display('inline-flex')} :host {
		outline: none;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		color: ${buttonPrimaryForeground};
		background: ${buttonPrimaryBackground};
		border-radius: calc(${cornerRadiusRound} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${buttonPaddingVertical} ${buttonPaddingHorizontal};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${borderWidth} * 1px) solid ${buttonBorder};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${buttonPrimaryHoverBackground};
	}
	:host(:active) {
		background: ${buttonPrimaryBackground};
	}
	.control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
		background: ${buttonPrimaryBackground};
		cursor: ${disabledCursor};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`;

/**
 * @internal
 */
const PrimaryButtonStyles = css`
	:host([appearance='primary']) {
		background: ${buttonPrimaryBackground};
		color: ${buttonPrimaryForeground};
	}
	:host([appearance='primary']:hover) {
		background: ${buttonPrimaryHoverBackground};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${buttonPrimaryBackground};
	}
	:host([appearance='primary']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${buttonPrimaryBackground};
	}
`;

/**
 * @internal
 */
const SecondaryButtonStyles = css`
	:host([appearance='secondary']) {
		background: ${buttonSecondaryBackground};
		color: ${buttonSecondaryForeground};
	}
	:host([appearance='secondary']:hover) {
		background: ${buttonSecondaryHoverBackground};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${buttonSecondaryBackground};
	}
	:host([appearance='secondary']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: calc(${borderWidth} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${buttonSecondaryBackground};
	}
`;

/**
 * @internal
 */
const IconButtonStyles = css`
	:host([appearance='icon']) {
		background: ${buttonIconBackground};
		border-radius: ${buttonIconCornerRadius};
		color: ${foreground};
	}
	:host([appearance='icon']:hover) {
		background: ${buttonIconHoverBackground};
		outline: 1px dotted ${contrastActiveBorder};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${buttonIconPadding};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${buttonIconHoverBackground};
	}
	:host([appearance='icon']) .control:${focusVisible} {
		outline: calc(${borderWidth} * 1px) solid ${focusBorder};
		outline-offset: ${buttonIconFocusBorderOffset};
	}
	:host([appearance='icon'][disabled]) {
		background: ${buttonIconBackground};
	}
`;

export const buttonStyles = (
	context: ElementDefinitionContext,
	definition: ButtonOptions
) => css`
	${BaseButtonStyles}
	${PrimaryButtonStyles}
	${SecondaryButtonStyles}
	${IconButtonStyles}
`;
