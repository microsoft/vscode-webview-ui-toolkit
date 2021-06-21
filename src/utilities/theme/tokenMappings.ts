// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {CSSDesignToken} from '@microsoft/fast-foundation';
import {
	badgePrimaryBackground,
	badgePrimaryForeground,
	badgeSecondaryBackground,
	badgeSecondaryForeground,
	breadcrumbItemForeground,
	breadcrumbItemForegroundHover,
	buttonBorder,
	buttonPrimaryBackground,
	buttonPrimaryForeground,
	buttonPrimaryHoverBackground,
	buttonSecondaryBackground,
	buttonSecondaryForeground,
	buttonSecondaryHoverBackground,
	checkboxBackground,
	checkboxBorder,
	checkboxForeground,
	contrastActiveBorder,
	contrastBorder,
	dropdownBackground,
	dropdownBorder,
	dropdownForeground,
	focusBorder,
	inputBackgroundColor,
	inputBorderColor,
	inputForegroundColor,
	inputPlaceholderForegroundColor,
	linkActiveForeground,
	linkForeground,
	optionActiveSelectionBackground,
	optionActiveSelectionForeground,
	panelTabActiveBorderColor,
	panelTabActiveForegroundColor,
	panelTabForegroundColor,
	panelViewBackgroundColor,
	panelViewBorderColor,
	progressBackgroundColor,
} from '../../design-tokens';

/**
 * A mapping of all the VS Code theme CSS variables mapped to the
 * toolkit design tokens.
 */
export const tokenMappings: {[index: string]: CSSDesignToken<string>} = {
	// ---- Base Colors ----
	'--vscode-focusBorder': focusBorder,
	// ---- Contrast Styles ----
	'--vscode-contrastActiveBorder': contrastActiveBorder,
	'--vscode-contrastBorder': contrastBorder,
	// ---- Breadcrumbs ----
	'--vscode-breadcrumb-foreground': breadcrumbItemForeground,
	'--vscode-breadcrumb-focusForeground': breadcrumbItemForegroundHover,
	// ---- Badges ----
	'--vscode-activityBarBadge-background': badgePrimaryBackground,
	'--vscode-activityBarBadge-foreground': badgePrimaryForeground,
	'--vscode-badge-foreground': badgeSecondaryForeground,
	'--vscode-badge-background': badgeSecondaryBackground,
	// ---- Buttons ----
	'--vscode-button-background': buttonPrimaryBackground,
	'--vscode-button-foreground': buttonPrimaryForeground,
	'--vscode-button-hoverBackground': buttonPrimaryHoverBackground,
	'--vscode-button-secondaryBackground': buttonSecondaryBackground,
	'--vscode-button-secondaryForeground': buttonSecondaryForeground,
	'--vscode-button-secondaryHoverBackground': buttonSecondaryHoverBackground,
	'--vscode-button-border': buttonBorder,
	// ---- Links ----
	'--vscode-textLink-foreground': linkForeground,
	'--vscode-textLink-activeForeground': linkActiveForeground,
	// ---- Checkboxes ----
	'--vscode-checkbox-background': checkboxBackground,
	'--vscode-checkbox-foreground': checkboxForeground,
	'--vscode-checkbox-border': checkboxBorder,
	// ---- Dropdowns & Comboboxes ----
	'--vscode-dropdown-background': dropdownBackground,
	'--vscode-dropdown-foreground': dropdownForeground,
	'--vscode-dropdown-border': dropdownBorder,
	// ---- Dropdown Options ----
	'--vscode-list-activeSelectionBackground': optionActiveSelectionBackground,
	'--vscode-list-activeSelectionForeground': optionActiveSelectionForeground,
	// ---- Text Fields & Areas ----
	'--vscode-input-background': inputBackgroundColor,
	'--vscode-input-foreground': inputForegroundColor,
	'--vscode-input-border': inputBorderColor,
	'--vscode-input-placeholderForeground': inputPlaceholderForegroundColor,
	// ---- Progress Bars & Rings ----
	'--vscode-progressBar-background': progressBackgroundColor,
	// ---- Panels ----
	'--vscode-panelTitle-inactiveForeground': panelTabForegroundColor,
	'--vscode-panelTitle-activeForeground': panelTabActiveForegroundColor,
	'--vscode-panelTitle-activeBorder': panelTabActiveBorderColor,
	'--vscode-panel-background': panelViewBackgroundColor,
	'--vscode-panel-border': panelViewBorderColor,
};
