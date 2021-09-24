// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressRingTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressRingStyles as styles} from './progress-ring.styles';

/**
 * The Visual Studio Code progress ring component.
 *
 * @remarks
 * HTML Element: `<vscode-progress-ring>`
 *
 * @public
 */
@customElement({
	name: 'vscode-progress-ring',
	template,
	styles,
})
export class VSCodeProgressRing extends BaseProgress {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the paused attribute
		// inherited by the FAST Foundation BaseProgress component
		// so that VSCodeProgressRings can never be paused
		if (this.paused) {
			this.paused = false;
		}
	}
}
