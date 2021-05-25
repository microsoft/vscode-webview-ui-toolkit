import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	checkboxBackgroundColor,
	checkboxBorderColor,
	checkboxForegroundColor,
	designUnit,
	disabledOpacity,
	focusBorderColor,
	focusBorderWidth,
	heightNumber,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const RadioStyles = css`
	${display('inline-flex')} :host {
		--input-size: calc((${heightNumber} / 2) + ${designUnit});
		align-items: center;
		outline: none;
		margin: calc(${designUnit} * 1px) 0;
		user-select: none;
		position: relative;
		flex-direction: row;
		transition: all 0.2s ease-in-out;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control {
		position: relative;
		width: calc((${heightNumber} / 2 + ${designUnit}) * 1px);
		height: calc((${heightNumber} / 2 + ${designUnit}) * 1px);
		box-sizing: border-box;
		border-radius: 999px;
		border: calc(${borderWidth} * 1px) solid ${checkboxBorderColor};
		background: ${checkboxBackgroundColor};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: var(--body-font);
		color: ${checkboxForegroundColor};
		padding-inline-start: calc(${designUnit} * 2px + 2px);
		margin-inline-end: calc(${designUnit} * 2px + 2px);
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
		background: ${checkboxForegroundColor};
		opacity: 0;
		pointer-events: none;
	}
	:host(:not([disabled])) .control:hover {
		background: ${checkboxBackgroundColor};
		border-color: ${checkboxBorderColor};
	}
	:host(:not([disabled])) .control:active {
		background: ${checkboxBackgroundColor};
		border-color: ${focusBorderColor};
	}
	:host(:${focusVisible}) .control {
		border: calc(${focusBorderWidth} * 1px) solid ${focusBorderColor};
	}
	:host([aria-checked='true']) .control {
		background: ${checkboxBackgroundColor};
		border: calc(${borderWidth} * 1px) solid ${checkboxBorderColor};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${checkboxBackgroundColor};
		border: calc(${borderWidth} * 1px) solid ${checkboxBorderColor};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${checkboxBackgroundColor};
		border: calc(${borderWidth} * 1px) solid ${focusBorderColor};
	}
	:host([aria-checked="true"]:${focusVisible}:not([disabled])) .control {
		border: calc(${focusBorderWidth} * 1px) solid ${focusBorderColor};
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
		opacity: ${disabledOpacity};
	}
`;
