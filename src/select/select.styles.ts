import {css} from '@microsoft/fast-element';
import {
	disabledCursor,
	display,
	focusVisible,
} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/index';

export const SelectStyles = css`
	${display('inline-flex')} :host {
		background: var(--select-background-color);
		border-radius: calc(var(--select-corner-radius-color) * 1px);
		border: calc(var(--outline-width) * 1px) solid
			var(--select-border-color);
		box-sizing: border-box;
		color: var(--select-foreground-color);
		contain: contents;
		height: calc(${heightNumber} * 1px);
		position: relative;
		user-select: none;
		min-width: 250px;
		outline: none;
	}
	.listbox {
		background: var(--select-background-color);
		border: calc(var(--outline-width) * 1px) solid
			var(--select-border-color);
		border-radius: calc(var(--select-corner-radius-color) * 1px);
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
	:host(:not([disabled]):hover) {
		background: var(--select-background-color);
		border-color: var(--select-border-color);
	}
	:host(:${focusVisible}) {
		border-color: var(--focus-border-color);
	}
	:host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		box-shadow: 0 0 0 calc(var(--focus-border-width) * 1px) inset
			var(--focus-border-color);
		border-color: var(--focus-border-color);
		background: var(--select-background-color);
		color: var(--select-foreground-color);
	}
	:host([disabled]) {
		cursor: ${disabledCursor};
		opacity: var(--disabled-opacity);
	}
	:host([disabled]) .control {
		cursor: ${disabledCursor};
	}
	:host([disabled]:hover) {
		background: var(--select-background-color);
		color: var(--select-foreground-color);
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		background: var(--select-background-color);
		border-color: var(--select-border-color);
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
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
	::slotted(svg) {
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
