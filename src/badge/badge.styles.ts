// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {
	badgePrimaryBackground,
	badgePrimaryForeground,
	badgeSecondaryBackground,
	badgeSecondaryForeground,
	designUnit,
	fontFamily,
	typeRampMinus1FontSize,
	typeRampMinus1LineHeight,
} from '../design-tokens';

const BaseBadgeStyles = css`
	${display('inline-block')} :host {
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
	}
	.control {
		align-items: center;
		background-color: ${badgePrimaryBackground};
		border-radius: 100px;
		box-sizing: border-box;
		color: ${badgePrimaryForeground};
		display: flex;
		height: calc(${designUnit} * 4px);
		justify-content: center;
		min-width: calc(${designUnit} * 4px);
		padding: 0 calc(${designUnit} * 1px);
	}
`;

const PrimaryBadgeStyles = css`
	:host([appearance='primary']) .control {
		background: ${badgePrimaryBackground};
		color: ${badgePrimaryForeground};
	}
`;

const SecondaryBadgeStyles = css`
	:host([appearance='secondary']) .control {
		background: ${badgeSecondaryBackground};
		color: ${badgeSecondaryForeground};
	}
`;

export const BadgeStyles = css`
	${BaseBadgeStyles}
	${PrimaryBadgeStyles}
	${SecondaryBadgeStyles}
`;
