import {css} from '@microsoft/fast-element';
import {focusVisible} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const DataGridCellStyles = css`
	:host {
		padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
		color: #cccccc;
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		font-weight: 400;
		border: solid calc(${borderWidth} * 1px) transparent;
		overflow: hidden;
		white-space: nowrap;
		border-radius: calc(${cornerRadius} * 1px);
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${focusVisible}) {
		border: solid calc(${borderWidth} * 1px) ${borderWidth};
		color: #cccccc;
	}
`;
