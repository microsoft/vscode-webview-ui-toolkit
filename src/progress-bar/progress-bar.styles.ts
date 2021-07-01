// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {cornerRadius, designUnit, progressBackground} from '../design-tokens';

export const ProgressBarStyles = css`
	${display('flex')} :host {
		align-items: center;
		height: calc((${designUnit} + 1) * 1px);
		margin: calc(${designUnit} * 1px) 0;
		outline: none;
		width: 100%;
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
		background-color: ${progressBackground};
		border-radius: calc(${cornerRadius} * 1px);
		height: 100%;
		transition: all 0.2s ease-in-out;
		display: flex;
	}
	.indeterminate {
		border-radius: calc(${cornerRadius} * 1px);
		display: flex;
		height: 100%;
		position: relative;
		overflow: hidden;
		width: 100%;
	}
	.indeterminate-indicator-1 {
		animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
		animation: indeterminate-1 2s infinite;
		background-color: ${progressBackground};
		border-radius: calc(${cornerRadius} * 1px);
		height: 100%;
		position: absolute;
		opacity: 0;
		width: 40%;
	}
	.indeterminate-indicator-2 {
		animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
		animation: indeterminate-2 2s infinite;
		background-color: ${progressBackground};
		border-radius: calc(${cornerRadius} * 1px);
		height: 100%;
		position: absolute;
		opacity: 0;
		width: 60%;
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
