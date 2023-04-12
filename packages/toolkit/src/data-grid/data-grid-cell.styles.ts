// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {
	ElementDefinitionContext,
	focusVisible,
	FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import {
	borderWidth,
	cornerRadius,
	designUnit,
	focusBorder,
	fontFamily,
	foreground,
	listActiveSelectionBackground,
	listActiveSelectionForeground,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens.js';

export const dataGridCellStyles = (
	context: ElementDefinitionContext,
	definition: FoundationElementDefinition
) => css`
	:host {
		padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
		color: ${foreground};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${fontFamily};
		font-size: ${typeRampBaseFontSize};
		line-height: ${typeRampBaseLineHeight};
		font-weight: 400;
		border: solid calc(${borderWidth} * 1px) transparent;
		border-radius: calc(${cornerRadius} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${focusVisible}),
	:host(:focus),
	:host(:active) {
		background: ${listActiveSelectionBackground};
		border: solid calc(${borderWidth} * 1px) ${focusBorder};
		color: ${listActiveSelectionForeground};
		outline: none;
	}
	:host(:${focusVisible}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${listActiveSelectionForeground} !important;
	}
`;
