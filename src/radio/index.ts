import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Radio, RadioTemplate as template} from '@microsoft/fast-foundation';
import {RadioStyles as styles} from './radio.styles';

/**
 * The VS Code Radio element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.radio/ | Radio} and
 * {@link https://www.fast.design/docs/api/fast-foundation.radiotemplate/ | RadioTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-radio>`
 */
@customElement({
	name: 'vscode-radio',
	template,
	styles,
})
export class VSCodeRadio extends Radio {}

/**
 * Styles for the VS Code Radio component
 * @public
 */
export const RadioStyles: ElementStyles = styles;
