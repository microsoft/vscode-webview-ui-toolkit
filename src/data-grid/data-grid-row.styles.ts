import {css} from '@microsoft/fast-element';

export const DataGridRowStyles = css`
	:host {
		display: grid;
		padding: 1px 0;
		box-sizing: border-box;
		width: 100%;
		border-bottom: calc(var(--outline-width) * 1px) solid
			var(--neutral-divider-rest);
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: #252526;
		position: sticky;
		top: 0;
	}
`;
