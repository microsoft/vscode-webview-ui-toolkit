import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';

export const PanelsStyles = css`
	${display('grid')} :host {
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		color: #a0a0a0;
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(var(--design-unit) * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(var(--design-unit) * 1px) calc(var(--design-unit) * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: 1px;
		justify-self: center;
		background: #ffffff;
		margin: 0;
		border-radius: calc(var(--corner-radius) * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`;
