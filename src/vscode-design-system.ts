/**
 * Defines the properties in the FAST Design System
 * @public
 */
export interface DesignSystem {
	accentBaseColor: string;
	accentHoverColor: string;
	cornerRadius: number;
	/* Insert other design tokens */
}

/**
 * The default values for {@link DesignSystem}
 * @public
 */
export const DesignSystemDefaults: DesignSystem = {
	accentBaseColor: '#0e639c',
	accentHoverColor: '#007acc',
	cornerRadius: 0,
	/* Insert the default values for other design tokens */
};
