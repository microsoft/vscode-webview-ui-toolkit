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
		background: var(--primary-background-color);
		color: var(--primary-foreground-color);
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
		border: calc(var(--outline-width) * 1px) solid transparent;
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: var(--primary-hover-background-color);
	}
	:host(:active) {
		background: var(--primary-background-color);
	}
	.control: ${focusVisible} {
		outline: calc(var(--outline-width) * 1px) solid
			var(--primary-hover-background-color);
		outline-offset: calc(var(--outline-width) * 1px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
		background: var(--primary-background-color);
		cursor: ${disabledCursor};
	}
	.start,
	.end {
		display: flex;
	}
	.control.icon-only {
		padding: 0;
		line-height: 0;
	}
	::slotted(svg) {
		width: 16px;
		height: 16px;
	}
	.start {
		margin-inline-end: 11px;
	}
	.end {
		margin-inline-start: 11px;
	}
`;

/**
 * @internal
 */
const PrimaryButtonStyles = css`
	:host([appearance='primary']) {
		background: var(--primary-background-color);
		color: var(--primary-foreground-color);
	}
	:host([appearance='primary']:hover) {
		background: var(--primary-hover-background-color);
	}
	:host([appearance='primary']) .control {
		padding: 6px 11px;
	}
	:host([appearance='primary']:active) .control:active {
		background: var(--primary-background-color);
	}
	:host([appearance='primary']) .control:${focusVisible} {
		outline: calc(var(--outline-width) * 1px) solid
			var(--primary-hover-background-color);
		outline-offset: calc(var(--outline-width) * 1px);
	}
	:host([appearance='primary'][disabled]) {
		background: var(--primary-background-color);
	}
`;

/**
 * @internal
 */
const SecondaryButtonStyles = css`
	:host([appearance='secondary']) {
		background: var(--secondary-background-color);
		color: var(--secondary-foreground-color);
	}
	:host([appearance='secondary']:hover) {
		background: var(--secondary-hover-background-color);
	}
	:host([appearance='secondary']) .control {
		padding: 6px 11px;
	}
	:host([appearance='secondary']:active) .control:active {
		background: var(--secondary-background-color);
	}
	:host([appearance='secondary']) .control:${focusVisible} {
		outline: calc(var(--outline-width) * 1px) solid
			var(--primary-hover-background-color);
		outline-offset: calc(var(--outline-width) * 1px);
	}
	:host([appearance='secondary'][disabled]) {
		background: var(--secondary-background-color);
	}
`;

/**
 * @internal
 */
const InstallButtonStyles = css`
	:host([appearance='install']) {
		background: var(--primary-background-color);
		color: var(--primary-foreground-color);
	}
	:host([appearance='install']:hover) {
		background: var(--primary-hover-background-color);
	}
	:host([appearance='install']) .control {
		padding: 2px 6px;
	}
	:host([appearance='install']:active) .control:active {
		background: var(--primary-background-color);
	}
	:host([appearance='install']) .control:${focusVisible} {
		outline: calc(var(--outline-width) * 1px) solid
			var(--primary-hover-background-color);
		outline-offset: calc(var(--outline-width) * 1px);
	}
	:host([appearance='install'][disabled]) {
		background: var(--primary-background-color);
	}
`;

/**
 * @internal
 */
const TextButtonStyles = css`
	:host([appearance='text']) {
		background: transparent;
		color: var(--secondary-foreground-color);
	}
	:host([appearance='text']:hover) {
		background: var(--secondary-hover-background-color);
	}
	:host([appearance='text']) .control {
		padding: 6px 11px;
	}
	:host([appearance='text']:active) .control:active {
		background: var(--secondary-background-color);
	}
	:host([appearance='text']) .control:${focusVisible} {
		outline: calc(var(--outline-width) * 1px) solid
			var(--primary-hover-background-color);
		outline-offset: calc(var(--outline-width) * 1px);
	}
	:host([appearance='text'][disabled]) {
		background: var(--secondary-background-color);
	}
`;

/**
 * @internal
 */
const LinkButtonStyles = css`
	:host([appearance='link']) {
		background: transparent;
		color: var(--text-link-foreground-color);
	}
	:host([appearance='link']:hover) {
		text-decoration: underline;
	}
	:host([appearance='link']) .control {
		padding: 0;
	}
	:host([appearance='link']:active) .control:active {
		background: transparent;
	}
	:host([appearance='link']) .control:${focusVisible} {
		outline: calc(var(--outline-width) * 1px) solid
			var(--text-link-foreground-color);
		outline-offset: calc(var(--outline-width) * 1px);
	}
	:host([appearance='link'][disabled]) {
		text-decoration: none;
		background: transparent;
	}
`;

export const ButtonStyles = css`
	${BaseButtonStyles}
	${PrimaryButtonStyles}
    ${SecondaryButtonStyles}
    ${InstallButtonStyles}
    ${TextButtonStyles}
    ${LinkButtonStyles}
`;
