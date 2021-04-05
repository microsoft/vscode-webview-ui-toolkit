import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const TextAreaStyles = css`
	${display('inline-block')} :host {
		font-family: var(--body-font);
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: var(--input-foreground-color);
		background: var(--input-background-color);
		border-radius: calc(var(--corner-radius) * 1px);
		border: calc(var(--border-width) * 1px) solid var(--input-border-color);;
		height: calc(${heightNumber} * 2px);
		font: inherit;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		padding: calc(var(--design-unit) * 2px + 1px);
		width: 100%;
		resize: none;
	}
	.control:hover:enabled {
		background: var(--input-background-color);
		border-color: var(--input-border-color);
	}
	.control:active:enabled {
		background: var(--input-background-color);
		border-color: var(--focus-border-color);
	}
	.control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
		outline: none;
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: var(--focus-border-color);
		box-shadow: 0 0 0 1px var(--focus-border-color) inset;
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
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
