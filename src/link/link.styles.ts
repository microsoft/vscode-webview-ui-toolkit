import {css} from '@microsoft/fast-element';
import {disabledCursor, display} from '@microsoft/fast-foundation';

export const LinkStyles = css`
	${display('inline-flex')} :host {
		outline: none;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		background: transparent;
		color: var(--text-link-foreground-color);
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
		padding: 0;
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
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:not([disabled])) .control:focus {
		outline: calc(var(--focus-border-width) * 1px) solid
			var(--text-link-foreground-color);
		outline-offset: calc(var(--focus-border-width) * 1px);
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
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
