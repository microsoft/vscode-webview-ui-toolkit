import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import ButtonTemplate from './fixtures/button.html';
import {VSCodeButton} from './index';

// Prevent tree-shaking
VSCodeButton;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Button',
};

export const Button = (): string => ButtonTemplate;
