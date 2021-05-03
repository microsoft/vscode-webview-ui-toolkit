import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';

export const RadioStyles = css`
	${display('inline-flex')} :host {
		--input-size: calc((${heightNumber} / 2) + var(--design-unit));
		align-items: center;
		outline: none;
		margin: calc(var(--design-unit) * 1px) 0;
		user-select: none;
		position: relative;
		flex-direction: row;
		transition: all 0.2s ease-in-out;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
	}
	.control {
		position: relative;
		width: calc((${heightNumber} / 2 + var(--design-unit)) * 1px);
		height: calc((${heightNumber} / 2 + var(--design-unit)) * 1px);
		box-sizing: border-box;
		border-radius: 999px;
		border: calc(var(--border-width) * 1px) solid
			var(--checkbox-border-color);
		background: var(--checkbox-background-color);
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: var(--body-font);
		color: var(--checkbox-foreground-color);
		padding-inline-start: calc(var(--design-unit) * 2px + 2px);
		margin-inline-end: calc(var(--design-unit) * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		border-radius: 999px;
		display: inline-block;
		background: var(--checkbox-foreground-color);
		opacity: 0;
		pointer-events: none;
	}
	:host(:not([disabled])) .control:hover {
		background: var(--checkbox-background-color);
		border-color: var(--checkbox-border-color);
	}
	:host(:not([disabled])) .control:active {
		background: var(--checkbox-background-color);
		border-color: var(--focus-border-color);
	}
	:host(:${focusVisible}) .control {
		border: calc(var(--focus-border-width) * 1px) solid
			var(--focus-border-color);
	}
	:host([aria-checked='true']) .control {
		background: var(--checkbox-background-color);
		border: calc(var(--border-width) * 1px) solid
			var(--checkbox-border-color);
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: var(--checkbox-background-color);
		border: calc(var(--border-width) * 1px) solid
			var(--checkbox-border-color);
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: var(--checkbox-background-color);
		border: calc(var(--border-width) * 1px) solid var(--focus-border-color);
	}
	:host([aria-checked="true"]:${focusVisible}:not([disabled])) .control {
		border: calc(var(--focus-border-width) * 1px) solid
			var(--focus-border-color);
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}
`;
