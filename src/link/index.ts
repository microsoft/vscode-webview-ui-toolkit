import {attr, customElement, ElementStyles} from '@microsoft/fast-element';
import {Anchor, AnchorTemplate as template} from '@microsoft/fast-foundation';
import {ButtonAppearance} from '../button';
import {LinkStyles as styles} from './link.styles';

/**
 * Types of link appearance.
 * @public
 */
export type LinkAppearance = ButtonAppearance | 'hypertext';

/**
 * The VS Code Link element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.anchor/ | Anchor} and
 * {@link https://www.fast.design/docs/api/fast-foundation.anchortemplate/ | AnchorTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-link>`
 *
 * Shadow Option: {@link https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus | delegatesFocus}
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
	 * The appearance the link should have.
	 *
	 * @public
	 * @remarks
	 * HTML Attribute: appearance
	 */
	@attr
	public appearance: LinkAppearance;
	public appearanceChanged(
		oldValue: LinkAppearance,
		newValue: LinkAppearance
	): void {
		if (oldValue !== newValue) {
			this.classList.add(newValue);
			this.classList.remove(oldValue);
		}
	}

	public connectedCallback() {
		super.connectedCallback();

		if (!this.appearance) {
			this.appearance = 'link';
		}
	}

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

/**
 * Styles for the VS Code Link component
 * @public
 */
export const LinkStyles: ElementStyles = styles;
