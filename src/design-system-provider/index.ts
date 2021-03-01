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
	/**
	 * Primary colors
	 */
	@designSystemProperty({
		attribute: 'primary-background-color',
		cssCustomProperty: 'primary-background-color',
		default: DesignSystemDefaults.primaryBackgroundColor,
	})
	public primaryBackgroundColor: string;

	@designSystemProperty({
		attribute: 'primary-foreground-color',
		cssCustomProperty: 'primary-foreground-color',
		default: DesignSystemDefaults.primaryForegroundColor,
	})
	public primaryForegroundColor: string;

	@designSystemProperty({
		attribute: 'primary-hover-background-color',
		cssCustomProperty: 'primary-hover-background-color',
		default: DesignSystemDefaults.primaryHoverBackgroundColor,
	})
	public primaryHoverBackgroundColor: string;

	/**
	 * Secondary colors
	 */
	@designSystemProperty({
		attribute: 'secondary-background-color',
		cssCustomProperty: 'secondary-background-color',
		default: DesignSystemDefaults.secondaryBackgroundColor,
	})
	public secondaryBackgroundColor: string;

	@designSystemProperty({
		attribute: 'secondary-foreground-color',
		cssCustomProperty: 'secondary-foreground-color',
		default: DesignSystemDefaults.secondaryForegroundColor,
	})
	public secondaryForegroundColor: string;

	@designSystemProperty({
		attribute: 'secondary-hover-background-color',
		cssCustomProperty: 'secondary-hover-background-color',
		default: DesignSystemDefaults.secondaryHoverBackgroundColor,
	})
	public secondaryHoverBackgroundColor: string;

	/**
	 * Text link color
	 */
	@designSystemProperty({
		attribute: 'text-link-foreground-color',
		cssCustomProperty: 'text-link-foreground-color',
		default: DesignSystemDefaults.textLinkForegroundColor,
	})
	public textLinkForegroundColor: string;

	/**
	 * Corner radius
	 */
	@designSystemProperty({
		attribute: 'corner-radius',
		cssCustomProperty: 'corner-radius',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.cornerRadius,
	})
	public cornerRadius: number;

	/**
	 * Disabled opacity
	 */
	@designSystemProperty({
		attribute: 'disabled-opacity',
		cssCustomProperty: 'disabled-opacity',
		converter: nullableNumberConverter,
		default: DesignSystemDefaults.disabledOpacity,
	})
	public disabledOpacity: number;

	/**
	 * Outline widths
	 */
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
