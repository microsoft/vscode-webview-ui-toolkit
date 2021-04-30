import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	Checkbox,
	CheckboxTemplate as template,
} from '@microsoft/fast-foundation';
import {CheckboxStyles as styles} from './checkbox.styles';

/**
 * The VS Code Checkbox element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.checkbox/ | Checkbox} and
 * {@link https://www.fast.design/docs/api/fast-foundation.checkboxtemplate/ | CheckboxTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-checkbox>`
 */
@customElement({
	name: 'vscode-checkbox',
	template,
	styles,
})
export class VSCodeCheckbox extends Checkbox {}

/**
 * Styles for the VS Code Checkbox component
 * @public
 */
export const CheckboxStyles: ElementStyles = styles;
