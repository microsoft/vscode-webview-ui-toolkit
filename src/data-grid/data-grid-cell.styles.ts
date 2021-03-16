import {css} from '@microsoft/fast-element';
import {focusVisible} from '@microsoft/fast-foundation';

export const DataGridCellStyles = css`
	:host {
		padding: calc(var(--design-unit) * 1px) calc(var(--design-unit) * 3px);
		color: #cccccc;
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		font-weight: 400;
		border: solid calc(var(--border-width) * 1px) transparent;
		overflow: hidden;
		white-space: nowrap;
		border-radius: calc(var(--corner-radius) * 1px);
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${focusVisible}) {
		border: solid calc(var(--border-width) * 1px) var(--focus-border-width);
		color: #cccccc;
	}
`;
