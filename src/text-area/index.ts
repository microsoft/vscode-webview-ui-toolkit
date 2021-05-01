import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	TextAreaTemplate as template,
	TextArea,
} from '@microsoft/fast-foundation';
import {TextAreaStyles as styles} from './text-area.styles';

/**
 * The VS Code Text Area element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.textarea/ | TextArea} and
 * {@link https://www.fast.design/docs/api/fast-foundation.textareatemplate/ | TextAreaTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-text-area>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 * 
 * @public
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
 * Styles for the VS Code Text Area component
 * @public
 */
export const TextAreaStyles: ElementStyles = styles;
