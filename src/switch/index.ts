import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Switch, SwitchTemplate as template} from '@microsoft/fast-foundation';
import {SwitchStyles as styles} from './switch.styles';

/**
 * The VSCode Switch element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.switch/ Switch} and
 * {@link https://www.fast.design/docs/api/fast-foundation.switchtemplate/ SwitchTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-switch>`
 */
@customElement({
	name: 'vscode-switch',
	template,
	styles,
})
export class VSCodeSwitch extends Switch {}

/**
 * Styles for Switch
 * @public
 */
export const SwitchStyles: ElementStyles = styles;
