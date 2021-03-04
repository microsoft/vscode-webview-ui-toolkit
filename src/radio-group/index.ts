import {customElement} from '@microsoft/fast-element';
import {
	RadioGroup,
	RadioGroupTemplate as template,
} from '@microsoft/fast-foundation';
import {RadioGroupStyles as styles} from './radio-group.styles';

/**
 * The VSCode Radio Group element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.radiogroup/ RadioGroup} and
 * {@link https://www.fast.design/docs/api/fast-foundation.radiogrouptemplate/ RadioGroupTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-radio-group>`
 */
@customElement({
	name: 'vscode-radio-group',
	template,
	styles,
})
export class VSCodeRadioGroup extends RadioGroup {}

/**
 * Styles for RadioGroup
 * @public
 */
export const RadioGroupStyles = styles;
