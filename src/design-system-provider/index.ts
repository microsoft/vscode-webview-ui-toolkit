import {
	defineDesignSystemProvider,
	designSystemProperty,
	DesignSystemProvider,
	DesignSystemProviderTemplate as template,
} from '@microsoft/fast-foundation';
import {nullableNumberConverter} from '@microsoft/fast-element';
import {DesignSystem, DesignSystemDefaults} from '../vscode-design-system';
import {DesignSystemProviderStyles as styles} from './design-system-provider.styles';

/**
 * The VSCode DesignSystemProvider Element. Extends {@link @microsoft/fast-foundation#DesignSystemProvider},
 * {@link @microsoft/fast-foundation#DesignSystemProviderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<vscode-design-system-provider\>
 */
@defineDesignSystemProvider({
	name: 'vscode-design-system-provider',
	template,
	styles,
})
export class VSCodeDesignSystemProvider
	extends DesignSystemProvider
	implements DesignSystem {
	@designSystemProperty({
		attribute: 'accent-base-color',
		cssCustomProperty: 'accent-base-color',
		default: DesignSystemDefaults.accentBaseColor,
	})
	public accentBaseColor: string;

	@designSystemProperty({
		attribute: 'accent-foreground-color',
		cssCustomProperty: 'accent-foreground-color',
		default: DesignSystemDefaults.accentForegroundColor,
	})
	public accentForegroundColor: string;

	@designSystemProperty({
		attribute: 'accent-hover-color',
		cssCustomProperty: 'accent-hover-color',
		default: DesignSystemDefaults.accentHoverColor,
	})
	public accentHoverColor: string;

	@designSystemProperty({
		attribute: 'corner-radius',
		cssCustomProperty: 'corner-radius',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.cornerRadius,
	})
	public cornerRadius: number;

	@designSystemProperty({
		attribute: 'disabled-opacity',
		cssCustomProperty: 'disabled-opacity',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.disabledOpacity,
	})
	public disabledOpacity: number;

	@designSystemProperty({
		attribute: 'outline-width',
		cssCustomProperty: 'outline-width',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.outlineWidth,
	})
	public outlineWidth: number;

	@designSystemProperty({
		attribute: 'focus-outline-width',
		cssCustomProperty: 'focus-outline-width',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.focusOutlineWidth,
	})
	public focusOutlineWidth: number;
}
