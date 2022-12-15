// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	display,
	ElementDefinitionContext,
	FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import {borderWidth, designUnit, dividerBackground} from '../design-tokens.js';

export const dividerStyles = (
	context: ElementDefinitionContext,
	definition: FoundationElementDefinition
) => css`
	${display('block')} :host {
		border: none;
		border-top: calc(${borderWidth} * 1px) solid ${dividerBackground};
		box-sizing: content-box;
		height: 0;
		margin: calc(${designUnit} * 1px) 0;
		width: 100%;
	}
`;
