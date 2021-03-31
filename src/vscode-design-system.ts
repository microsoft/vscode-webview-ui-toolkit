/**
 * Defines the properties in the VSCode Design System
 * @public
 */
export interface VSCodeDesignSystem {
	/**
	 * Global design token defaults.
	 */
	baseHeightMultiplier: number;
	baseHorizontalSpacingMultiplier: number;
	borderWidth: number;
	cornerRadius: number;
	density: number;
	designUnit: number;
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
	buttonInstallBackgroundColor: string;
	buttonInstallForegroundColor: string;
	buttonInstallHoverBackgroundColor: string;

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

	/**
	 * Option design tokens.
	 */
	optionBackgroundFocusColor: string;

	/**
	 * Badge design tokens.
	 */
	badgeBackgroundColor: string;
	badgeForegroundColor: string;

	/**
	 * Text Field & Area design tokens.
	 */
	inputBackgroundColor: string;
	inputForegroundColor: string;
	inputPlaceholderForegroundColor: string;
	inputBorderColor: string;

	/**
	 * Progress Bar & Ring design tokens.
	 */
	progressBackgroundColor: string;

	/**
	 * Tabs design tokens.
	 */
	tabPanelBackgroundColor: string;
	tabPanelBorderColor: string;
	tabForegroundColor: string;
	tabActiveForegroundColor: string;
	tabActiveBorderColor: string;
}

/**
 * The default values for {@link VSCodeDesignSystem}
 * @public
 */
export const VSCodeDesignSystemDefaults: VSCodeDesignSystem = {
	/**
	 * Global design token defaults.
	 */
	baseHeightMultiplier: 7,
	baseHorizontalSpacingMultiplier: 3,
	borderWidth: 1,
	cornerRadius: 0,
	density: 0,
	designUnit: 4,
	disabledOpacity: 0.4,
	focusBorderColor: '#007fd4',
	focusBorderWidth: 1,

	/**
	 * Type-ramp font-size and line-height defaults.
	 */
	typeRampMinus2FontSize: '9px',
	typeRampMinus2LineHeight: '16px',
	typeRampMinus1FontSize: '11px',
	typeRampMinus1LineHeight: '16px',
	typeRampBaseFontSize: '13px',
	typeRampBaseLineHeight: 'normal',
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
	buttonInstallBackgroundColor: '#0e639c',
	buttonInstallForegroundColor: '#ffffff',
	buttonInstallHoverBackgroundColor: '#1177bb',

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

	/**
	 * Option design token defaults.
	 */
	optionBackgroundFocusColor: '#062f4a',

	/**
	 * Badge design token defaults.
	 */
	badgeBackgroundColor: '#4d4d4d',
	badgeForegroundColor: '#ffffff',

	/**
	 * Text Field & Area design token defaults.
	 */
	inputBackgroundColor: '#3c3c3c',
	inputForegroundColor: '#cccccc',
	inputPlaceholderForegroundColor: '#cccccc',
	inputBorderColor: '#3c3c3c',

	/**
	 * Progress Bar & Ring design token defaults.
	 */
	progressBackgroundColor: '#0e70c0',

	/**
	 * Tabs design tokens.
	 */
	tabPanelBackgroundColor: '#1e1e1e',
	tabPanelBorderColor: '#80808059',
	tabForegroundColor: '#e7e7e799',
	tabActiveForegroundColor: '#e7e7e7',
	tabActiveBorderColor: '#e7e7e7',
};
