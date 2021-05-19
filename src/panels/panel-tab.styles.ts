import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	disabledOpacity,
	focusBorderColor,
	panelTabActiveBorderColor,
	panelTabActiveForegroundColor,
	panelTabForegroundColor,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const PanelTabStyles = css`
	${display('inline-flex')} :host {
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		height: calc(${heightNumber} * 1px);
		padding: calc(${designUnit} * 1px) 0;
		color: ${panelTabForegroundColor};
		fill: currentcolor;
		border-radius: calc(${cornerRadius} * 1px);
		border: solid calc(${borderWidth} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${panelTabActiveForegroundColor};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${panelTabActiveForegroundColor};
		fill: currentcolor;
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: ${disabledOpacity};
	}
	:host([disabled]:hover) {
		color: ${panelTabActiveForegroundColor};
		background: transparent;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${panelTabActiveForegroundColor};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${panelTabActiveForegroundColor};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${panelTabActiveForegroundColor};
		fill: currentcolor;
	}
	:host(:${focusVisible}) {
		outline: none;
		border: solid calc(${borderWidth} * 1px) ${panelTabActiveBorderColor};
		box-shadow: 0 0 0 calc((${focusBorderColor} - ${borderWidth}) * 1px)
			transparent;
	}
	:host(:focus) {
		outline: none;
	}
`;
