// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {create} from './utilities/design-tokens/create.js';

/**
 * Developer note:
 *
 * There are some tokens defined in this file that make use of `--fake-vscode-token`. This is
 * done when a toolkit token should be added to the tokenMappings map (and subsequently altered
 * in the applyTheme function) but does not have a corresponding VS Code token that can be used.
 *
 * An example is buttonIconHoverBackground token which does not have a corresponding VS Code token
 * at this time (it's a hardcoded value in VS Code), but needs to be adjusted to be transparent when a
 * high contrast theme is applied.
 *
 * As a rule of thumb, if there are special cases where a token needs to be adjusted based on the
 * VS Code theme and does not have a corresponding VS Code token, `--fake-vscode-token` can be used
 * to indicate that it should be added to the tokenMappings map and thus make it accessible to the
 * applyTheme function where it can be dynamically adjusted.
 */

/**
 * Global design tokens.
 */

export const background = create<string>('background', '--vscode-editor-background').withDefault('#1e1e1e');
export const borderWidth = create<number>('border-width').withDefault(1);
export const contrastActiveBorder = create<string>('contrast-active-border', '--vscode-contrastActiveBorder').withDefault('#f38518');
export const contrastBorder = create<string>('contrast-border', '--vscode-contrastBorder').withDefault('#6fc3df');
export const cornerRadius = create<number>('corner-radius').withDefault(0);
export const cornerRadiusRound = create<number>('corner-radius-round').withDefault(2);
export const designUnit = create<number>('design-unit').withDefault(4);
export const disabledOpacity = create<number>('disabled-opacity').withDefault(0.4);
export const focusBorder = create<string>('focus-border', '--vscode-focusBorder').withDefault('#007fd4');
export const fontFamily = create<string>('font-family', '--vscode-font-family').withDefault(
	'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
);
export const fontWeight = create<string>('font-weight', '--vscode-font-weight').withDefault('400');
export const foreground = create<string>('foreground', '--vscode-foreground').withDefault('#cccccc');
export const inputHeight = create<string>('input-height').withDefault('26');
export const inputMinWidth = create<string>('input-min-width').withDefault('100px');
export const typeRampBaseFontSize = create<string>('type-ramp-base-font-size', '--vscode-font-size').withDefault('13px');
export const typeRampBaseLineHeight = create<string>('type-ramp-base-line-height').withDefault('normal');
export const typeRampMinus1FontSize = create<string>('type-ramp-minus1-font-size').withDefault('11px');
export const typeRampMinus1LineHeight = create<string>('type-ramp-minus1-line-height').withDefault('16px');
export const typeRampMinus2FontSize = create<string>('type-ramp-minus2-font-size').withDefault('9px');
export const typeRampMinus2LineHeight = create<string>('type-ramp-minus2-line-height').withDefault('16px');
export const typeRampPlus1FontSize = create<string>('type-ramp-plus1-font-size').withDefault('16px');
export const typeRampPlus1LineHeight = create<string>('type-ramp-plus1-line-height').withDefault('24px');
export const scrollbarWidth = create<string>('scrollbarWidth').withDefault('10px');
export const scrollbarHeight = create<string>('scrollbarHeight').withDefault('10px');
export const scrollbarSliderBackground = create<string>('scrollbar-slider-background', '--vscode-scrollbarSlider-background').withDefault('#79797966');
export const scrollbarSliderHoverBackground = create<string>('scrollbar-slider-hover-background', '--vscode-scrollbarSlider-hoverBackground').withDefault('#646464b3');
export const scrollbarSliderActiveBackground = create<string>('scrollbar-slider-active-background', '--vscode-scrollbarSlider-activeBackground').withDefault('#bfbfbf66');

/**
 * Badge design tokens.
 */

export const badgeBackground = create<string>('badge-background', '--vscode-badge-background').withDefault('#4d4d4d');
export const badgeForeground = create<string>('badge-foreground', '--vscode-badge-foreground').withDefault('#ffffff');

/**
 * Button design tokens.
 */

// Note: Button border is used only for high contrast themes and should be left as transparent otherwise.
export const buttonBorder = create<string>('button-border', '--vscode-button-border').withDefault('transparent');
export const buttonIconBackground = create<string>('button-icon-background').withDefault('transparent');
export const buttonIconCornerRadius = create<string>('button-icon-corner-radius').withDefault('5px');
export const buttonIconFocusBorderOffset = create<number>('button-icon-outline-offset').withDefault(0);
// Note usage of `--fake-vscode-token` (refer to doc comment at top of file for explanation).
export const buttonIconHoverBackground = create<string>('button-icon-hover-background', '--fake-vscode-token').withDefault('rgba(90, 93, 94, 0.31)');
export const buttonIconPadding = create<string>('button-icon-padding').withDefault('3px');
export const buttonPrimaryBackground = create<string>('button-primary-background', '--vscode-button-background').withDefault('#0e639c');
export const buttonPrimaryForeground = create<string>('button-primary-foreground', '--vscode-button-foreground').withDefault('#ffffff');
export const buttonPrimaryHoverBackground = create<string>('button-primary-hover-background', '--vscode-button-hoverBackground').withDefault('#1177bb');
export const buttonSecondaryBackground = create<string>('button-secondary-background', '--vscode-button-secondaryBackground').withDefault('#3a3d41');
export const buttonSecondaryForeground = create<string>('button-secondary-foreground', '--vscode-button-secondaryForeground').withDefault('#ffffff');
export const buttonSecondaryHoverBackground = create<string>('button-secondary-hover-background', '--vscode-button-secondaryHoverBackground').withDefault('#45494e');
export const buttonPaddingHorizontal = create<string>('button-padding-horizontal').withDefault('11px');
export const buttonPaddingVertical = create<string>('button-padding-vertical').withDefault('4px');

/**
 * Checkbox design tokens.
 */

export const checkboxBackground = create<string>('checkbox-background', '--vscode-checkbox-background').withDefault('#3c3c3c');
export const checkboxBorder = create<string>('checkbox-border', '--vscode-checkbox-border').withDefault('#3c3c3c');
export const checkboxCornerRadius = create<number>('checkbox-corner-radius').withDefault(3);
export const checkboxForeground = create<string>('checkbox-foreground', '--vscode-checkbox-foreground').withDefault('#f0f0f0');

/**
 * Data Grid design tokens
 */

export const listActiveSelectionBackground = create<string>('list-active-selection-background', '--vscode-list-activeSelectionBackground').withDefault('#094771');
export const listActiveSelectionForeground = create<string>('list-active-selection-foreground', '--vscode-list-activeSelectionForeground').withDefault('#ffffff');
export const listHoverBackground = create<string>('list-hover-background', '--vscode-list-hoverBackground').withDefault('#2a2d2e');

/**
 * Divider design tokens.
 */

export const dividerBackground = create<string>('divider-background', '--vscode-settings-dropdownListBorder').withDefault('#454545');

/**
 * Dropdown design tokens.
 */

export const dropdownBackground = create<string>('dropdown-background', '--vscode-dropdown-background').withDefault('#3c3c3c');
export const dropdownBorder = create<string>('dropdown-border', '--vscode-dropdown-border').withDefault('#3c3c3c');
export const dropdownForeground = create<string>('dropdown-foreground', '--vscode-dropdown-foreground').withDefault('#f0f0f0');
export const dropdownListMaxHeight = create<string>('dropdown-list-max-height').withDefault('200px');

/**
 * Text Field & Area design tokens.
 */

export const inputBackground = create<string>('input-background', '--vscode-input-background').withDefault('#3c3c3c');
export const inputForeground = create<string>('input-foreground', '--vscode-input-foreground').withDefault('#cccccc');
export const inputPlaceholderForeground = create<string>('input-placeholder-foreground', '--vscode-input-placeholderForeground').withDefault('#cccccc');

/**
 * Link design tokens.
 */

export const linkActiveForeground = create<string>('link-active-foreground', '--vscode-textLink-activeForeground').withDefault('#3794ff');
export const linkForeground = create<string>('link-foreground', '--vscode-textLink-foreground').withDefault('#3794ff');

/**
 * Progress ring design tokens.
 */

export const progressBackground = create<string>('progress-background', '--vscode-progressBar-background').withDefault('#0e70c0');

/**
 * Panels design tokens.
 */

export const panelTabActiveBorder = create<string>('panel-tab-active-border', '--vscode-panelTitle-activeBorder').withDefault('#e7e7e7');
export const panelTabActiveForeground = create<string>('panel-tab-active-foreground', '--vscode-panelTitle-activeForeground').withDefault('#e7e7e7');
export const panelTabForeground = create<string>('panel-tab-foreground', '--vscode-panelTitle-inactiveForeground').withDefault('#e7e7e799');
export const panelViewBackground = create<string>('panel-view-background', '--vscode-panel-background').withDefault('#1e1e1e');
export const panelViewBorder = create<string>('panel-view-border', '--vscode-panel-border').withDefault('#80808059');

/**
 * Tag design tokens.
 */

export const tagCornerRadius = create<string>('tag-corner-radius').withDefault('2px');
