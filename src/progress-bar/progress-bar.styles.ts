import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {cornerRadius, designUnit, progressBackgroundColor} from '../design-tokens';

export const ProgressBarStyles = css`
	${display('flex')} :host {
		align-items: center;
		outline: none;
		height: calc(${designUnit} * 1px);
		margin: calc(${designUnit} * 1px) 0;
	}
	.progress {
		background-color: transparent;
		border-radius: calc(${cornerRadius} * 1px);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}
	.determinate {
		background-color: ${progressBackgroundColor};
		border-radius: calc(${cornerRadius} * 1px);
		height: 100%;
		transition: all 0.2s ease-in-out;
		display: flex;
	}
	.indeterminate {
		height: 100%;
		border-radius: calc(${cornerRadius} * 1px);
		display: flex;
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.indeterminate-indicator-1 {
		position: absolute;
		opacity: 0;
		height: 100%;
		background-color: ${progressBackgroundColor};
		border-radius: calc(${cornerRadius} * 1px);
		animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
		width: 40%;
		animation: indeterminate-1 2s infinite;
	}
	.indeterminate-indicator-2 {
		position: absolute;
		opacity: 0;
		height: 100%;
		background-color: ${progressBackgroundColor};
		border-radius: calc(${cornerRadius} * 1px);
		animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
		width: 60%;
		animation: indeterminate-2 2s infinite;
	}
	:host([paused]) .indeterminate-indicator-1,
	:host([paused]) .indeterminate-indicator-2 {
		animation-play-state: paused;
		background-color: transparent;
	}
	:host([paused]) .determinate {
		background-color: #dddddd;
	}
	@keyframes indeterminate-1 {
		0% {
			opacity: 1;
			transform: translateX(-100%);
		}
		70% {
			opacity: 1;
			transform: translateX(300%);
		}
		70.01% {
			opacity: 0;
		}
		100% {
			opacity: 0;
			transform: translateX(300%);
		}
	}
	@keyframes indeterminate-2 {
		0% {
			opacity: 0;
			transform: translateX(-150%);
		}
		29.99% {
			opacity: 0;
		}
		30% {
			opacity: 1;
			transform: translateX(-150%);
		}
		100% {
			transform: translateX(166.66%);
			opacity: 1;
		}
	}
`;
