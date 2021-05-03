import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';

export const MenuItemStyles = css`
	${display('grid')} :host {
		contain: layout;
		overflow: visible;
		font-family: var(--body-font);
		outline: none;
		box-sizing: border-box;
		height: calc(${heightNumber} * 1px);
		grid-template-columns: minmax(24px, auto) 1fr minmax(42px, auto);
		grid-template-rows: auto;
		justify-items: center;
		align-items: center;
		padding: 0;
		margin: 0 calc(var(--design-unit) * 1px);
		white-space: nowrap;
		color: #cccccc;
		fill: currentcolor;
		cursor: pointer;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
		border-radius: calc(var(--corner-radius) * 1px);
		border: calc(var(--focus-outline-width) * 1px) solid transparent;
	}
	:host(:${focusVisible}) {
		border-color: transparent;
		background: #062f4a;
		color: #ffffff;
	}
	:host(:hover) {
		background: #062f4a;
		color: #ffffff;
	}
	:host([aria-checked='true']),
	:host(:active),
	:host(.expanded) {
		background: transparent;
		color: #cccccc;
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: var(--disabled-opacity);
	}
	:host([disabled]:hover) {
		color: #cccccc;
		fill: currentcolor;
		background: transparent;
	}
	:host([disabled]:hover) .start,
	:host([disabled]:hover) .end,
	:host([disabled]:hover)::slotted(svg) {
		fill: #ffffff;
	}
	.expand-collapse-glyph {
		width: 16px;
		height: 16px;
		transition: transform 0.1s linear;
		fill: currentcolor;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.start,
	.end {
		display: flex;
		justify-content: center;
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
	}
	:host(:hover) .start,
	:host(:hover) .end,
	:host(:hover)::slotted(svg),
	:host(:active) .start,
	:host(:active) .end,
	:host(:active)::slotted(svg) {
		fill: #ffffff;
	}
	:host([aria-haspopup='menu']),
	:host([role='menuitemcheckbox']),
	:host([role='menuitemradio']) {
		display: grid;
		grid-template-columns: auto auto 1fr minmax(42px, auto);
		align-items: center;
		min-height: 32px;
	}
	:host .input-container,
	:host .expand-collapse-glyph-container {
		display: none;
	}
	:host([aria-haspopup='menu']) .expand-collapse-glyph-container,
	:host([role='menuitemcheckbox']) .input-container,
	:host([role='menuitemradio']) .input-container {
		display: grid;
		margin-inline-end: 10px;
	}
	:host([aria-haspopup='menu']) .start,
	:host([role='menuitemcheckbox']) .start,
	:host([role='menuitemradio']) .start {
		grid-column-start: 2;
		margin-inline-end: 10px;
	}
	:host([aria-haspopup='menu']) .content,
	:host([role='menuitemcheckbox']) .content,
	:host([role='menuitemradio']) .content {
		grid-column-start: 3;
	}
	:host([aria-haspopup='menu']) .end,
	:host([role='menuitemcheckbox']) .end,
	:host([role='menuitemradio']) .end {
		grid-column-start: 4;
	}
	:host .expand-collapse,
	:host .checkbox,
	:host .radio {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		outline: none;
		margin-inline-start: 10px;
	}
	:host .checkbox,
	:host .radio {
		border: calc(var(--border-width) * 1px) solid transparent;
	}
	:host([aria-checked='true']) .checkbox,
	:host([aria-checked='true']) .radio {
		background: #dddddd;
		border-color: red;
	}
	:host .checkbox {
		border-radius: calc(var(--corner-radius) * 1px);
	}
	:host .radio {
		border-radius: 999px;
	}
	:host .checkbox-indicator,
	:host .radio-indicator,
	:host .expand-collapse-indicator,
	::slotted([slot='checkbox-indicator']),
	::slotted([slot='radio-indicator']),
	::slotted([slot='expand-collapse-indicator']) {
		display: none;
	}
	:host([aria-checked='true']) .checkbox-indicator,
	:host([aria-checked='true']) ::slotted([slot='checkbox-indicator']) {
		width: 100%;
		height: 100%;
		display: block;
		fill: #cccccc;
		pointer-events: none;
	}
	:host([aria-checked='true']) .radio-indicator {
		position: absolute;
		top: 4px;
		left: 4px;
		right: 4px;
		bottom: 4px;
		border-radius: 999px;
		display: block;
		background: #cccccc;
		pointer-events: none;
	}
	:host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
		display: block;
		pointer-events: none;
	}
`;
