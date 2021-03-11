import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';

export const RadioGroupStyles = css`
	${display('flex')} :host {
		align-items: flex-start;
		margin: calc(var(--design-unit) * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: var(--checkbox-foreground-color);
		font-size: var(--type-ramp-base-font-size);
		margin: calc(var(--design-unit) * 1px) 0;
	}
`;
