// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressBarStyles as styles} from './progress-bar.styles';

/**
 * The VS Code Progress Bar element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.baseprogress/ | BaseProgress} and
 * {@link https://www.fast.design/docs/api/fast-foundation.progresstemplate/ | ProgressTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-progress-bar>`
 *
 * @public
 */
@customElement({
	name: 'vscode-progress-bar',
	template,
	styles,
})
export class VSCodeProgressBar extends BaseProgress {
	/**
	 * Component lifecycle method that runs when the element is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the paused attribute
		// provided by the FAST Foundation BaseProgress component
		// so that VSCodeProgressBars can never be paused
		if (this.paused) {
			this.paused = false;
		}
	}
}
