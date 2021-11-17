import React from 'react';
import {provideReactWrapper} from '@microsoft/fast-react-wrapper';
import {vsCodeButton} from '.';

const {wrap} = provideReactWrapper(React);

export const VSCodeButton = wrap(vsCodeButton());
