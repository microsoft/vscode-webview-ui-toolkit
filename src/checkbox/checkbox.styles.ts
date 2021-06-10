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
	checkboxCornerRadius,
	checkboxForegroundColor,
	designUnit,
	disabledOpacity,
	focusBorder,
	focusBorderWidth,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const CheckboxStyles = css`
	${display('inline-flex')} :host {
		align-items: center;
		outline: none;
		margin: calc(${designUnit} * 1px) 0;
		user-select: none;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control {
		position: relative;
		width: calc(${designUnit} * 4px);
		height: calc(${designUnit} * 4px);
		box-sizing: border-box;
		border-radius: calc(${checkboxCornerRadius} * 1px);
		border: calc(${borderWidth} * 1px) solid
			${checkboxBorderColor};
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
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${checkboxForegroundColor};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${checkboxForegroundColor};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${checkboxBackgroundColor};
		border-color: ${checkboxBackgroundColor};
	}
	:host(:enabled) .control:active {
		background: ${checkboxBackgroundColor};
		border-color: ${focusBorder});
	}
	:host(:${focusVisible}) .control {
		border: calc(${focusBorderWidth} * 1px) solid
			${focusBorder});
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
		opacity: ${disabledOpacity};
	}
`;
