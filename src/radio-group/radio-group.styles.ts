import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	checkboxForegroundColor,
	designUnit,
	typeRampBaseFontSize,
} from '../design-tokens';

export const RadioGroupStyles = css`
	${display('flex')} :host {
		align-items: flex-start;
		margin: calc(${designUnit} * 1px) 0;
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
		color: ${checkboxForegroundColor};
		font-size: ${typeRampBaseFontSize};
		margin: calc(${designUnit} * 1px) 0;
	}
`;
