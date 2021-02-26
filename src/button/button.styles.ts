import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';

export const ButtonStyles = css`
	${display('inline-flex')} :host {
		outline: none;
		background-color: var(--accent-base-color);
		color: var(--accent-foreground-color);
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
		background-color: var(--accent-hover-color);
	}
	:host(:active) {
		background-color: var(--accent-base-color);
	}
	.control: ${focusVisible} {
		border: calc(var(--outline-width) * 1px) solid var(--accent-base-color);
		box-shadow: 0 0 0
			calc((var(--focus-outline-width) - var(--outline-width)) * 1px)
			var(--accent-base-color);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
		background-color: var(--accent-base-color);
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
		${
			/* Glyph size and margin-left is temporary -
        replace when adaptive typography is figured out */ ''
		} width: 16px;
		height: 16px;
	}
	.start {
		margin-inline-end: 11px;
	}
	.end {
		margin-inline-start: 11px;
	}
`;
