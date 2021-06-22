// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {DesignToken} from '@microsoft/fast-foundation';

const {create} = DesignToken;

/**
 * Global design tokens.
 */
export const designUnit = create<number>('design-unit').withDefault(4);
export const borderWidth = create<number>('border-width').withDefault(1);
export const contrastActiveBorder = create<string>(
	'contrast-active-border'
).withDefault('#f38518');
export const contrastBorder = create<string>('contrast-border').withDefault(
	'#6fc3df'
);
export const cornerRadius = create<number>('corner-radius').withDefault(0);
export const disabledOpacity = create<number>('disabled-opacity').withDefault(
	0.4
);
export const focusBorder = create<string>('focus-border').withDefault(
	'#007fd4'
);
export const fontFamily = create<string>('font-family').withDefault(
	'Arial, Helvetica, sans-serif'
);
export const inputHeight = create<string>('input-height').withDefault('26');
export const inputMinWidth = create<string>('input-min-width').withDefault(
	'250px'
);

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

/**
 * Breadcrumb Item design tokens.
 */
export const breadcrumbItemForeground = create<string>(
	'breadcrumb-item-foreground'
).withDefault('#cccccccc');
export const breadcrumbItemForegroundHover = create<string>(
	'breadcrumb-item-foreground-hover'
).withDefault('#e0e0e0');
export const breadcrumbSeparatorMarginHorizontal = create<string>(
	'breadcrumb-separator-margin-horizontal'
).withDefault('6px');

/**
 * Badge design tokens.
 */
export const badgePrimaryForeground = create<string>(
	'badge-primary-foreground'
).withDefault('#ffffff');
export const badgePrimaryBackground = create<string>(
	'badge-primary-background'
).withDefault('#007acc');
export const badgeSecondaryForeground = create<string>(
	'badge-secondary-foreground'
).withDefault('#ffffff');
export const badgeSecondaryBackground = create<string>(
	'badge-secondary-background'
).withDefault('#4d4d4d');

/**
 * Button design tokens.
 */
export const buttonPrimaryForeground = create<string>(
	'button-primary-foreground'
).withDefault('#ffffff');
export const buttonPrimaryBackground = create<string>(
	'button-primary-background'
).withDefault('#0e639c');
export const buttonPrimaryHoverBackground = create<string>(
	'button-primary-hover-background'
).withDefault('#1177bb');
export const buttonSecondaryForeground = create<string>(
	'button-secondary-foreground'
).withDefault('#ffffff');
export const buttonSecondaryBackground = create<string>(
	'button-secondary-background'
).withDefault('#3a3d41');
export const buttonSecondaryHoverBackground = create<string>(
	'button-secondary-hover-background'
).withDefault('#45494e');
export const buttonPaddingHorizontal = create<string>(
	'button-padding-horizontal'
).withDefault('11px');
export const buttonPaddingVertical = create<string>(
	'button-padding-vertical'
).withDefault('6px');
export const buttonIconForeground = create<string>(
	'button-icon-foreground'
).withDefault('#ffffff');
export const buttonIconBackground = create<string>(
	'button-icon-background'
).withDefault('transparent');
export const buttonIconHoverBackground = create<string>(
	'button-icon-hover-background'
).withDefault('rgba(90, 93, 94, 0.31)');
export const buttonIconPadding = create<string>(
	'button-icon-padding'
).withDefault('3px');
export const buttonIconCornerRadius = create<string>(
	'button-icon-corner-radius'
).withDefault('5px');
export const buttonIconFocusBorderOffset = create<number>(
	'button-icon-outline-offset'
).withDefault(0);
// Note: Button Border is used only for high contrast themes and should be
// left as transparent otherwise.
export const buttonBorder = create<string>('button-border').withDefault(
	'transparent'
);

/**
 * Checkbox design tokens.
 */
export const checkboxBackground = create<string>(
	'checkbox-background'
).withDefault('#3c3c3c');
export const checkboxForeground = create<string>(
	'checkbox-foreground'
).withDefault('#f0f0f0');
export const checkboxBorder = create<string>('checkbox-border').withDefault(
	'#3c3c3c'
);
export const checkboxCornerRadius = create<number>(
	'checkbox-corner-radius'
).withDefault(3);

/**
 * Divider design tokens.
 */
export const dividerBackground = create<string>(
	'divider-background'
).withDefault('#454545');

/**
 * Dropdown design tokens.
 */
export const dropdownBackground = create<string>(
	'dropdown-background-color'
).withDefault('#3c3c3c');
export const dropdownForeground = create<string>(
	'dropdown-foreground-color'
).withDefault('#f0f0f0');
export const dropdownBorder = create<string>(
	'dropdown-border-color'
).withDefault('#3c3c3c');
export const dropdownListMaxHeight = create<string>(
	'dropdown-list-max-height'
).withDefault('200px');

/**
 * Option design tokens.
 */
// list.activeSelectionBackground;
export const optionActiveSelectionBackground = create<string>(
	'option-active-selection-background'
).withDefault('#094771');
export const optionActiveSelectionForeground = create<string>(
	'option-active-selection-foreground'
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
 * Link design tokens.
 */
export const linkForeground = create<string>(
	'link-active-foreground'
).withDefault('#3794ff');
export const linkActiveForeground = create<string>(
	'link-foreground'
).withDefault('#3794ff');

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

/**
 * Tag design tokens.
 */
export const tagCornerRadius = create<string>('tag-corner-radius').withDefault(
	'2px'
);
