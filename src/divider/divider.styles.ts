// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {borderWidth, designUnit} from '../design-tokens';

export const DividerStyles = css`
	${display('block')} :host {
		border: none;
		border-top: calc(${borderWidth} * 1px) solid #454545;
		box-sizing: content-box;
		height: 0;
		margin: calc(${designUnit} * 1px) 0;
		width: 100%;
	}
`;
