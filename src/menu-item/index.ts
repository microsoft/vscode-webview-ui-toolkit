import {customElement, ElementStyles} from '@microsoft/fast-element';
import {createMenuItemTemplate, MenuItem} from '@microsoft/fast-foundation';
import {MenuItemStyles as styles} from './menu-item.styles';

const template = createMenuItemTemplate('vscode');

/**
 * The VS Code Menu Item element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.menuitem/ | MenuItem} and
 * {@link https://www.fast.design/docs/api/fast-foundation.menuitemtemplate/ | MenuItemTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-menu-item>`
 *
 * @public
 */
@customElement({
	name: 'vscode-menu-item',
	template,
	styles,
})
export class VSCodeMenuItem extends MenuItem {}

/**
 * Styles for the VS Code Menu Item component
 * @public
 */
export const MenuItemStyles: ElementStyles = styles;
