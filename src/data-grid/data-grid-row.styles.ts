// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	ElementDefinitionContext,
	FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import {
	background,
	contrastActiveBorder,
	designUnit,
	listHoverBackground,
} from '../design-tokens.js';

export const dataGridRowStyles = (
	context: ElementDefinitionContext,
	definition: FoundationElementDefinition
) => css`
	:host {
		display: grid;
		padding: calc((${designUnit} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${background};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${listHoverBackground};
		outline: 1px dotted ${contrastActiveBorder};
		outline-offset: -1px;
	}
`;
