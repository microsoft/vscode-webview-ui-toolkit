import {customElement} from '@microsoft/fast-element';
import {Select, SelectTemplate as template} from '@microsoft/fast-foundation';
import {SelectStyles as styles} from './select.styles';

/**
 * The VS Code Select element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.select/ | Select} and
 * {@link https://www.fast.design/docs/api/fast-foundation.selecttemplate/ | SelectTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-select>`
 *
 * @public
 */
@customElement({
	name: 'vscode-select',
	template,
	styles,
})
export class VSCodeSelect extends Select {}
