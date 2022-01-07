import {addons} from '@storybook/addons';
import customTheme from './customTheme';

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'bottom',
	sidebarAnimations: true,
	enableShortcuts: false,
	isToolshown: true,
	theme: customTheme,
	selectedPanel: undefined,
	initialActive: 'sidebar',
	showRoots: true,
});
