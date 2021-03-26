/**
 * Creates and returns an SVG element that renders a VSCode Codicon icon.
 * @param iconName The name of the Codicon icon that should be created
 * @param slotName (optional) The name of the slot that the icon will be inserted into
 */
export function createCodiconIcon(
	iconName: string,
	slotName?: string
): HTMLElement {
	const icon = document.createElement('svg');
	if (slotName) {
		icon.setAttribute('slot', slotName);
	}
	icon.classList.add('codicon');
	icon.classList.add(`codicon-${iconName}`);
	return icon;
}
