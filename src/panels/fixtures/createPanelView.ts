// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodePanelView} from '../index';

export type PanelViewArgs = {
	label?: string;
	hasComplexContent?: boolean;
};

export function createPanelView({label, hasComplexContent}: PanelViewArgs) {
	const panelView = new VSCodePanelView();

	if (label && !hasComplexContent) {
		panelView.textContent = label;
	}
	if (hasComplexContent) {
		panelView.innerHTML = /*html*/ `
            <section style="display: flex; flex-direction: column; width: 100%;">
                <h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>
                <vscode-checkbox>Apples</vscode-checkbox>
                <vscode-checkbox>Oranges</vscode-checkbox>
                <vscode-checkbox>Grapes</vscode-checkbox>
                <vscode-checkbox disabled>Blueberries</vscode-checkbox>
                <vscode-checkbox>Pineapple</vscode-checkbox>
                <vscode-checkbox>Mango</vscode-checkbox>
                <vscode-checkbox>Lemon</vscode-checkbox>
                <vscode-button style="margin-top: 1rem;">Make Smoothie!</vscode-button>
            </section>
        `;
	}

	return panelView;
}
