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
	inputPlaceholderForegroundColor,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const TextAreaStyles = css`
	${display('inline-block')} :host {
		font-family: var(--body-font);
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${inputForegroundColor};
		background: ${inputBackgroundColor};
		border-radius: calc(${cornerRadius} * 1px);
		border: calc(${borderWidth} * 1px) solid ${inputBorderColor};
		font: inherit;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: calc(${designUnit} * 2px + 1px);
		width: 100%;
		resize: none;
	}
	.control:hover:enabled {
		background: ${inputBackgroundColor};
		border-color: ${inputBorderColor};
	}
	.control:active:enabled {
		background: ${inputBackgroundColor};
		border-color: ${focusBorder};
	}
	.control:hover,
    .control:${focusVisible},
    .control:disabled,
    .control:active {
		outline: none;
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${focusBorder};
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
