// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	badgeBackground,
	badgeForeground,
	designUnit,
	fontFamily,
	typeRampMinus1FontSize,
	typeRampMinus1LineHeight,
} from '../design-tokens';

export const BadgeStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
	}
	.control {
		align-items: center;
		background-color: ${badgeBackground};
		border-radius: 100px;
		box-sizing: border-box;
		color: ${badgeForeground};
		display: flex;
		height: calc(${designUnit} * 4px);
		justify-content: center;
		min-width: calc(${designUnit} * 4px);
		padding: 0 calc(${designUnit} * 1px);
	}
`;
