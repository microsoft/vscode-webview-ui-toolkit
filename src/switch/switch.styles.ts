import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const SwitchStyles = css`
	:host([hidden]) {
		display: none;
	}
	${display('inline-flex')} :host {
		align-items: center;
		outline: none;
		font-family: var(--body-font);
		margin: calc(var(--design-unit) * 1px) 0;
		user-select: none;
	}
	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .switch,
	:host([disabled]) .switch {
		cursor: ${disabledCursor};
	}
	.switch {
		position: relative;
		outline: none;
		box-sizing: border-box;
		width: calc(${heightNumber} * 1px);
		height: calc((${heightNumber} / 2 + var(--design-unit)) * 1px);
		background: transparent;
		border-radius: calc(10 * 1px);
		border: calc(var(--border-width) * 1px) solid #858585;
	}
	.switch:hover {
		background: transparent;
		border-color: #c6c6c6;
		cursor: pointer;
	}
	host([disabled]) .switch:hover,
	host([readonly]) .switch:hover {
		background: transparent;
		border-color: #c6c6c6;
		cursor: ${disabledCursor};
	}
	:host(:not([disabled])) .switch:active {
		background: transparent;
		border-color: #c6c6c6;
	}
	:host(:${focusVisible}) .switch {
		box-shadow: 0 0 0 2px var(--background-color),
			0 0 0 4px var(--focus-border-color);
		border-color: var(--focus-border-color);
	}
	.checked-indicator {
		position: absolute;
		top: 5px;
		bottom: 5px;
		background: #ffffff;
		border-radius: 50%;
		transition: all 0.2s ease-in-out;
	}
	.checked-indicator {
		left: 5px;
		right: calc(((${heightNumber} / 2) + 1) * 1px);
	}
	:host([aria-checked='true']) .checked-indicator {
		left: calc(((${heightNumber} / 2) + 1) * 1px);
		right: 5px;
	}
	.status-message {
		color: #cccccc;
		cursor: pointer;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
	}
	:host([disabled]) .status-message,
	:host([readonly]) .status-message {
		cursor: ${disabledCursor};
	}
	.label {
		color: #cccccc;
		margin-inline-end: calc(var(--design-unit) * 2px + 2px);
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	::slotted(*) {
		margin-inline-start: calc(var(--design-unit) * 2px + 2px);
	}
	:host([aria-checked='true']) .checked-indicator {
		background: #ffffff;
	}
	:host([aria-checked='true']) .switch {
		background: #0e639c;
		border-color: #0e639c;
	}
	:host([aria-checked='true']:not([disabled])) .switch:hover {
		background: #1177bb;
		border-color: #1177bb;
	}
	:host([aria-checked='true']:not([disabled])) .switch:active {
		background: #1177bb;
		border-color: #1177bb;
	}
	:host([aria-checked="true"]:${focusVisible}:not([disabled])) .switch {
		box-shadow: 0 0 0 2px var(--background-color),
			0 0 0 4px var(--focus-border-color);
		border-color: transparent;
	}
	.unchecked-message {
		display: block;
	}
	.checked-message {
		display: none;
	}
	:host([aria-checked='true']) .unchecked-message {
		display: none;
	}
	:host([aria-checked='true']) .checked-message {
		display: block;
	}
`;
