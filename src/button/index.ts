import {customElement} from '@microsoft/fast-element';
import {Button, ButtonTemplate as template} from '@microsoft/fast-foundation';
import {ButtonStyles as styles} from './button.styles';

@customElement({
	name: 'vscode-button',
	template,
	styles,
	shadowOptions: {
		delegatesFocus: true,
	},
})
export class VSCodeButton extends Button {}
