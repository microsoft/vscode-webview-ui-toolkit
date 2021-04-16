import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	ListboxOption,
	ListboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {OptionStyles as styles} from './option.styles';

/**
 * The VSCode Option element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.listboxoption/ | ListboxOption} and
 * {@link https://www.fast.design/docs/api/fast-foundation.listboxoptiontemplate/ | ListboxOptionTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-option>`
 */
@customElement({
	name: 'vscode-option',
	template,
	styles,
})
export class VSCodeOption extends ListboxOption {}

/**
 * Styles for the VSCode Option component
 * @public
 */
export const OptionStyles: ElementStyles = styles;
