import {css} from '@microsoft/fast-element';
import {disabledCursor, display} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	disabledOpacity,
	textLinkForegroundColor,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const LinkStyles = css`
	${display('inline-flex')} :host {
		outline: none;
		font-family: var(--body-font);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		background: transparent;
		color: ${textLinkForegroundColor};
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
		padding: 0;
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
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:not([disabled])) .control:focus {
		outline: calc(${borderWidth} * 1px) solid
			${textLinkForegroundColor};
		outline-offset: calc(${borderWidth} * 1px);
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
		text-decoration: none;
		background: transparent;
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
	::slotted(svg),
	::slotted(span) {
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
