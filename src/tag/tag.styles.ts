// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	badgeCornerRadius,
	badgePrimaryBackground,
	badgePrimaryForeground,
	badgeSecondaryBackground,
	badgeSecondaryForeground,
	designUnit,
	fontFamily,
	typeRampMinus1FontSize,
	typeRampMinus1LineHeight,
} from '../design-tokens';

const BaseTagStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
	}
	.control {
		background-color: ${badgePrimaryBackground};
		border-radius: ${badgeCornerRadius};
		color: ${badgePrimaryForeground};
		padding: calc(${designUnit} * 0.5px) calc(${designUnit} * 1px);
	}
`;

const PrimaryTagStyles = css`
	:host([appearance='primary']) .control {
		background: ${badgePrimaryBackground};
		color: ${badgePrimaryForeground};
	}
`;

const SecondaryTagStyles = css`
	:host([appearance='secondary']) .control {
		background: ${badgeSecondaryBackground};
		color: ${badgeSecondaryForeground};
	}
`;

export const TagStyles = css`
	${BaseTagStyles}
	${PrimaryTagStyles}
	${SecondaryTagStyles}
`;
