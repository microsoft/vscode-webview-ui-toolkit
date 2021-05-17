import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';

export const ComboboxStyles = css`
	${display('inline-flex')} :host {
		background: var(--dropdown-background-color);
		border-radius: calc(var(--dropdown-corner-radius-color) * 1px);
		border: calc(var(--border-width) * 1px) solid
			var(--dropdown-border-color);
		box-sizing: border-box;
		color: var(--dropdown-foreground-color);
		contain: contents;
		height: calc(${heightNumber} * 1px);
		position: relative;
		user-select: none;
		min-width: 250px;
		outline: none;
	}
	.listbox {
		background: var(--dropdown-background-color);
		border: calc(var(--border-width) * 1px) solid
			var(--dropdown-border-color);
		border-radius: calc(var(--dropdown-corner-radius-color) * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: calc(var(--max-height) - (${heightNumber} * 1px));
		padding: calc(var(--design-unit) * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		cursor: pointer;
		display: flex;
		font-size: var(--type-ramp-base-font-size);
		font: inherit;
		line-height: var(--type-ramp-base-line-height);
		padding: 0 calc(var(--design-unit) * 2.25px);
		width: 100%;
	}
	.selected-value {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - 4px);
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0;
		font-size: var(--type-ramp-base-font-size);
		line-height: var(--type-ramp-base-line-height);
	}
	.selected-value:hover,
	.selected-value:focus {
		outline: none;
	}
	:host(:not([disabled]):hover) {
		background: var(--dropdown-background-color);
		border-color: var(--dropdown-border-color);
	}
	:host(:focus) {
		border-color: var(--focus-border-color);
	}
	:host(:${focusVisible}) {
		border-color: var(--focus-border-color);
	}
	:host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		box-shadow: 0 0 0 calc(var(--focus-border-width) * 1px) inset
			var(--focus-border-color);
		border-color: var(--focus-border-color);
		background: #094771;
		color: var(--dropdown-foreground-color);
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: var(--disabled-opacity);
	}
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]:hover) {
		background: var(--dropdown-background-color);
		color: var(--dropdown-foreground-color);
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		background: #094771;
		border-color: var(--dropdown-border-color);
		border-radius: calc(var(--dropdown-corner-radius-color) * 1px);
	}
	:host([open]),
	:host([open]) .listbox {
		border: none;
	}
	:host([open]) .control {
		padding: 0 calc((var(--design-unit) * 2.25px) + 1px);
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']),
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		border-bottom: 0;
		bottom: calc(${heightNumber} * 1px);
	}
	:host([open][position='below']) .listbox {
		border-top: 0;
		top: calc(${heightNumber} * 1px);
	}
	.selected-value {
		font-family: var(--body-font);
		font-size: var(--type-ramp-base-font-size);
		flex: 1 1 auto;
		text-align: start;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(var(--design-unit) * 4px);
		min-width: calc(var(--design-unit) * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;
