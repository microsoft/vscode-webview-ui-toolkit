import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	TextAreaTemplate as template,
	TextArea,
} from '@microsoft/fast-foundation';
import {TextAreaStyles as styles} from './text-area.styles';

/**
 * The VSCode Text Area element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.textarea/ TextArea} and
 * {@link https://www.fast.design/docs/api/fast-foundation.textareatemplate/ TextAreaTemplate}.
 *
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus delegatesFocus}
 */
@customElement({
	name: 'vscode-text-area',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeTextArea extends TextArea {}

/**
 * Styles for the VSCode Text Area component
 * @public
 */
export const TextAreaStyles: ElementStyles = styles;
