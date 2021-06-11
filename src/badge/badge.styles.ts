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

export const BaseBadgeStyles = css`
	${display('inline-block')} :host {
		font-family: ${fontFamily};
		font-size: ${typeRampMinus1FontSize};
		line-height: ${typeRampMinus1LineHeight};
		box-sizing: border-box;
	}
	.control {
		border-radius: ${badgeCornerRadius};
		padding: calc(${designUnit} * 0.5px) calc(${designUnit} * 1px);
		color: ${badgePrimaryForeground};
		background-color: ${badgePrimaryBackground};
	}
	:host([circular]) .control {
		border-radius: 100px;
		padding: 0 calc(${designUnit} * 1px);
		height: calc(${designUnit} * 4px);
		min-width: calc(${designUnit} * 4px);
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
`;

export const PrimaryBadgeStyles = css`
	:host([appearance='primary']) .control {
		color: ${badgePrimaryForeground};
		background: ${badgePrimaryBackground};
	}
`;

export const SecondaryBadgeStyles = css`
	:host([appearance='secondary']) .control {
		color: ${badgeSecondaryForeground};
		background: ${badgeSecondaryBackground};
	}
`;

export const BadgeStyles = css`
	${BaseBadgeStyles}
	${PrimaryBadgeStyles}
	${SecondaryBadgeStyles}
`;
