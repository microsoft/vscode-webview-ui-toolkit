// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {designUnit, inputForeground} from '../design-tokens';
import {TextFieldStyles} from '../text-field/text-field.styles';

export const NumberFieldStyles = css`
	${TextFieldStyles}

	.step-up,
	.step-down {
		padding: 0 calc(${designUnit} * 2px);
		height: 50%;
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.step-up:before,
	.step-down:before {
		content: '';
		display: block;
		border: 5px solid transparent;
	}
	.step-up:before {
		border-bottom-color: ${inputForeground};
		margin-bottom: 2px;
	}
	.step-down:before {
		border-top-color: ${inputForeground};
		margin-top: 2px;
	}
`;
