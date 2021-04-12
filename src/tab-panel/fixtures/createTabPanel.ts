import {VSCodeTabPanel} from '../index';

export type TabPanelArgs = {
	label?: string;
	hasComplexContent?: boolean;
};

export function createTabPanel({label, hasComplexContent}: TabPanelArgs) {
	const tabPanel = new VSCodeTabPanel();

	if (label && !hasComplexContent) {
		tabPanel.textContent = label;
	}
	if (hasComplexContent) {
		const emojis = ['🍓', '🍎', '🍊', '🍍', '🥭', '🍋', '🍇'];
		const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
		tabPanel.innerHTML = `
        <section style="display: flex; flex-direction: column; width: 100%;">
            <h1 style="margin-top: 0;">Smoothie Maker ${randomEmoji}</h1>
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

	return tabPanel;
}
