import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {typeRampBaseFontSize, typeRampBaseLineHeight} from '../design-tokens';

export const BreadcrumbStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: var(--body-font);
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.list {
		display: flex;
	}
`;
