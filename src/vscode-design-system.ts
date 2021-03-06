import {Direction} from '@microsoft/fast-web-utilities';

/**
 * Defines the properties in the VSCode Design System
 * @public
 */
export interface DesignSystem {
	/**
	 * Global design token defaults.
	 */
	baseHeightMultiplier: number;
	baseHorizontalSpacingMultiplier: number;
	borderWidth: number;
	cornerRadius: number;
	density: number;
	designUnit: number;
	direction: Direction;
	disabledOpacity: number;
	focusBorderColor: string;
	focusBorderWidth: number;

	/**
	 * Type-ramp font-size and line-height design tokens.
	 */
	typeRampMinus2FontSize: string;
	typeRampMinus2LineHeight: string;
	typeRampMinus1FontSize: string;
	typeRampMinus1LineHeight: string;
	typeRampBaseFontSize: string;
	typeRampBaseLineHeight: string;
	typeRampPlus1FontSize: string;
	typeRampPlus1LineHeight: string;
	typeRampPlus2FontSize: string;
	typeRampPlus2LineHeight: string;
	typeRampPlus3FontSize: string;
	typeRampPlus3LineHeight: string;
	typeRampPlus4FontSize: string;
	typeRampPlus4LineHeight: string;
	typeRampPlus5FontSize: string;
	typeRampPlus5LineHeight: string;
	typeRampPlus6FontSize: string;
	typeRampPlus6LineHeight: string;

	/**
	 * Button design tokens.
	 */
	buttonPrimaryBackgroundColor: string;
	buttonPrimaryForegroundColor: string;
	buttonPrimaryHoverBackgroundColor: string;
	buttonSecondaryBackgroundColor: string;
	buttonSecondaryForegroundColor: string;
	buttonSecondaryHoverBackgroundColor: string;

	/**
	 * Text link colors.
	 */
	textLinkForegroundColor: string;

	/**
	 * Checkbox design tokens.
	 */
	checkboxBackgroundColor: string;
	checkboxForegroundColor: string;
	checkboxBorderColor: string;
	checkboxCornerRadius: number;

	/**
	 * Breadcrumb Item design token.
	 */
	breadcrumbItemBackgroundColor: string;
	breadcrumbItemForegroundColor: string;
	breadcrumbItemForegroundHoverColor: string;

	/**
	 * Select design tokens.
	 */
	selectBackgroundColor: string;
	selectForegroundColor: string;
	selectBorderColor: string;
	selectCornerRadius: number;
}

/**
 * The default values for {@link DesignSystem}
 * @public
 */
export const DesignSystemDefaults: DesignSystem = {
	/**
	 * Global design token defaults.
	 */
	baseHeightMultiplier: 7,
	baseHorizontalSpacingMultiplier: 3,
	borderWidth: 1,
	cornerRadius: 0,
	density: 0,
	designUnit: 4,
	direction: Direction.ltr,
	disabledOpacity: 0.4,
	focusBorderColor: '#007fd4',
	focusBorderWidth: 1,

	/**
	 * Type-ramp font-size and line-height defaults.
	 */
	typeRampMinus2FontSize: '10px',
	typeRampMinus2LineHeight: '16px',
	typeRampMinus1FontSize: '12px',
	typeRampMinus1LineHeight: '16px',
	typeRampBaseFontSize: '14px',
	typeRampBaseLineHeight: '20px',
	typeRampPlus1FontSize: '16px',
	typeRampPlus1LineHeight: '24px',
	typeRampPlus2FontSize: '20px',
	typeRampPlus2LineHeight: '28px',
	typeRampPlus3FontSize: '28px',
	typeRampPlus3LineHeight: '36px',
	typeRampPlus4FontSize: '34px',
	typeRampPlus4LineHeight: '44px',
	typeRampPlus5FontSize: '46px',
	typeRampPlus5LineHeight: '56px',
	typeRampPlus6FontSize: '60px',
	typeRampPlus6LineHeight: '72px',

	/**
	 * Button design token defaults.
	 */
	buttonPrimaryBackgroundColor: '#0e639c',
	buttonPrimaryForegroundColor: '#ffffff',
	buttonPrimaryHoverBackgroundColor: '#1177bb',
	buttonSecondaryBackgroundColor: '#3a3d41',
	buttonSecondaryForegroundColor: '#ffffff',
	buttonSecondaryHoverBackgroundColor: '#45494e',

	/**
	 * Text link defaults.
	 */
	textLinkForegroundColor: '#3794ff',

	/**
	 * Checkbox design token defaults.
	 */
	checkboxBackgroundColor: '#3c3c3c',
	checkboxForegroundColor: '#f0f0f0',
	checkboxBorderColor: '#3c3c3c',
	checkboxCornerRadius: 3,

	/**
	 * Breadcrumb Item design token defaults.
	 */
	breadcrumbItemBackgroundColor: '#1e1e1e',
	breadcrumbItemForegroundColor: '#cccccccc',
	breadcrumbItemForegroundHoverColor: '#e0e0e0',

	/**
	 * Select design token defaults.
	 */
	selectBackgroundColor: '#3c3c3c',
	selectForegroundColor: '#f0f0f0',
	selectBorderColor: '#3c3c3c',
	selectCornerRadius: 5,
};
