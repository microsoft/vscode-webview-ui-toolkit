import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const OptionStyles = css`
	${display('inline-flex')} :host {
		font-family: var(--body-font);
		border-radius: calc(var(--select-corner-radius-color) * 1px);
		border: calc(var(--focus-border-width) * 1px) solid transparent;
		box-sizing: border-box;
		color: var(--select-foreground-color);
		cursor: pointer;
		fill: currentcolor;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		line-height: var(--type-ramp-base-line-height);
		margin: 0 calc(var(--design-unit) * 1px);
		outline: none;
		overflow: hidden;
		padding: calc(var(--design-unit) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${focusVisible}) {
		border-color: var(--focus-border-color);
		background: var(--option-background-focus-color);
		color: var(--select-foreground-color);
	}
	:host([aria-selected='true']) {
		background: var(--option-background-focus-color);
		color: var(--select-foreground-color);
	}
	:host(:active) {
		background: var(--option-background-focus-color);
		color: var(--select-foreground-color);
	}
	:host(:not([aria-selected='true']):hover) {
		background: var(--option-background-focus-color);
		color: var(--select-foreground-color);
	}
	:host(:not([aria-selected='true']):active) {
		background: var(--option-background-focus-color);
		color: var(--select-foreground-color);
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: var(--disabled-opacity);
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.start,
	.end,
	::slotted(svg) {
		display: flex;
	}
	::slotted(svg) {
		height: calc(var(--design-unit) * 4px);
		width: calc(var(--design-unit) * 4px);
	}
	::slotted([slot='end']) {
		margin-inline-start: 1ch;
	}
	::slotted([slot='start']) {
		margin-inline-end: 1ch;
	}
`;
