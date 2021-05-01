/**
 * Creates a MutationObserver to watch for DOM changes (i.e. Storybook rerendering
 * a component based on changes to controls) and appropriately applies focus to the
 * given component.
 * @param component
 *
 * @internal
 */
export function focusObserver(component: any) {
	const targetNode = document.getElementById('root');
	const config = {childList: true};

	// Callback function to execute when the children inside <div id="root"> changes
	// (i.e. when Storybook rerenders a component)
	const callback: MutationCallback = function (mutationsList, observer) {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				// Apply focus state to given component
				component.focus();
			}
		}

		// Disconnect observer at the end of callback as to not pollute memory
		// with a bunch of unreferenced observers
		observer.disconnect();
	};

	const observer = new MutationObserver(callback);
	if (targetNode) {
		observer.observe(targetNode, config);
	}
}
