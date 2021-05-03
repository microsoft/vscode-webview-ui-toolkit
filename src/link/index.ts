import {customElement} from '@microsoft/fast-element';
import {Anchor, AnchorTemplate as template} from '@microsoft/fast-foundation';
import {LinkStyles as styles} from './link.styles';

/**
 * The VS Code Link element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.anchor/ | Anchor} and
 * {@link https://www.fast.design/docs/api/fast-foundation.anchortemplate/ | AnchorTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-link>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
 *
 * @public
 */
@customElement({
	name: 'vscode-link',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeLink extends Anchor {
	/**
	 * Applies 'icon-only' class when there is only an SVG in the default slot
	 *
	 * @internal
	 */
	public defaultSlottedContentChanged(oldValue: any, newValue: any): void {
		const slottedElements = this.defaultSlottedContent.filter(
			x => x.nodeType === Node.ELEMENT_NODE
		);
		if (
			slottedElements.length === 1 &&
			slottedElements[0] instanceof SVGElement
		) {
			this.control.classList.add('icon-only');
		} else {
			this.control.classList.remove('icon-only');
		}
	}
}
