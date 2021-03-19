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
		color: #a0a0a0;
		fill: currentcolor;
		border-radius: calc(var(--corner-radius) * 1px);
		border: solid calc(var(--border-width) * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: #ffffff;
		fill: currentcolor;
	}
	:host(:active) {
		color: #ffffff;
		fill: currentcolor;
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: var(--disabled-opacity);
	}
	:host([disabled]:hover) {
		color: #ffffff;
		background: transparent;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: #ffffff;
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: #ffffff;
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: #ffffff;
		fill: currentcolor;
	}
	:host(:${focusVisible}) {
		outline: none;
		border: solid calc(var(--border-width) * 1px) transparent;
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
		color: #ffffff;
	}
	:host(.vertical:active) {
		color: #ffffff;
	}
	:host(.vertical:hover[aria-selected='true']) {
	}
`;
