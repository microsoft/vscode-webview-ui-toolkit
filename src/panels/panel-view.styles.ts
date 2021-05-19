import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	density,
	designUnit,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const PanelViewStyles = css`
	${display('flex')} :host {
		color: #ffffff;
		background-color: transparent;
		border: solid 1px transparent;
		box-sizing: border-box;
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		padding: 10px calc((6 + (${designUnit} * 2 * ${density})) * 1px);
	}
`;
