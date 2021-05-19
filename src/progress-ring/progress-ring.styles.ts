import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';
import {progressBackgroundColor} from '../design-tokens';

export const ProgressRingStyles = css`
	${display('flex')} :host {
		align-items: center;
		outline: none;
		height: calc(${heightNumber} * 1px);
		width: calc(${heightNumber} * 1px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		stroke: transparent;
		fill: none;
		stroke-width: 2px;
	}
	.determinate {
		stroke: ${progressBackgroundColor};
		fill: none;
		stroke-width: 2px;
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
	}
	.indeterminate-indicator-1 {
		stroke: ${progressBackgroundColor};
		fill: none;
		stroke-width: 2px;
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	:host([paused]) .indeterminate-indicator-1 {
		animation-play-state: paused;
		stroke: transparent;
	}
	:host([paused]) .determinate {
		stroke: #dddddd;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;
