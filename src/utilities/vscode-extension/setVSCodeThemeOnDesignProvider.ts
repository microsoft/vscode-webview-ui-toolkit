// A mapping of all the VSCode theme color CSS variable names mapped to the
// associated attributes that our custom VSCodeDesignSystemProvider defines
// TODO: Fix this use of any type (create an interface for this object?)
const colorTokensMappedToAttributeNames: any = {
	'--vscode-button-background': 'accent-base-color',
	'--vscode-button-hoverBackground': 'accent-hover-color',
	/* Insert more color token attribute name mappings */
};

export function init() {
	// Get all the styles applied to the VSCode extensions <body>
	// Importantly this includes all the CSS variables associated with the current VSCode theme
	const styles = getComputedStyle(document.body);
	const designProvider = document.querySelector(
		'vscode-design-system-provider'
	);

	if (designProvider) {
		// Compute and set the design system provider with the current VS Code theme values
		setVSCodeThemeOnDesignProvider(styles, designProvider);

		// Listen for messages passed to this script by VSCode
		window.addEventListener('message', event => {
			// Recompute and reset the design system provider whenever the VSCode theme is changed
			if (event.data.didThemeChange) {
				setVSCodeThemeOnDesignProvider(styles, designProvider);
			}
		});
	} else {
		// TODO: Some kind of error reported to extension builders that they need to be using
		//       <vscode-design-system-provider> element?
	}
}

function setVSCodeThemeOnDesignProvider(
	styles: CSSStyleDeclaration,
	designProvider: Element
) {
	for (const colorToken in colorTokensMappedToAttributeNames) {
		const attributeName = colorTokensMappedToAttributeNames[colorToken];
		const tokenValue = styles.getPropertyValue(colorToken).toString();
		// Set a given VSCode theme color to its respective VSCodeDesignSystemProvider attribute
		designProvider.setAttribute(attributeName, tokenValue);
	}
}
