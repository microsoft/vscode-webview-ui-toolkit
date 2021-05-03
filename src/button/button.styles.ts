import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';

/**
 * @internal
 */
const BaseButtonStyles = css`
	${display('inline-flex')} :host {
		outline: none;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		background: var(--button-primary-background-color);
		color: var(--button-primary-foreground-color);
		border-radius: calc(var(--corner-radius) * 1px);
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
		border: calc(var(--border-width) * 1px) solid transparent;
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: var(--button-primary-hover-background-color);
	}
	:host(:active) {
		background: var(--button-primary-background-color);
	}
	.control: ${focusVisible} {
		outline: calc(var(--focus-border-width) * 1px) solid
			var(--button-primary-hover-background-color);
		outline-offset: calc(var(--focus-border-width) * 1px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
		background: var(--button-primary-background-color);
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
		background: var(--button-primary-background-color);
		color: var(--button-primary-foreground-color);
	}
	:host([appearance='primary']:hover) {
		background: var(--button-primary-hover-background-color);
	}
	:host([appearance='primary']) .control {
		padding: 6px 11px;
	}
	:host([appearance='primary']:active) .control:active {
		background: var(--button-primary-background-color);
	}
	:host([appearance='primary']) .control:${focusVisible} {
		outline: calc(var(--focus-border-width) * 1px) solid
			var(--button-primary-hover-background-color);
		outline-offset: calc(var(--focus-border-width) * 1px);
	}
	:host([appearance='primary'][disabled]) {
		background: var(--button-primary-background-color);
	}
`;

/**
 * @internal
 */
const SecondaryButtonStyles = css`
	:host([appearance='secondary']) {
		background: var(--button-secondary-background-color);
		color: var(--button-secondary-foreground-color);
	}
	:host([appearance='secondary']:hover) {
		background: var(--button-secondary-hover-background-color);
	}
	:host([appearance='secondary']) .control {
		padding: 6px 11px;
	}
	:host([appearance='secondary']:active) .control:active {
		background: var(--button-secondary-background-color);
	}
	:host([appearance='secondary']) .control:${focusVisible} {
		outline: calc(var(--focus-border-width) * 1px) solid
			var(--button-primary-hover-background-color);
		outline-offset: calc(var(--focus-border-width) * 1px);
	}
	:host([appearance='secondary'][disabled]) {
		background: var(--button-secondary-background-color);
	}
`;

/**
 * @internal
 */
const IconButtonStyles = css`
	:host([appearance='icon']) {
		background: transparent;
		border-radius: 5px;
		color: var(--button-secondary-foreground-color);
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
		outline: calc(var(--focus-border-width) * 1px) solid
			var(--button-primary-hover-background-color);
		outline-offset: calc(var(--focus-border-width) * 1px);
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
