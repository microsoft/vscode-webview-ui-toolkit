// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {css} from '@microsoft/fast-element';
import {display} from '@microsoft/fast-foundation';
import {borderWidth, designUnit} from '../design-tokens';

export const DividerStyles = css`
	${display('block')} :host {
		box-sizing: content-box;
		height: 0;
		margin: calc(${designUnit} * 1px) 0;
		border: none;
		border-top: solid calc(${borderWidth} * 1px) #454545;
	}
`;
