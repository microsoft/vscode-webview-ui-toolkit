// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {customElement} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressRingTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressRingStyles as styles} from './progress-ring.styles';

/**
 * The VS Code Progress Ring element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.baseprogress/ | BaseProgress} and
 * {@link https://www.fast.design/docs/api/fast-foundation.progressringtemplate/ | ProgressRingTemplate}.
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
	 * Component lifecycle method that runs when the element is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// This will override any usage of the paused attribute
		// which is inherited from the FAST Foundation BaseProgress
		// component so that VSCodeProgressRings can never be paused
		if (this.paused) {
			this.paused = false;
		}

		// Defines a default aria label that screen readers can access
		this.setAttribute('aria-label', 'Loading');
	}

	/**
	 * Component lifecycle method that runs when an attribute of the
	 * element is changed.
	 *
	 * @param attrName - The attribute that was changed
	 * @param oldVal - The old value of the attribute
	 * @param newVal - The new value of the attribute
	 *
	 * @internal
	 */
	public attributeChangedCallback(
		attrName: string,
		oldVal: string,
		newVal: string
	) {
		if (attrName === 'value') {
			// This will override any usage of the value attribute
			// which is inherited from the FAST Foundation BaseProgress
			// component so that VSCodeProgressRings can never set
			// to be a determinate state
			this.removeAttribute('value');
		}
	}
}
