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
	dropdownBackgroundColor,
	dropdownBorderColor,
	dropdownForegroundColor,
	focusBorderColor,
	focusBorderWidth,
	inputHeight,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const DropdownStyles = css`
	${display('inline-flex')} :host {
		background: ${dropdownBackgroundColor};
		border-radius: ${cornerRadius};
		border: calc(${borderWidth} * 1px) solid ${dropdownBorderColor};
		box-sizing: border-box;
		color: ${dropdownForegroundColor};
		contain: contents;
		height: calc(${inputHeight} * 1px);
		position: relative;
		user-select: none;
		min-width: 250px;
		outline: none;
	}
	.listbox {
		background: ${dropdownBackgroundColor};
		border: calc(${borderWidth} * 1px) solid ${dropdownBorderColor};
		border-radius: ${cornerRadius};
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: calc(var(--max-height) - (${inputHeight} * 1px));
		padding: calc(${designUnit} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		font-size: ${typeRampBaseFontSize};
		font: inherit;
		line-height: ${typeRampBaseLineHeight};
		padding: 0 calc(${designUnit} * 2.25px);
		width: 100%;
	}
	:host(:not([disabled]):hover) {
		background: ${dropdownBackgroundColor};
		border-color: ${dropdownBorderColor};
	}
	:host(:focus) {
		border-color: ${focusBorderColor};
	}
	:host(:${focusVisible}) {
		border-color: ${focusBorderColor};
	}
	:host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		box-shadow: 0 0 0 calc(${focusBorderWidth} * 1px) inset
			${focusBorderColor};
		border-color: ${focusBorderColor};
		background: #094771;
		color: ${dropdownForegroundColor};
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]:hover) {
		background: ${dropdownBackgroundColor};
		color: ${dropdownForegroundColor};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		background: #094771;
		border-color: ${dropdownBorderColor};
		border-radius: ${cornerRadius};
	}
	:host([open]),
	:host([open]) .listbox {
		border: none;
	}
	:host([open]) .control {
		padding: 0 calc((${designUnit} * 2.25px) + 1px);
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']),
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		border-bottom: 0;
		bottom: calc(${inputHeight} * 1px);
	}
	:host([open][position='below']) .listbox {
		border-top: 0;
		top: calc(${inputHeight} * 1px);
	}
	.selected-value {
		font-family: var(--body-font);
		font-size: ${typeRampBaseFontSize};
		flex: 1 1 auto;
		text-align: start;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${designUnit} * 4px);
		min-width: calc(${designUnit} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;
