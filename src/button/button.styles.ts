import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	buttonPrimaryBackgroundColor,
	buttonPrimaryForegroundColor,
	buttonPrimaryHoverBackgroundColor,
	buttonSecondaryBackgroundColor,
	buttonSecondaryForegroundColor,
	buttonSecondaryHoverBackgroundColor,
	cornerRadius,
	disabledOpacity,
	focusBorderWidth,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

/**
 * @internal
 */
const BaseButtonStyles = css`
	${display('inline-flex')} :host {
		outline: none;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		background: ${buttonPrimaryBackgroundColor};
		color: ${buttonPrimaryForegroundColor};
		border-radius: calc(${cornerRadius} * 1px);
		fill: currentcolor;
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
		padding: 6px 11px;
		white-space: nowrap;
		outline: none;
		text-decoration: none;
		border: calc(${borderWidth} * 1px) solid transparent;
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${buttonPrimaryHoverBackgroundColor};
	}
	:host(:active) {
		background: ${buttonPrimaryBackgroundColor};
	}
	.control: ${focusVisible} {
		outline: calc(${focusBorderWidth} * 1px) solid
			${buttonPrimaryHoverBackgroundColor};
		outline-offset: calc(${focusBorderWidth} * 1px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
		background: ${buttonPrimaryBackgroundColor};
		cursor: ${disabledCursor};
	}
	.content {
		display: flex;
	}
	.start,
	.end {
		display: flex;
	}
	.control.icon-only {
		padding: 0;
		line-height: 0;
	}
	::slotted(svg),
	::slotted(span) {
		width: 16px;
		height: 16px;
	}
	.start {
		margin-inline-end: 8px;
	}
	.end {
		margin-inline-start: 8px;
	}
`;

/**
 * @internal
 */
const PrimaryButtonStyles = css`
	:host([appearance='primary']) {
		background: ${buttonPrimaryBackgroundColor};
		color: ${buttonPrimaryForegroundColor};
	}
	:host([appearance='primary']:hover) {
		background: ${buttonPrimaryHoverBackgroundColor};
	}
	:host([appearance='primary']) .control {
		padding: 6px 11px;
	}
	:host([appearance='primary']:active) .control:active {
		background: ${buttonPrimaryBackgroundColor};
	}
	:host([appearance='primary']) .control:${focusVisible} {
		outline: calc(${focusBorderWidth} * 1px) solid
			${buttonPrimaryHoverBackgroundColor};
		outline-offset: calc(${focusBorderWidth} * 1px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${buttonPrimaryBackgroundColor};
	}
`;

/**
 * @internal
 */
const SecondaryButtonStyles = css`
	:host([appearance='secondary']) {
		background: ${buttonSecondaryBackgroundColor};
		color: ${buttonSecondaryForegroundColor};
	}
	:host([appearance='secondary']:hover) {
		background: ${buttonSecondaryHoverBackgroundColor};
	}
	:host([appearance='secondary']) .control {
		padding: 6px 11px;
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${buttonSecondaryBackgroundColor};
	}
	:host([appearance='secondary']) .control:${focusVisible} {
		outline: calc(${focusBorderWidth} * 1px) solid
			${buttonPrimaryHoverBackgroundColor};
		outline-offset: calc(${focusBorderWidth} * 1px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${buttonSecondaryBackgroundColor};
	}
`;

/**
 * @internal
 */
const IconButtonStyles = css`
	:host([appearance='icon']) {
		background: transparent;
		border-radius: 5px;
		color: ${buttonSecondaryForegroundColor};
	}
	:host([appearance='icon']:hover) {
		background: rgba(90, 93, 94, 0.31);
	}
	:host([appearance='icon']) .control {
		padding: 3px;
	}
	:host([appearance='icon']:active) .control:active {
		background: rgba(90, 93, 94, 0.31);
	}
	:host([appearance='icon']) .control:${focusVisible} {
		outline: calc(${focusBorderWidth} * 1px) solid
			${buttonPrimaryHoverBackgroundColor};
		outline-offset: calc(${focusBorderWidth} * 1px);
	}
	:host([appearance='icon'][disabled]) {
		background: transparent;
	}
`;

export const ButtonStyles = css`
	${BaseButtonStyles}
	${PrimaryButtonStyles}
	${SecondaryButtonStyles}
	${IconButtonStyles}
`;
