/**
 * Defines the properties in the FAST Design System
 * @public
 */
export interface DesignSystem {
	/**
	 * The accent colors.
	 */
	accentBaseColor: string;
	accentForegroundColor: string;
	accentHoverColor: string;

	/**
	 * The corner radius applied to controls.
	 */
	cornerRadius: number;

	/**
	 * The width of the standard outline applied to outline components in pixels.
	 */
	outlineWidth: number;

	/**
	 * The width of the standard focus outline in pixels.
	 */
	focusOutlineWidth: number;

	/**
	 * The opacity of a disabled control.
	 */
	disabledOpacity: number;
}

/**
 * The default values for {@link DesignSystem}
 * @public
 */
export const DesignSystemDefaults: DesignSystem = {
	accentBaseColor: '#0e639c',
	accentForegroundColor: '#ffffff',
	accentHoverColor: '#1177bb',
	cornerRadius: 0,
	disabledOpacity: 0.4,
	outlineWidth: 1,
	focusOutlineWidth: 1,
};
