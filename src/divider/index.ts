import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Divider, DividerTemplate as template} from '@microsoft/fast-foundation';
import {DividerStyles as styles} from './divider.styles';

/**
 * The VSCode Divider element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.divider/ Divider} and
 * {@link https://www.fast.design/docs/api/fast-foundation.dividertemplate/ DividerTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-divider>`
 */
@customElement({
	name: 'vscode-divider',
	template,
	styles,
})
export class VSCodeDivider extends Divider {}

/**
 * Styles for the VSCode Divider component
 * @public
 */
export const DividerStyles: ElementStyles = styles;
