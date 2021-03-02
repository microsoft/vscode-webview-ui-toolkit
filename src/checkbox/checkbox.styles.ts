import {css} from '@microsoft/fast-element';
import {disabledCursor, display} from '@microsoft/fast-foundation';

export const CheckboxStyles = css`
	${display('inline-flex')} :host {
		align-items: center;
		outline: none;
		margin: calc(var(--design-unit) * 1px) 0;
		user-select: none;
	}
	.control {
		position: relative;
		width: 18px;
		height: 18px;
		box-sizing: border-box;
		border-radius: 3px;
		border: calc(var(--outline-width) * 1px) solid 1px;
		background: #3c3c3c;
		outline: none;
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.label {
		color: #f0f0f0;
		padding-inline-start: calc(var(--design-unit) * 2px + 2px);
		margin-inline-end: calc(var(--design-unit) * 2px + 2px);
		cursor: pointer;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: #f0f0f0;
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: calc(var(--corner-radius) * 1px);
		background: #f0f0f0;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: #3c3c3c;
		border-color: #3c3c3c;
	}
	:host(:enabled) .control:active {
		background: #3c3c3c;
		border-color: #1177bb;
	}
	.control:focus {
		outline: calc(var(--outline-width) * 1px) solid #1177bb;
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
