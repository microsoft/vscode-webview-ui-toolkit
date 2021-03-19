import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';

export const TabsStyles = css`
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
		transition: transform 0.2s ease-in-out;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
	:host([orientation='vertical']) {
		grid-template-rows: auto 1fr auto;
		grid-template-columns: auto 1fr;
	}
	:host([orientation='vertical']) .tablist {
		grid-row-start: 2;
		grid-row-end: 2;
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: auto 1fr;
		column-gap: 0;
		position: relative;
		width: max-content;
		justify-self: end;
		width: 100%;
		padding: 0 calc(var(--design-unit) * 4px) 0 0;
	}
	:host([orientation='vertical']) .tabpanel {
		grid-column: 2;
		grid-row-start: 1;
		grid-row-end: 4;
	}
	:host([orientation='vertical']) vscode-tab-panel {
		padding: 0 calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
	}
	:host([orientation='vertical']) .end {
		grid-row: 3;
	}
	:host([orientation='vertical']) .activeIndicator {
		grid-column: 1;
		grid-row: 1;
		width: 1px;
		height: 100%;
		margin-inline-end: 10px;
		align-self: center;
		background: #ffffff;
		margin-top: 0;
		border-radius: calc(var(--corner-radius) * 1px);
	}
	:host([orientation='vertical']) .activeIndicatorTransition {
		transition: transform 0.2s linear;
	}
`;
