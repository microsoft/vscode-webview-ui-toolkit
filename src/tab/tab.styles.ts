import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const TabStyles = css`
	${display('inline-flex')} :host {
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		height: calc(${heightNumber} * 1px);
		padding: calc(var(--design-unit) * 1px) 0;
		color: var(--tab-foreground-color);
		fill: currentcolor;
		border-radius: calc(var(--corner-radius) * 1px);
		border: solid calc(var(--border-width) * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: var(--tab-active-foreground-color);
		fill: currentcolor;
	}
	:host(:active) {
		color: var(--tab-active-foreground-color);
		fill: currentcolor;
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: var(--disabled-opacity);
	}
	:host([disabled]:hover) {
		color: var(--tab-active-foreground-color);
		background: transparent;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: var(--tab-active-foreground-color);
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: var(--tab-active-foreground-color);
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: var(--tab-active-foreground-color);
		fill: currentcolor;
	}
	:host(:${focusVisible}) {
		outline: none;
		border: solid calc(var(--border-width) * 1px)
			var(--tab-active-border-color);
		box-shadow: 0 0 0
			calc((var(--focus-border-width) - var(--border-width)) * 1px)
			transparent;
	}
	:host(:focus) {
		outline: none;
	}
	:host(.vertical) {
		justify-content: end;
		grid-column: 2;
	}
	:host(.vertical[aria-selected='true']) {
		z-index: 2;
	}
	:host(.vertical:hover) {
		color: var(--tab-active-foreground-color);
	}
	:host(.vertical:active) {
		color: var(--tab-active-foreground-color);
	}
	:host(.vertical:hover[aria-selected='true']) {
	}
`;
