import {CSSDesignToken, DesignToken} from '@microsoft/fast-foundation';
import {initThemeChangeListener} from '../theme/applyTheme';

/**
 * The possible CSSDesignToken generic types.
 */
export type T =
	| string
	| number
	| boolean
	| symbol
	| any[]
	| Uint8Array
	| ({createCSS?(): string} & Record<PropertyKey, any>)
	| null;

/**
 * A mapping of all the Visual Studio Code theme CSS variables mapped to the
 * toolkit design tokens.
 */
export const tokenMappings: {[index: string]: CSSDesignToken<T>} = {};

/**
 * Boolean flag that ensures the VS Code theme listener is initialized once.
 */
let isThemeListenerInitialized = false;

/**
 * Given a design token name, return a new FAST CSSDesignToken.
 *
 * @remarks A VS Code theme CSS variable can be optionally passed to be
 * associated with the design token.
 *
 * @remarks On the first execution the VS Code theme listener will also be
 * initialized.
 *
 * @param name A design token name.
 * @param vscodeThemeVar A VS Code theme CSS variable name to be associated with
 * the design token.
 * @returns A FAST CSSDesignToken that emits a CSS custom property.
 */
export function create<T>(name: string, vscodeThemeVar?: string) {
	const designToken = DesignToken.create<T>(name);

	if (vscodeThemeVar) {
		tokenMappings[vscodeThemeVar] = designToken;
	}
	if (!isThemeListenerInitialized) {
		initThemeChangeListener(tokenMappings);
		isThemeListenerInitialized = true;
	}

	return designToken;
}
