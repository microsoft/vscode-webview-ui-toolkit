import {
	defineDesignSystemProvider,
	designSystemProperty,
	DesignSystemProvider,
	DesignSystemProviderTemplate as template,
} from '@microsoft/fast-foundation';
import {css, nullableNumberConverter} from '@microsoft/fast-element';
import {DesignSystem, DesignSystemDefaults} from '../vscode-design-system';

@defineDesignSystemProvider({
	name: 'vscode-design-system-provider',
	template,
	styles: css`
		:host {
			display: block;
		}
	`,
})
export class VSCodeDesignSystemProvider
	extends DesignSystemProvider
	implements DesignSystem {
	// Implementation of the accent-base-color design token
	@designSystemProperty({
		attribute: 'accent-base-color',
		cssCustomProperty: 'accent-base-color',
		default: DesignSystemDefaults.accentBaseColor,
	})
	public accentBaseColor: string;

	// Implementation of the accent-hover-color design token
	@designSystemProperty({
		attribute: 'accent-hover-color',
		cssCustomProperty: 'accent-hover-color',
		default: DesignSystemDefaults.accentHoverColor,
	})
	public accentHoverColor: string;

	// Implementation of the corner-radius design token
	@designSystemProperty({
		attribute: 'corner-radius',
		cssCustomProperty: 'corner-radius',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.cornerRadius,
	})
	public cornerRadius: number;

	/* Insert implementation of other design tokens */
}
