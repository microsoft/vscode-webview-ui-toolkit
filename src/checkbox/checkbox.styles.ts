import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const CheckboxStyles = css`
	${display('inline-flex')} :host {
		align-items: center;
		outline: none;
		margin: calc(var(--design-unit) * 1px) 0;
		user-select: none;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
	}
	.control {
		position: relative;
		width: calc((${heightNumber} / 2 + var(--design-unit)) * 1px);
		height: calc((${heightNumber} / 2 + var(--design-unit)) * 1px);
		box-sizing: border-box;
		border-radius: calc(var(--checkbox-corner-radius) * 1px);
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
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: var(--checkbox-foreground-color);
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: calc(var(--checkbox-corner-radius) * 1px);
		background: var(--checkbox-foreground-color);
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: var(--checkbox-background-color);
		border-color: var(--checkbox-background-color);
	}
	:host(:enabled) .control:active {
		background: var(--checkbox-background-color);
		border-color: var(--focus-border-color);
	}
	:host(:${focusVisible}) .control {
		border: calc(var(--focus-border-width) * 1px) solid
			var(--focus-border-color);
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${disabledCursor};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: var(--disabled-opacity);
	}
`;
