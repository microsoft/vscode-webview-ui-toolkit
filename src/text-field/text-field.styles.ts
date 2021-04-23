import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const TextFieldStyles = css`
	${display('inline-block')} :host {
		font-family: var(--body-font);
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: var(--input-foreground-color);
		background: var(--input-background-color);
		border-radius: calc(var(--corner-radius) * 1px);
		border: calc(var(--border-width) * 1px) solid var(--input-border-color);
		height: calc(${heightNumber} * 1px);
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - 4px);
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(var(--design-unit) * 2px + 1px);
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
	}
	.control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
		outline: none;
	}
	.label {
		display: block;
		color: var(--input-placeholder-foreground-color);
		cursor: pointer;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		margin-bottom: 4px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: 16px;
		height: 16px;
	}
	.start {
		margin-inline-start: 11px;
	}
	.end {
		margin-inline-end: 11px;
	}
	:host(:hover:not([disabled])) .root {
		background: var(--input-background-color);
		border-color: var(--input-border-color);
	}
	:host(:active:not([disabled])) .root {
		background: var(--input-background-color);
		border-color: var(--focus-border-color);
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: var(--focus-border-color);
		box-shadow: 0 0 0 1px var(--focus-border-color) inset;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}
	:host([disabled]) .control {
		border-color: var(--input-border-color);
	}
`;
