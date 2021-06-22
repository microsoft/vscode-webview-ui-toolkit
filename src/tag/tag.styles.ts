// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	badgeSecondaryBackground,
	badgeSecondaryForeground,
	designUnit,
	fontFamily,
	tagCornerRadius,
	typeRampMinus1FontSize,
	typeRampMinus1LineHeight,
} from '../design-tokens';

export const TagStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
	}
	.control {
		background-color: ${badgeSecondaryBackground};
		border-radius: ${tagCornerRadius};
		color: ${badgeSecondaryForeground};
		padding: calc(${designUnit} * 0.5px) calc(${designUnit} * 1px);
		text-transform: uppercase;
	}
`;
