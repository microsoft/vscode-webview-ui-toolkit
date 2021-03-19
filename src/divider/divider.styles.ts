import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';

export const DividerStyles = css`
	${display('block')} :host {
		box-sizing: content-box;
		height: 0;
		margin: calc(var(--design-unit) * 1px) 0;
		border: none;
		border-top: solid calc(var(--border-width) * 1px) #454545;
	}
`;
