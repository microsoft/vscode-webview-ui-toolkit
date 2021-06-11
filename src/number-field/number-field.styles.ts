import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	disabledOpacity,
	focusBorder,
	inputBackgroundColor,
	inputBorderColor,
	inputForegroundColor,
	inputHeight,
	inputPlaceholderForegroundColor,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const NumberFieldStyles = css`
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
		color: ${inputForegroundColor};
		background: ${inputBackgroundColor};
		border-radius: calc(${cornerRadius} * 1px);
		border: calc(${borderWidth} * 1px) solid ${inputBorderColor};
		height: calc(${inputHeight} * 1px);
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
		padding: 0 calc(${designUnit} * 2px + 1px);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${inputPlaceholderForegroundColor};
		cursor: pointer;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
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
	.step-up,
	.step-down {
		padding: 0 calc(${designUnit} * 2px);
		height: 50%;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.step-up:before,
	.step-down:before {
		content: '';
		display: block;
		border: 5px solid transparent;
	}
	.step-up:before {
		border-bottom-color: ${inputForegroundColor};
		margin-bottom: 2px;
	}
	.step-down:before {
		border-top-color: ${inputForegroundColor};
		margin-top: 2px;
	}
	:host(:hover:not([disabled])) .root {
		background: ${inputBackgroundColor};
		border-color: ${inputBorderColor};
	}
	:host(:active:not([disabled])) .root {
		background: ${inputBackgroundColor};
		border-color: ${focusBorder};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${focusBorder};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]) {
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		border-color: ${inputBorderColor};
	}
`;
