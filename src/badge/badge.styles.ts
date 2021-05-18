import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';
import {
	badgeBackgroundColor,
	badgeForegroundColor,
	designUnit,
	typeRampMinus1FontSize,
	typeRampMinus1LineHeight,
} from '../design-tokens';

export const BadgeStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
	}
	.control {
		border-radius: 2px;
		padding: calc(${designUnit} * 0.5px) calc(${designUnit} * 1px);
		color: ${badgeForegroundColor};
		background-color: ${badgeBackgroundColor};
		font-weight: 400;
	}
	:host([circular]) .control {
		border-radius: 100px;
		padding: 0 calc(${designUnit} * 1px);
		height: calc((${heightNumber} - (${designUnit} * 3)) * 1px);
		min-width: calc((${heightNumber} - (${designUnit} * 3)) * 1px);
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
`;
