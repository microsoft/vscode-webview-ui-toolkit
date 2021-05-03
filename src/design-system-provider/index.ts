import {
	defineDesignSystemProvider,
	designSystemProperty,
	DesignSystemProvider,
	DesignSystemProviderTemplate as template,
} from '@microsoft/fast-foundation';
import {nullableNumberConverter} from '@microsoft/fast-element';
import {
	VSCodeDesignSystem,
	VSCodeDesignSystemDefaults,
} from '../vscode-design-system';
import {DesignSystemProviderStyles as styles} from './design-system-provider.styles';

/**
 * The VS Code DesignSystemProvider element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.designsystemprovider/ | DesignSystemProvider} and
 * {@link https://www.fast.design/docs/api/fast-foundation.designsystemprovidertemplate/ | DesignSystemProviderTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-design-system-provider>`
 *
 * @public
 */
@defineDesignSystemProvider({
	name: 'vscode-design-system-provider',
	template,
	styles,
})
export class VSCodeDesignSystemProvider
	extends DesignSystemProvider
	implements VSCodeDesignSystem {
	// ------------------------ Global Design Tokens ------------------------ //

	/**
	 * The number of designUnits used for component height at the base density.
	 *
	 * @remarks
	 * HTML Attribute: `base-height-multiplier`
	 *
	 * CSS Custom Property: `--base-height-multiplier`
	 */
	@designSystemProperty({
		attribute: 'base-height-multiplier',
		cssCustomProperty: 'base-height-multiplier',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.baseHeightMultiplier,
	})
	public baseHeightMultiplier: number;

	/**
	 * The number of designUnits used for horizontal spacing at the base density.
	 *
	 * @remarks
	 * HTML Attribute: `base-horizontal-spacing-multiplier`
	 *
	 * CSS Custom Property: `--base-horizontal-spacing-multiplier`
	 */
	@designSystemProperty({
		attribute: 'base-horizontal-spacing-multiplier',
		cssCustomProperty: 'base-horizontal-spacing-multiplier',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.baseHorizontalSpacingMultiplier,
	})
	public baseHorizontalSpacingMultiplier: number;

	/**
	 * The width of the standard component border in pixels.
	 *
	 * @remarks
	 * HTML Attribute: `border-width`
	 *
	 * CSS Custom Property: `--border-width`
	 */
	@designSystemProperty({
		attribute: 'border-width',
		cssCustomProperty: 'border-width',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.borderWidth,
	})
	public borderWidth: number;

	/**
	 * The corner radius applied to controls.
	 *
	 * _Exception: Checkbox corner radii are defined with the `checkboxCornerRadius` property_.
	 *
	 * @remarks
	 * HTML Attribute: `corner-radius`
	 *
	 * CSS Custom Property: `--corner-radius`
	 */
	@designSystemProperty({
		attribute: 'corner-radius',
		cssCustomProperty: 'corner-radius',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.cornerRadius,
	})
	public cornerRadius: number;

	/**
	 * The density offset, used with designUnit to calculate height and spacing.
	 *
	 * @remarks
	 * HTML Attribute: `density`
	 *
	 * CSS Custom Property: `--density`
	 */
	@designSystemProperty({
		attribute: 'density',
		cssCustomProperty: 'density',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.density,
	})
	public density: number;

	/**
	 * The grid-unit that UI dimensions are derived from in pixels.
	 *
	 * @remarks
	 * HTML Attribute: `design-unit`
	 *
	 * CSS Custom Property: `--design-unit`
	 */
	@designSystemProperty({
		attribute: 'design-unit',
		cssCustomProperty: 'design-unit',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.designUnit,
	})
	public designUnit: number;

	/**
	 * The opacity of a disabled control.
	 *
	 * @remarks
	 * HTML Attribute: `disabled-opacity`
	 *
	 * CSS Custom Property: `--disabled-opacity`
	 */
	@designSystemProperty({
		attribute: 'disabled-opacity',
		cssCustomProperty: 'disabled-opacity',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.disabledOpacity,
	})
	public disabledOpacity: number;

	/**
	 * The color of the standard focus border.
	 *
	 * @remarks
	 * HTML Attribute: `focus-border-color`
	 *
	 * CSS Custom Property: `--focus-border-color`
	 */
	@designSystemProperty({
		attribute: 'focus-border-color',
		cssCustomProperty: 'focus-border-color',
		default: VSCodeDesignSystemDefaults.focusBorderColor,
	})
	public focusBorderColor: string;

	/**
	 * The width of the standard focus border in pixels.
	 *
	 * @remarks
	 * HTML Attribute: `focus-border-width`
	 *
	 * CSS Custom Property: `--focus-border-width`
	 */
	@designSystemProperty({
		attribute: 'focus-border-width',
		cssCustomProperty: 'focus-border-width',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.focusBorderWidth,
	})
	public focusBorderWidth: number;

	// ------------------------ Type Ramp Design Tokens ------------------------ //

	/**
	 * The font-size two steps below the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-minus-2-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-minus-2-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-minus-2-font-size',
		cssCustomProperty: 'type-ramp-minus-2-font-size',
		default: VSCodeDesignSystemDefaults.typeRampMinus2FontSize,
	})
	public typeRampMinus2FontSize: string;

	/**
	 * The line-height two steps below the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-minus-2-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-minus-2-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-minus-2-line-height',
		cssCustomProperty: 'type-ramp-minus-2-line-height',
		default: VSCodeDesignSystemDefaults.typeRampMinus2LineHeight,
	})
	public typeRampMinus2LineHeight: string;

	/**
	 * The font-size one step below the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-minus-1-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-minus-1-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-minus-1-font-size',
		cssCustomProperty: 'type-ramp-minus-1-font-size',
		default: VSCodeDesignSystemDefaults.typeRampMinus1FontSize,
	})
	public typeRampMinus1FontSize: string;

	/**
	 * The line-height one step below the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-minus-1-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-minus-1-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-minus-1-line-height',
		cssCustomProperty: 'type-ramp-minus-1-line-height',
		default: VSCodeDesignSystemDefaults.typeRampMinus1LineHeight,
	})
	public typeRampMinus1LineHeight: string;

	/**
	 * The base font-size of the relative type-ramp scale.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-base-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-base-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-base-font-size',
		cssCustomProperty: 'type-ramp-base-font-size',
		default: VSCodeDesignSystemDefaults.typeRampBaseFontSize,
	})
	public typeRampBaseFontSize: string;

	/**
	 * The base line-height of the relative type-ramp scale.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-base-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-base-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-base-line-height',
		cssCustomProperty: 'type-ramp-base-line-height',
		default: VSCodeDesignSystemDefaults.typeRampBaseLineHeight,
	})
	public typeRampBaseLineHeight: string;

	/**
	 * The font-size one step above the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-1-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-plus-1-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-1-font-size',
		cssCustomProperty: 'type-ramp-plus-1-font-size',
		default: VSCodeDesignSystemDefaults.typeRampPlus1FontSize,
	})
	public typeRampPlus1FontSize: string;

	/**
	 * The line-height one step above the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-1-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-plus-1-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-1-line-height',
		cssCustomProperty: 'type-ramp-plus-1-line-height',
		default: VSCodeDesignSystemDefaults.typeRampPlus1LineHeight,
	})
	public typeRampPlus1LineHeight: string;

	/**
	 * The font-size two steps above the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-2-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-plus-2-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-2-font-size',
		cssCustomProperty: 'type-ramp-plus-2-font-size',
		default: VSCodeDesignSystemDefaults.typeRampPlus2FontSize,
	})
	public typeRampPlus2FontSize: string;

	/**
	 * The line-height two steps above the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-2-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-plus-2-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-2-line-height',
		cssCustomProperty: 'type-ramp-plus-2-line-height',
		default: VSCodeDesignSystemDefaults.typeRampPlus2LineHeight,
	})
	public typeRampPlus2LineHeight: string;

	/**
	 * The font-size three steps above the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-3-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-plus-3-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-3-font-size',
		cssCustomProperty: 'type-ramp-plus-3-font-size',
		default: VSCodeDesignSystemDefaults.typeRampPlus3FontSize,
	})
	public typeRampPlus3FontSize: string;

	/**
	 * The line-height three steps above the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-3-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-plus-3-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-3-line-height',
		cssCustomProperty: 'type-ramp-plus-3-line-height',
		default: VSCodeDesignSystemDefaults.typeRampPlus3LineHeight,
	})
	public typeRampPlus3LineHeight: string;

	/**
	 * The font-size four steps above the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-4-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-plus-4-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-4-font-size',
		cssCustomProperty: 'type-ramp-plus-4-font-size',
		default: VSCodeDesignSystemDefaults.typeRampPlus4FontSize,
	})
	public typeRampPlus4FontSize: string;

	/**
	 * The line-height four steps above the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-4-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-plus-4-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-4-line-height',
		cssCustomProperty: 'type-ramp-plus-4-line-height',
		default: VSCodeDesignSystemDefaults.typeRampPlus4LineHeight,
	})
	public typeRampPlus4LineHeight: string;

	/**
	 * The font-size five steps above the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-5-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-plus-5-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-5-font-size',
		cssCustomProperty: 'type-ramp-plus-5-font-size',
		default: VSCodeDesignSystemDefaults.typeRampPlus5FontSize,
	})
	public typeRampPlus5FontSize: string;

	/**
	 * The line-height five steps above the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-5-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-plus-5-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-5-line-height',
		cssCustomProperty: 'type-ramp-plus-5-line-height',
		default: VSCodeDesignSystemDefaults.typeRampPlus5LineHeight,
	})
	public typeRampPlus5LineHeight: string;

	/**
	 * The font-size six steps above the base font-size.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-6-font-size`
	 *
	 * CSS Custom Property: `--type-ramp-plus-6-font-size`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-6-font-size',
		cssCustomProperty: 'type-ramp-plus-6-font-size',
		default: VSCodeDesignSystemDefaults.typeRampPlus6FontSize,
	})
	public typeRampPlus6FontSize: string;

	/**
	 * The line-height six steps above the base line-height.
	 *
	 * @remarks
	 * HTML Attribute: `type-ramp-plus-6-line-height`
	 *
	 * CSS Custom Property: `--type-ramp-plus-6-line-height`
	 */
	@designSystemProperty({
		attribute: 'type-ramp-plus-6-line-height',
		cssCustomProperty: 'type-ramp-plus-6-line-height',
		default: VSCodeDesignSystemDefaults.typeRampPlus6LineHeight,
	})
	public typeRampPlus6LineHeight: string;

	// ------------------------ Button Design Tokens ------------------------ //

	/**
	 * The primary background color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-primary-background-color`
	 *
	 * CSS Custom Property: `--button-primary-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-primary-background-color',
		cssCustomProperty: 'button-primary-background-color',
		default: VSCodeDesignSystemDefaults.buttonPrimaryBackgroundColor,
	})
	public buttonPrimaryBackgroundColor: string;

	/**
	 * The primary foreground color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-primary-foreground-color`
	 *
	 * CSS Custom Property: `--button-primary-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'button-primary-foreground-color',
		cssCustomProperty: 'button-primary-foreground-color',
		default: VSCodeDesignSystemDefaults.buttonPrimaryForegroundColor,
	})
	public buttonPrimaryForegroundColor: string;

	/**
	 * The primary hover background color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-primary-hover-background-color`
	 *
	 * CSS Custom Property: `--button-primary-hover-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-primary-hover-background-color',
		cssCustomProperty: 'button-primary-hover-background-color',
		default: VSCodeDesignSystemDefaults.buttonPrimaryHoverBackgroundColor,
	})
	public buttonPrimaryHoverBackgroundColor: string;

	/**
	 * The secondary background color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-secondary-background-color`
	 *
	 * CSS Custom Property: `--button-secondary-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-secondary-background-color',
		cssCustomProperty: 'button-secondary-background-color',
		default: VSCodeDesignSystemDefaults.buttonSecondaryBackgroundColor,
	})
	public buttonSecondaryBackgroundColor: string;

	/**
	 * The secondary foreground color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-secondary-foreground-color`
	 *
	 * CSS Custom Property: `--button-secondary-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'button-secondary-foreground-color',
		cssCustomProperty: 'button-secondary-foreground-color',
		default: VSCodeDesignSystemDefaults.buttonSecondaryForegroundColor,
	})
	public buttonSecondaryForegroundColor: string;

	/**
	 * The secondary hover background color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-secondary-hover-background-color`
	 *
	 * CSS Custom Property: `--button-secondary-hover-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-secondary-hover-background-color',
		cssCustomProperty: 'button-secondary-hover-background-color',
		default: VSCodeDesignSystemDefaults.buttonSecondaryHoverBackgroundColor,
	})
	public buttonSecondaryHoverBackgroundColor: string;

	/**
	 * The install background color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-install-background-color`
	 *
	 * CSS Custom Property: `--button-install-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-install-background-color',
		cssCustomProperty: 'button-install-background-color',
		default: VSCodeDesignSystemDefaults.buttonInstallBackgroundColor,
	})
	public buttonInstallBackgroundColor: string;

	/**
	 * The install foreground color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-install-foreground-color`
	 *
	 * CSS Custom Property: `--button-install-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'button-install-foreground-color',
		cssCustomProperty: 'button-install-foreground-color',
		default: VSCodeDesignSystemDefaults.buttonInstallForegroundColor,
	})
	public buttonInstallForegroundColor: string;

	/**
	 * The install hover background color of a VS Code button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-install-hover-background-color`
	 *
	 * CSS Custom Property: `--button-install-hover-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-install-hover-background-color',
		cssCustomProperty: 'button-install-hover-background-color',
		default: VSCodeDesignSystemDefaults.buttonInstallHoverBackgroundColor,
	})
	public buttonInstallHoverBackgroundColor: string;

	// ------------------------ Text Link Design Tokens ------------------------ //

	/**
	 * The foreground color of a text link.
	 *
	 * @remarks
	 * HTML Attribute: `text-link-foreground-color`
	 *
	 * CSS Custom Property: `--text-link-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'text-link-foreground-color',
		cssCustomProperty: 'text-link-foreground-color',
		default: VSCodeDesignSystemDefaults.textLinkForegroundColor,
	})
	public textLinkForegroundColor: string;

	// ------------------------ Checkbox Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code checkbox component.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-background-color`
	 *
	 * CSS Custom Property: `--checkbox-background-color`
	 */
	@designSystemProperty({
		attribute: 'checkbox-background-color',
		cssCustomProperty: 'checkbox-background-color',
		default: VSCodeDesignSystemDefaults.checkboxBackgroundColor,
	})
	public checkboxBackgroundColor: string;

	/**
	 * The foreground color of a VS Code checkbox component.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-foreground-color`
	 *
	 * CSS Custom Property: `--checkbox-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'checkbox-foreground-color',
		cssCustomProperty: 'checkbox-foreground-color',
		default: VSCodeDesignSystemDefaults.checkboxForegroundColor,
	})
	public checkboxForegroundColor: string;

	/**
	 * The border color of a VS Code checkbox component.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-border-color`
	 *
	 * CSS Custom Property: `--checkbox-border-color`
	 */
	@designSystemProperty({
		attribute: 'checkbox-border-color',
		cssCustomProperty: 'checkbox-border-color',
		default: VSCodeDesignSystemDefaults.checkboxBorderColor,
	})
	public checkboxBorderColor: string;

	/**
	 * The corner radius applied to checkbox controls.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-corner-radius`
	 *
	 * CSS Custom Property: `--checkbox-corner-radius`
	 */
	@designSystemProperty({
		attribute: 'checkbox-corner-radius',
		cssCustomProperty: 'checkbox-corner-radius',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.checkboxCornerRadius,
	})
	public checkboxCornerRadius: number;

	// ------------------------ Breadcrumb Item Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code breadcrumb item component.
	 *
	 * @remarks
	 * HTML Attribute: `breadcrumb-item-background-color`
	 *
	 * CSS Custom Property: `--breadcrumb-item-background-color`
	 */
	@designSystemProperty({
		attribute: 'breadcrumb-item-background-color',
		cssCustomProperty: 'breadcrumb-item-background-color',
		default: VSCodeDesignSystemDefaults.breadcrumbItemBackgroundColor,
	})
	public breadcrumbItemBackgroundColor: string;

	/**
	 * The foreground color of a VS Code breadcrumb item component.
	 *
	 * @remarks
	 * HTML Attribute: `breadcrumb-item-foreground-color`
	 *
	 * CSS Custom Property: `--breadcrumb-item-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'breadcrumb-item-foreground-color',
		cssCustomProperty: 'breadcrumb-item-foreground-color',
		default: VSCodeDesignSystemDefaults.breadcrumbItemForegroundColor,
	})
	public breadcrumbItemForegroundColor: string;

	/**
	 * The foreground hover color of a VS Code breadcrumb item component.
	 *
	 * @remarks
	 * HTML Attribute: `breadcrumb-item-foreground-hover-color`
	 *
	 * CSS Custom Property: `--breadcrumb-item-foreground-hover-color`
	 */
	@designSystemProperty({
		attribute: 'breadcrumb-item-foreground-hover-color',
		cssCustomProperty: 'breadcrumb-item-foreground-hover-color',
		default: VSCodeDesignSystemDefaults.breadcrumbItemForegroundHoverColor,
	})
	public breadcrumbItemForegroundHoverColor: string;

	// ------------------------ Dropdown Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code dropdown component.
	 *
	 * @remarks
	 * HTML Attribute: `dropdown-background-color`
	 *
	 * CSS Custom Property: `--dropdown-background-color`
	 */
	@designSystemProperty({
		attribute: 'dropdown-background-color',
		cssCustomProperty: 'dropdown-background-color',
		default: VSCodeDesignSystemDefaults.dropdownBackgroundColor,
	})
	public dropdownBackgroundColor: string;

	/**
	 * The foreground color of a VS Code dropdown component.
	 *
	 * @remarks
	 * HTML Attribute: `dropdown-foreground-color`
	 *
	 * CSS Custom Property: `--dropdown-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'dropdown-foreground-color',
		cssCustomProperty: 'dropdown-foreground-color',
		default: VSCodeDesignSystemDefaults.dropdownForegroundColor,
	})
	public dropdownForegroundColor: string;

	/**
	 * The border color of a VS Code dropdown component.
	 *
	 * @remarks
	 * HTML Attribute: `dropdown-border-color`
	 *
	 * CSS Custom Property: `--dropdown-border-color`
	 */
	@designSystemProperty({
		attribute: 'dropdown-border-color',
		cssCustomProperty: 'dropdown-border-color',
		default: VSCodeDesignSystemDefaults.dropdownBorderColor,
	})
	public dropdownBorderColor: string;

	/**
	 * The corner radius applied to dropdown controls.
	 *
	 * @remarks
	 * HTML Attribute: `dropdown-corner-radius-color`
	 *
	 * CSS Custom Property: `--dropdown-corner-radius-color`
	 */
	@designSystemProperty({
		attribute: 'dropdown-corner-radius-color',
		cssCustomProperty: 'dropdown-corner-radius-color',
		converter: nullableNumberConverter,
		default: VSCodeDesignSystemDefaults.dropdownCornerRadius,
	})
	public dropdownCornerRadius: number;

	// ------------------------ Option Design Tokens ------------------------ //

	/**
	 * The background focus color of a VS Code option component.
	 *
	 * @remarks
	 * HTML Attribute: `option-background-focus-color`
	 *
	 * CSS Custom Property: `--option-background-focus-color`
	 */
	@designSystemProperty({
		attribute: 'option-background-focus-color',
		cssCustomProperty: 'option-background-focus-color',
		default: VSCodeDesignSystemDefaults.optionBackgroundFocusColor,
	})
	public optionBackgroundFocusColor: string;

	// ------------------------ Badge Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code badge component.
	 *
	 * @remarks
	 * HTML Attribute: `badge-background-color`
	 *
	 * CSS Custom Property: `--badge-background-radius-color`
	 */
	@designSystemProperty({
		attribute: 'badge-background-color',
		cssCustomProperty: 'badge-background-color',
		default: VSCodeDesignSystemDefaults.badgeBackgroundColor,
	})
	public badgeBackgroundColor: string;

	/**
	 * The foreground color of a VS Code badge component.
	 *
	 * @remarks
	 * HTML Attribute: `badge-foreground-color`
	 *
	 * CSS Custom Property: `--badge-foreground-radius-color`
	 */
	@designSystemProperty({
		attribute: 'badge-foreground-color',
		cssCustomProperty: 'badge-foreground-color',
		default: VSCodeDesignSystemDefaults.badgeForegroundColor,
	})
	public badgeForegroundColor: string;

	// ------------------------ Text Field & Area Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code text field and area components.
	 *
	 * @remarks
	 * HTML Attribute: `input-background-color`
	 *
	 * CSS Custom Property: `--input-background-color`
	 */
	@designSystemProperty({
		attribute: 'input-background-color',
		cssCustomProperty: 'input-background-color',
		default: VSCodeDesignSystemDefaults.inputBackgroundColor,
	})
	public inputBackgroundColor: string;

	/**
	 * The foreground color of a VS Code text field and area components.
	 *
	 * @remarks
	 * HTML Attribute: `input-foreground-color`
	 *
	 * CSS Custom Property: `--input-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'input-foreground-color',
		cssCustomProperty: 'input-foreground-color',
		default: VSCodeDesignSystemDefaults.inputForegroundColor,
	})
	public inputForegroundColor: string;

	/**
	 * The placeholder foreground color of a VS Code text field and area components.
	 *
	 * @remarks
	 * HTML Attribute: `input-placeholder-foreground-color`
	 *
	 * CSS Custom Property: `--input-placeholder-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'input-placeholder-foreground-color',
		cssCustomProperty: 'input-placeholder-foreground-color',
		default: VSCodeDesignSystemDefaults.inputPlaceholderForegroundColor,
	})
	public inputPlaceholderForegroundColor: string;

	/**
	 * The border color of a VS Code text field and area components.
	 *
	 * @remarks
	 * HTML Attribute: `input-border-color`
	 *
	 * CSS Custom Property: `--input-border-color`
	 */
	@designSystemProperty({
		attribute: 'input-border-color',
		cssCustomProperty: 'input-border-color',
		default: VSCodeDesignSystemDefaults.inputBorderColor,
	})
	public inputBorderColor: string;

	// ------------------------ Progress Bar & Ring Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code progress bar and ring components.
	 *
	 * @remarks
	 * HTML Attribute: `progress-background-color`
	 *
	 * CSS Custom Property: `--progress-background-color`
	 */
	@designSystemProperty({
		attribute: 'progress-background-color',
		cssCustomProperty: 'progress-background-color',
		default: VSCodeDesignSystemDefaults.progressBackgroundColor,
	})
	public progressBackgroundColor: string;

	// ------------------------ Tabs Design Tokens ------------------------ //

	/**
	 * The background color of a VS Code tab panel component.
	 *
	 * @remarks
	 * HTML Attribute: `tab-panel-background-color`
	 *
	 * CSS Custom Property: `--tab-panel-background-color`
	 */
	@designSystemProperty({
		attribute: 'tab-panel-background-color',
		cssCustomProperty: 'tab-panel-background-color',
		default: VSCodeDesignSystemDefaults.tabPanelBackgroundColor,
	})
	public tabPanelBackgroundColor: string;

	/**
	 * The border color of a VS Code tab panel component.
	 *
	 * @remarks
	 * HTML Attribute: `tab-panel-border-color`
	 *
	 * CSS Custom Property: `--tab-panel-border-color`
	 */
	@designSystemProperty({
		attribute: 'tab-panel-border-color',
		cssCustomProperty: 'tab-panel-border-color',
		default: VSCodeDesignSystemDefaults.tabPanelBorderColor,
	})
	public tabPanelBorderColor: string;

	/**
	 * The foreground color of a VS Code tab component.
	 *
	 * @remarks
	 * HTML Attribute: `tab-foreground-color`
	 *
	 * CSS Custom Property: `--tab-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'tab-foreground-color',
		cssCustomProperty: 'tab-foreground-color',
		default: VSCodeDesignSystemDefaults.tabForegroundColor,
	})
	public tabForegroundColor: string;

	/**
	 * The active foreground color of a VS Code tab component.
	 *
	 * @remarks
	 * HTML Attribute: `tab-active-foreground-color`
	 *
	 * CSS Custom Property: `--tab-active-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'tab-active-foreground-color',
		cssCustomProperty: 'tab-active-foreground-color',
		default: VSCodeDesignSystemDefaults.tabActiveForegroundColor,
	})
	public tabActiveForegroundColor: string;

	/**
	 * The active border color of a VS Code tab component.
	 *
	 * @remarks
	 * HTML Attribute: `tab-active-border-color`
	 *
	 * CSS Custom Property: `--tab-active-border-color`
	 */
	@designSystemProperty({
		attribute: 'tab-active-border-color',
		cssCustomProperty: 'tab-active-border-color',
		default: VSCodeDesignSystemDefaults.tabActiveBorderColor,
	})
	public tabActiveBorderColor: string;
}
