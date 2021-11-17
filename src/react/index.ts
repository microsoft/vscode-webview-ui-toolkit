import React from 'react';
import {provideReactWrapper} from '@microsoft/fast-react-wrapper';
import {provideFASTDesignSystem} from '@microsoft/fast-components';

import {vsCodeButton} from '../button';

const {wrap} = provideReactWrapper(React, provideFASTDesignSystem());

export const VSCodeButton = wrap(vsCodeButton());
