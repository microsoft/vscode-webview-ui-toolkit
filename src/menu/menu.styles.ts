// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {borderWidth, cornerRadius, designUnit} from '../design-tokens';

export const MenuStyles = css`
	${display('block')} :host {
		--elevation: 11;
		background: #252526;
		border: calc(${borderWidth} * 1px) solid transparent;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
		margin: 0;
		border-radius: calc(${cornerRadius} * 1px);
		padding: calc(${designUnit} * 1px) 0;
		max-width: 368px;
		min-width: 64px;
	}
	:host([slot='submenu']) {
		width: max-content;
		margin: 0 calc(${designUnit} * 1px);
	}
	::slotted(hr) {
		box-sizing: content-box;
		height: 0;
		margin: 0;
		border: none;
		border-top: solid calc(${borderWidth} * 1px) var(--neutral-divider-rest);
	}
	::slotted(vscode-divider) {
		width: 95%;
		margin: auto;
	}
`;
