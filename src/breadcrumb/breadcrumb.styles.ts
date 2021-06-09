import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	fontFamily,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const BreadcrumbStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
	}
	.list {
		display: flex;
	}
`;