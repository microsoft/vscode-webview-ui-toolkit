import {customElement} from '@microsoft/fast-element';
import {Select, SelectTemplate as template} from '@microsoft/fast-foundation';
import {SelectStyles as styles} from './select.styles';

/**
 * The VSCode Select element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.select/ Select} and
 * {@link https://www.fast.design/docs/api/fast-foundation.selecttemplate/ SelectTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-select>`
 */
@customElement({
	name: 'vscode-select',
	template,
	styles,
})
export class VSCodeSelect extends Select {}

/**
 * Styles for Select
 * @public
 */
export const SelectStyles = styles;
