// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {CSSDesignToken} from '@microsoft/fast-foundation';
import {
	badgeBackground,
	badgeForeground,
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
	dividerBackground,
	dropdownBackground,
	dropdownBorder,
	dropdownForeground,
	focusBorder,
	fontFamily,
	fontWeight,
	foreground,
	inputBackground,
	inputBorder,
	inputForeground,
	inputPlaceholderForeground,
	linkActiveForeground,
	linkForeground,
	listActiveSelectionBackground,
	listActiveSelectionForeground,
	listHoverBackground,
	panelTabActiveBorder,
	panelTabActiveForeground,
	panelTabForeground,
	panelViewBackground,
	panelViewBorder,
	progressBackground,
	quickInputBackground,
	typeRampBaseFontSize,
} from '../../design-tokens';

/**
 * A mapping of all the VS Code theme CSS variables mapped to the
 * toolkit design tokens.
 */
export const tokenMappings: {[index: string]: CSSDesignToken<string>} = {
	// ---- Base Colors ----
	'--vscode-focusBorder': focusBorder,
	'--vscode-foreground': foreground,
	// ---- Contrast Styles ----
	'--vscode-contrastActiveBorder': contrastActiveBorder,
	'--vscode-contrastBorder': contrastBorder,
	// ---- Badges ----
	'--vscode-badge-foreground': badgeForeground,
	'--vscode-badge-background': badgeBackground,
	// ---- Buttons ----
	'--vscode-button-background': buttonPrimaryBackground,
	'--vscode-button-foreground': buttonPrimaryForeground,
	'--vscode-button-hoverBackground': buttonPrimaryHoverBackground,
	'--vscode-button-secondaryBackground': buttonSecondaryBackground,
	'--vscode-button-secondaryForeground': buttonSecondaryForeground,
	'--vscode-button-secondaryHoverBackground': buttonSecondaryHoverBackground,
	'--vscode-button-border': buttonBorder,
	// ---- Checkboxes ----
	'--vscode-checkbox-background': checkboxBackground,
	'--vscode-checkbox-foreground': checkboxForeground,
	'--vscode-checkbox-border': checkboxBorder,
	// ---- Data Grid ----
	'--vscode-list-activeSelectionBackground': listActiveSelectionBackground,
	'--vscode-list-activeSelectionForeground': listActiveSelectionForeground,
	'--vscode-list-hoverBackground': listHoverBackground,
	'--vscode-quickInput-background': quickInputBackground,
	// ---- Divider ----
	'--vscode-settings-dropdownListBorder': dividerBackground,
	// ---- Dropdowns & Comboboxes ----
	'--vscode-dropdown-background': dropdownBackground,
	'--vscode-dropdown-foreground': dropdownForeground,
	'--vscode-dropdown-border': dropdownBorder,
	// ---- Fonts ----
	'--vscode-font-family': fontFamily,
	'--vscode-font-size': typeRampBaseFontSize,
	'--vscode-font-weight': fontWeight,
	// ---- Links ----
	'--vscode-textLink-foreground': linkForeground,
	'--vscode-textLink-activeForeground': linkActiveForeground,
	// ---- Panels ----
	'--vscode-panelTitle-inactiveForeground': panelTabForeground,
	'--vscode-panelTitle-activeForeground': panelTabActiveForeground,
	'--vscode-panelTitle-activeBorder': panelTabActiveBorder,
	'--vscode-panel-background': panelViewBackground,
	'--vscode-panel-border': panelViewBorder,
	// ---- Progress Bars & Rings ----
	'--vscode-progressBar-background': progressBackground,
	// ---- Text Fields & Areas ----
	'--vscode-input-background': inputBackground,
	'--vscode-input-foreground': inputForeground,
	'--vscode-input-border': inputBorder,
	'--vscode-input-placeholderForeground': inputPlaceholderForeground,
};
