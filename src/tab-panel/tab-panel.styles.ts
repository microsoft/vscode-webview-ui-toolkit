import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';

export const TabPanelStyles = css`
	${display('flex')} :host {
		color: #ffffff;
		background-color: transparent;
		border: solid 1px transparent;
		box-sizing: border-box;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		padding: 10px
			calc((6 + (var(--design-unit) * 2 * var(--density))) * 1px);
	}
`;
