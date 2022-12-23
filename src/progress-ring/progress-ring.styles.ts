// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	display,
	ElementDefinitionContext,
	ProgressRingOptions,
} from '@microsoft/fast-foundation';
import {designUnit, progressBackground} from '../design-tokens.js';

export const progressRingStyles = (
	context: ElementDefinitionContext,
	definition: ProgressRingOptions
) => css`
	${display('flex')} :host {
		align-items: center;
		outline: none;
		height: calc(${designUnit} * 7px);
		width: calc(${designUnit} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${designUnit} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${progressBackground};
		stroke-width: calc(${designUnit} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
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
