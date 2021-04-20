import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Menu, MenuTemplate as template} from '@microsoft/fast-foundation';
import {MenuStyles as styles} from './menu.styles';

/**
 * The VSCode Menu element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.menu/ | Menu} and
 * {@link https://www.fast.design/docs/api/fast-foundation.menutemplate/ | MenuTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-menu>`
 */
@customElement({
	name: 'vscode-menu',
	template,
	styles,
})
export class VSCodeMenu extends Menu {}

/**
 * Styles for the VSCode Menu component
 * @public
 */
export const MenuStyles: ElementStyles = styles;
