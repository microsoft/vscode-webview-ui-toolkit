import {
	defineDesignSystemProvider,
	designSystemProperty,
	DesignSystemProvider,
	DesignSystemProviderTemplate as template,
} from '@microsoft/fast-foundation';
import {Direction} from '@microsoft/fast-web-utilities';
import {nullableNumberConverter} from '@microsoft/fast-element';
import {DesignSystem, DesignSystemDefaults} from '../vscode-design-system';
import {DesignSystemProviderStyles as styles} from './design-system-provider.styles';

/**
 * The VSCode DesignSystemProvider element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.designsystemprovider/ DesignSystemProvider},
 * {@link https://www.fast.design/docs/api/fast-foundation.designsystemprovidertemplate/ DesignSystemProviderTemplate}
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-design-system-provider>`
 */
@defineDesignSystemProvider({
	name: 'vscode-design-system-provider',
	template,
	styles,
})
export class VSCodeDesignSystemProvider
	extends DesignSystemProvider
	implements DesignSystem {
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
		default: DesignSystemDefaults.baseHeightMultiplier,
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
		default: DesignSystemDefaults.baseHorizontalSpacingMultiplier,
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
		default: DesignSystemDefaults.borderWidth,
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
		default: DesignSystemDefaults.cornerRadius,
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
		default: DesignSystemDefaults.density,
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
		default: DesignSystemDefaults.designUnit,
	})
	public designUnit: number;

	/**
	 * The primary document direction. Can either be LTR (left-to-right) or
	 * RTL (right-to-left).
	 *
	 * @remarks
	 * HTML Attribute: `direction`
	 *
	 * CSS Custom Property: N/A
	 */
	@designSystemProperty({
		attribute: 'direction',
		cssCustomProperty: false,
		default: DesignSystemDefaults.direction,
	})
	public direction: Direction;

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
		default: DesignSystemDefaults.disabledOpacity,
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
		default: DesignSystemDefaults.focusBorderColor,
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
		default: DesignSystemDefaults.focusBorderWidth,
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
		default: DesignSystemDefaults.typeRampMinus2FontSize,
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
		default: DesignSystemDefaults.typeRampMinus2LineHeight,
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
		default: DesignSystemDefaults.typeRampMinus1FontSize,
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
		default: DesignSystemDefaults.typeRampMinus1LineHeight,
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
		default: DesignSystemDefaults.typeRampBaseFontSize,
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
		default: DesignSystemDefaults.typeRampBaseLineHeight,
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
		default: DesignSystemDefaults.typeRampPlus1FontSize,
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
		default: DesignSystemDefaults.typeRampPlus1LineHeight,
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
		default: DesignSystemDefaults.typeRampPlus2FontSize,
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
		default: DesignSystemDefaults.typeRampPlus2LineHeight,
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
		default: DesignSystemDefaults.typeRampPlus3FontSize,
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
		default: DesignSystemDefaults.typeRampPlus3LineHeight,
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
		default: DesignSystemDefaults.typeRampPlus4FontSize,
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
		default: DesignSystemDefaults.typeRampPlus4LineHeight,
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
		default: DesignSystemDefaults.typeRampPlus5FontSize,
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
		default: DesignSystemDefaults.typeRampPlus5LineHeight,
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
		default: DesignSystemDefaults.typeRampPlus6FontSize,
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
		default: DesignSystemDefaults.typeRampPlus6LineHeight,
	})
	public typeRampPlus6LineHeight: string;

	// ------------------------ Button Design Tokens ------------------------ //

	/**
	 * The primary background color of a VSCode button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-primary-background-color`
	 *
	 * CSS Custom Property: `--button-primary-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-primary-background-color',
		cssCustomProperty: 'button-primary-background-color',
		default: DesignSystemDefaults.buttonPrimaryBackgroundColor,
	})
	public buttonPrimaryBackgroundColor: string;

	/**
	 * The primary foreground color of a VSCode button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-primary-foreground-color`
	 *
	 * CSS Custom Property: `--button-primary-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'button-primary-foreground-color',
		cssCustomProperty: 'button-primary-foreground-color',
		default: DesignSystemDefaults.buttonPrimaryForegroundColor,
	})
	public buttonPrimaryForegroundColor: string;

	/**
	 * The primary hover background color of a VSCode button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-primary-hover-background-color`
	 *
	 * CSS Custom Property: `--button-primary-hover-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-primary-hover-background-color',
		cssCustomProperty: 'button-primary-hover-background-color',
		default: DesignSystemDefaults.buttonPrimaryHoverBackgroundColor,
	})
	public buttonPrimaryHoverBackgroundColor: string;

	/**
	 * The secondary background color of a VSCode button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-secondary-background-color`
	 *
	 * CSS Custom Property: `--button-secondary-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-secondary-background-color',
		cssCustomProperty: 'button-secondary-background-color',
		default: DesignSystemDefaults.buttonSecondaryBackgroundColor,
	})
	public buttonSecondaryBackgroundColor: string;

	/**
	 * The secondary foreground color of a VSCode button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-secondary-foreground-color`
	 *
	 * CSS Custom Property: `--button-secondary-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'button-secondary-foreground-color',
		cssCustomProperty: 'button-secondary-foreground-color',
		default: DesignSystemDefaults.buttonSecondaryForegroundColor,
	})
	public buttonSecondaryForegroundColor: string;

	/**
	 * The secondary hover background color of a VSCode button component.
	 *
	 * @remarks
	 * HTML Attribute: `button-secondary-hover-background-color`
	 *
	 * CSS Custom Property: `--button-secondary-hover-background-color`
	 */
	@designSystemProperty({
		attribute: 'button-secondary-hover-background-color',
		cssCustomProperty: 'button-secondary-hover-background-color',
		default: DesignSystemDefaults.buttonSecondaryHoverBackgroundColor,
	})
	public buttonSecondaryHoverBackgroundColor: string;

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
		default: DesignSystemDefaults.textLinkForegroundColor,
	})
	public textLinkForegroundColor: string;

	// ------------------------ Checkbox Design Tokens ------------------------ //

	/**
	 * The background color of a VSCode checkbox component.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-background-color`
	 *
	 * CSS Custom Property: `--checkbox-background-color`
	 */
	@designSystemProperty({
		attribute: 'checkbox-background-color',
		cssCustomProperty: 'checkbox-background-color',
		default: DesignSystemDefaults.checkboxBackgroundColor,
	})
	public checkboxBackgroundColor: string;

	/**
	 * The foreground color of a VSCode checkbox component.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-foreground-color`
	 *
	 * CSS Custom Property: `--checkbox-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'checkbox-foreground-color',
		cssCustomProperty: 'checkbox-foreground-color',
		default: DesignSystemDefaults.checkboxForegroundColor,
	})
	public checkboxForegroundColor: string;

	/**
	 * The border color of a VSCode checkbox component.
	 *
	 * @remarks
	 * HTML Attribute: `checkbox-border-color`
	 *
	 * CSS Custom Property: `--checkbox-border-color`
	 */
	@designSystemProperty({
		attribute: 'checkbox-border-color',
		cssCustomProperty: 'checkbox-border-color',
		default: DesignSystemDefaults.checkboxBorderColor,
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
		default: DesignSystemDefaults.checkboxCornerRadius,
	})
	public checkboxCornerRadius: number;

	// ------------------------ Breadcrumb Item Design Tokens ------------------------ //

	/**
	 * The background color of a VSCode breadcrumb item component.
	 *
	 * @remarks
	 * HTML Attribute: `breadcrumb-item-background-color`
	 *
	 * CSS Custom Property: `--breadcrumb-item-background-color`
	 */
	@designSystemProperty({
		attribute: 'breadcrumb-item-background-color',
		cssCustomProperty: 'breadcrumb-item-background-color',
		default: DesignSystemDefaults.breadcrumbItemBackgroundColor,
	})
	public breadcrumbItemBackgroundColor: string;

	/**
	 * The foreground color of a VSCode breadcrumb item component.
	 *
	 * @remarks
	 * HTML Attribute: `breadcrumb-item-foreground-color`
	 *
	 * CSS Custom Property: `--breadcrumb-item-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'breadcrumb-item-foreground-color',
		cssCustomProperty: 'breadcrumb-item-foreground-color',
		default: DesignSystemDefaults.breadcrumbItemForegroundColor,
	})
	public breadcrumbItemForegroundColor: string;

	/**
	 * The foreground hover color of a VSCode breadcrumb item component.
	 *
	 * @remarks
	 * HTML Attribute: `breadcrumb-item-foreground-hover-color`
	 *
	 * CSS Custom Property: `--breadcrumb-item-foreground-hover-color`
	 */
	@designSystemProperty({
		attribute: 'breadcrumb-item-foreground-hover-color',
		cssCustomProperty: 'breadcrumb-item-foreground-hover-color',
		default: DesignSystemDefaults.breadcrumbItemForegroundHoverColor,
	})
	public breadcrumbItemForegroundHoverColor: string;

	// ------------------------ Select Design Tokens ------------------------ //

	/**
	 * The background color of a VSCode select component.
	 *
	 * @remarks
	 * HTML Attribute: `select-background-color`
	 *
	 * CSS Custom Property: `--select-background-color`
	 */
	@designSystemProperty({
		attribute: 'select-background-color',
		cssCustomProperty: 'select-background-color',
		default: DesignSystemDefaults.selectBackgroundColor,
	})
	public selectBackgroundColor: string;

	/**
	 * The foreground color of a VSCode select component.
	 *
	 * @remarks
	 * HTML Attribute: `select-foreground-color`
	 *
	 * CSS Custom Property: `--select-foreground-color`
	 */
	@designSystemProperty({
		attribute: 'select-foreground-color',
		cssCustomProperty: 'select-foreground-color',
		default: DesignSystemDefaults.selectForegroundColor,
	})
	public selectForegroundColor: string;

	/**
	 * The border color of a VSCode select component.
	 *
	 * @remarks
	 * HTML Attribute: `select-border-color`
	 *
	 * CSS Custom Property: `--select-border-color`
	 */
	@designSystemProperty({
		attribute: 'select-border-color',
		cssCustomProperty: 'select-border-color',
		default: DesignSystemDefaults.selectBorderColor,
	})
	public selectBorderColor: string;

	/**
	 * The corner radius applied to select controls.
	 *
	 * @remarks
	 * HTML Attribute: `select-corner-radius-color`
	 *
	 * CSS Custom Property: `--select-corner-radius-color`
	 */
	@designSystemProperty({
		attribute: 'select-corner-radius-color',
		cssCustomProperty: 'select-corner-radius-color',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.selectCornerRadius,
	})
	public selectCornerRadius: number;
}
