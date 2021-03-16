import {css} from '@microsoft/fast-element';

export const DataGridRowStyles = css`
	:host {
		display: grid;
		padding: 1px 0;
		box-sizing: border-box;
		width: 100%;
		background: #1e1e1e;
	}
	:host(:nth-child(odd)) {
		background: #252526;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: #252526;
		position: sticky;
		top: 0;
	}
`;
