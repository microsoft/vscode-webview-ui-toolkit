// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	ElementDefinitionContext,
	FoundationElementDefinition,
} from '@microsoft/fast-foundation';

export const dataGridStyles = (
	context: ElementDefinitionContext,
	definition: FoundationElementDefinition
) => css`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`;
