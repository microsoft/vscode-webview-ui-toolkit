/**
 * Defines the properties in the FAST Design System
 * @public
 */
export interface DesignSystem {
	/**
	 * The primary colors.
	 */
	primaryBackgroundColor: string;
	primaryForegroundColor: string;
	primaryHoverBackgroundColor: string;

	/**
	 * The secondary colors.
	 */
	secondaryBackgroundColor: string;
	secondaryForegroundColor: string;
	secondaryHoverBackgroundColor: string;

	/**
	 * Text link colors.
	 */
	textLinkForegroundColor: string;

	/**
	 * The corner radius applied to controls.
	 */
	cornerRadius: number;

	/**
	 * The opacity of a disabled control.
	 */
	disabledOpacity: number;

	/**
	 * The width of the standard outline applied to outline components in pixels.
	 */
	outlineWidth: number;

	/**
	 * The width of the standard focus outline in pixels.
	 */
	focusOutlineWidth: number;

	focusBorder: string;

	/**
	 * The grid-unit that UI dimensions are derived from in pixels.
	 */
	designUnit: number;
}

/**
 * The default values for {@link DesignSystem}
 * @public
 */
export const DesignSystemDefaults: DesignSystem = {
	/**
	 * The primary color defaults.
	 */
	primaryBackgroundColor: '#0e639c',
	primaryForegroundColor: '#ffffff',
	primaryHoverBackgroundColor: '#1177bb',

	/**
	 * The secondary color defaults.
	 */
	secondaryBackgroundColor: '#3a3d41',
	secondaryForegroundColor: '#ffffff',
	secondaryHoverBackgroundColor: '#45494e',

	/**
	 * Text link defaults.
	 */
	textLinkForegroundColor: '#3794ff',

	/**
	 * The corner radius default.
	 */
	cornerRadius: 0,

	/**
	 * The corner radius default.
	 */
	disabledOpacity: 0.4,

	/**
	 * The outline defaults.
	 */
	outlineWidth: 1,
	focusOutlineWidth: 1,
	focusBorder: "#007fd4",

	designUnit: 4,
};
