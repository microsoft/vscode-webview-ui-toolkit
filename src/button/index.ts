import {css, customElement} from '@microsoft/fast-element';
import {Button, ButtonTemplate as template} from '@microsoft/fast-foundation';

const styles = css`
	.control {
		border-radius: calc(var(--corner-radius) * 1px);
		color: white;
		background-color: var(--accent-base-color);
		border: none;
		padding: 10px 10px;
		box-sizing: border-box;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.control:hover {
		background-color: var(--accent-hover-color);
	}
`;

@customElement({
	name: 'vscode-button',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeButton extends Button {
	/**
	 * This new VSCode button should work right out of the box because it inherits all the
	 * behaviors/functionality from the FAST Foundation Button class.
	 *
	 * With that said, we can still add new behaviors/functionality to this VSCode button if we want.
	 */
}
