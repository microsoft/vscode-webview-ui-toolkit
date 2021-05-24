import {DesignToken} from '@microsoft/fast-foundation';

const {create} = DesignToken;

/**
 * Global design tokens.
 */
export const baseHeightMultiplier = create<number>(
	'base-height-multiplier'
).withDefault(7);
export const baseHorizontalSpacingMultiplier = create<number>(
	'base-horizontal-spacing-multiplier'
).withDefault(3);
export const borderWidth = create<number>('border-width').withDefault(1);
export const cornerRadius = create<number>('corner-radius').withDefault(0);
export const density = create<number>('density').withDefault(0);
export const designUnit = create<number>('design-unit').withDefault(4);
export const disabledOpacity = create<number>('disabled-opacity').withDefault(
	0.4
);
export const focusBorderColor = create<string>(
	'focus-border-color'
).withDefault('#007fd4');
export const focusBorderWidth = create<number>(
	'focus-border-width'
).withDefault(1);

/**
 * A formula to retrieve the control height. Use this as the value of
 * any CSS property that accepts a pixel size.
 *
 * @internal
 */
export const heightNumber = create<number>('height-number');
const body = document.querySelector('body');
if (body) {
	heightNumber.setValueFor(body, element => {
		const multipler = baseHeightMultiplier.getValueFor(element);
		const dens = density.getValueFor(element);
		const unit = designUnit.getValueFor(element);
		return (multipler + dens) * unit;
	});
}

/**
 * Type-ramp font-size and line-height design tokens.
 */
export const typeRampBaseFontSize = create<string>(
	'type-ramp-base-font-size'
).withDefault('13px');
export const typeRampBaseLineHeight = create<string>(
	'type-ramp-base-line-height'
).withDefault('normal');
export const typeRampMinus1FontSize = create<string>(
	'type-ramp-minus1-font-size'
).withDefault('11px');
export const typeRampMinus1LineHeight = create<string>(
	'type-ramp-minus1-line-height'
).withDefault('16px');
export const typeRampMinus2FontSize = create<string>(
	'type-ramp-minus2-font-size'
).withDefault('9px');
export const typeRampMinus2LineHeight = create<string>(
	'type-ramp-minus2-line-height'
).withDefault('16px');
export const typeRampPlus1FontSize = create<string>(
	'type-ramp-plus1-font-size'
).withDefault('16px');
export const typeRampPlus1LineHeight = create<string>(
	'type-ramp-plus1-line-height'
).withDefault('24px');
export const typeRampPlus2FontSize = create<string>(
	'type-ramp-plus2-font-size'
).withDefault('20px');
export const typeRampPlus2LineHeight = create<string>(
	'type-ramp-plus2-line-height'
).withDefault('28px');
export const typeRampPlus3FontSize = create<string>(
	'type-ramp-plus3-font-size'
).withDefault('28px');
export const typeRampPlus3LineHeight = create<string>(
	'type-ramp-plus3-line-height'
).withDefault('36px');
export const typeRampPlus4FontSize = create<string>(
	'type-ramp-plus4-font-size'
).withDefault('34px');
export const typeRampPlus4LineHeight = create<string>(
	'type-ramp-plus4-line-height'
).withDefault('44px');
export const typeRampPlus5FontSize = create<string>(
	'type-ramp-plus5-font-size'
).withDefault('46px');
export const typeRampPlus5LineHeight = create<string>(
	'type-ramp-plus5-line-height'
).withDefault('56px');
export const typeRampPlus6FontSize = create<string>(
	'type-ramp-plus6-font-size'
).withDefault('60px');
export const typeRampPlus6LineHeight = create<string>(
	'type-ramp-plus6-line-height'
).withDefault('72px');

/**
 * Button design tokens.
 */
export const buttonPrimaryBackgroundColor = create<string>(
	'button-primary-background-color'
).withDefault('#0e639c');
export const buttonPrimaryForegroundColor = create<string>(
	'button-primary-foreground-color'
).withDefault('#ffffff');
export const buttonPrimaryHoverBackgroundColor = create<string>(
	'button-primary-hover-background-color'
).withDefault('#1177bb');
export const buttonSecondaryBackgroundColor = create<string>(
	'button-secondary-background-color'
).withDefault('#3a3d41');
export const buttonSecondaryForegroundColor = create<string>(
	'button-secondary-foreground-color'
).withDefault('#ffffff');
export const buttonSecondaryHoverBackgroundColor = create<string>(
	'button-secondary-hover-background-color'
).withDefault('#45494e');

/**
 * Text link design tokens.
 */
export const textLinkForegroundColor = create<string>(
	'text-link-foreground-color'
).withDefault('#3794ff');

/**
 * Checkbox design tokens.
 */
export const checkboxBackgroundColor = create<string>(
	'checkbox-background-color'
).withDefault('#3c3c3c');
export const checkboxForegroundColor = create<string>(
	'checkbox-foreground-color'
).withDefault('#f0f0f0');
export const checkboxBorderColor = create<string>(
	'checkbox-border-color'
).withDefault('#3c3c3c');
export const checkboxCornerRadius = create<number>(
	'checkbox-corner-radius'
).withDefault(3);

/**
 * Breadcrumb Item design tokens.
 */
export const breadcrumbItemBackgroundColor = create<string>(
	'breadcrumb-item-background-color'
).withDefault('#1e1e1e');
export const breadcrumbItemForegroundColor = create<string>(
	'breadcrumb-item-foreground-color'
).withDefault('#cccccccc');
export const breadcrumbItemForegroundHoverColor = create<string>(
	'breadcrumb-item-foreground-hover-color'
).withDefault('#e0e0e0');

/**
 * Dropdown design tokens.
 */
export const dropdownBackgroundColor = create<string>(
	'dropdown-background-color'
).withDefault('#3c3c3c');
export const dropdownForegroundColor = create<string>(
	'dropdown-foreground-color'
).withDefault('#f0f0f0');
export const dropdownBorderColor = create<string>(
	'dropdown-border-color'
).withDefault('#3c3c3c');
export const dropdownCornerRadius = create<number>(
	'dropdown-corner-radius'
).withDefault(5);

/**
 * Option design tokens.
 */
export const optionBackgroundFocusColor = create<string>(
	'option-background-focus-color'
).withDefault('#062f4a');

/**
 * Badge design tokens.
 */
export const badgeBackgroundColor = create<string>(
	'badge-background-color'
).withDefault('#4d4d4d');
export const badgeForegroundColor = create<string>(
	'badge-foreground-color'
).withDefault('#ffffff');

/**
 * Text Field & Area design tokens.
 */
export const inputBackgroundColor = create<string>(
	'input-background-color'
).withDefault('#3c3c3c');
export const inputForegroundColor = create<string>(
	'input-foreground-color'
).withDefault('#cccccc');
export const inputPlaceholderForegroundColor = create<string>(
	'input-placeholder-foreground-color'
).withDefault('#cccccc');
export const inputBorderColor = create<string>(
	'input-border-color'
).withDefault('#3c3c3c');

/**
 * Progress Bar & Ring design tokens.
 */
export const progressBackgroundColor = create<string>(
	'progress-background-color'
).withDefault('#0e70c0');

/**
 * Panels design tokens.
 */
export const panelViewBackgroundColor = create<string>(
	'panel-view-background-color'
).withDefault('#1e1e1e');
export const panelViewBorderColor = create<string>(
	'panel-view-border-color'
).withDefault('#80808059');
export const panelTabForegroundColor = create<string>(
	'panel-tab-foreground-color'
).withDefault('#e7e7e799');
export const panelTabActiveForegroundColor = create<string>(
	'panel-tab-active-foreground-color'
).withDefault('#e7e7e7');
export const panelTabActiveBorderColor = create<string>(
	'panel-tab-active-border-color'
).withDefault('#e7e7e7');
