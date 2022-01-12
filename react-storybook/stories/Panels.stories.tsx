import React from 'react';

import {
	VSCodeBadge,
	VSCodePanels,
	VSCodePanelTab,
	VSCodePanelView,
} from '../../src/react';

// @ts-ignore
VSCodeBadge.displayName = 'VSCodeBadge';
// @ts-ignore
VSCodePanels.displayName = 'VSCodePanels';
// @ts-ignore
VSCodePanelTab.displayName = 'VSCodePanelTab';
// @ts-ignore
VSCodePanelView.displayName = 'VSCodePanelView';

export default {
	title: 'Library/Panels',
	component: VSCodePanels,
	argTypes: {
		onChange: {action: 'change'},
		activeId: {
			control: {
				type: 'select',
				options: ['problems', 'output', 'debug-console', 'terminal'],
			},
		},
		ariaLabel: {control: 'text'},
		withBadges: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = args => {
	const {activeId, withBadges, ...rest} = args;
	console.log(typeof withBadges);

	const MaybeBadge = () => {
		return withBadges ? <VSCodeBadge>2</VSCodeBadge> : null;
	};

	return (
		// BUG: should be camel cased
		<VSCodePanels activeid={activeId} {...rest}>
			<VSCodePanelTab id="problems">
				Problems <MaybeBadge />
			</VSCodePanelTab>
			<VSCodePanelTab id="output">
				Output <MaybeBadge />
			</VSCodePanelTab>
			<VSCodePanelTab id="debug-console">
				Debug Console <MaybeBadge />
			</VSCodePanelTab>
			<VSCodePanelTab id="terminal">
				Terminal <MaybeBadge />
			</VSCodePanelTab>
			<VSCodePanelView id="view-1">Problems content.</VSCodePanelView>
			<VSCodePanelView id="view-2">Output content.</VSCodePanelView>
			<VSCodePanelView id="view-3">Debug content.</VSCodePanelView>
			<VSCodePanelView id="view-4">Terminal content.</VSCodePanelView>
		</VSCodePanels>
	);
};

export const Default: any = Template.bind({});
Default.args = {
	activeId: '',
};

export const WithActiveTab: any = Template.bind({});
WithActiveTab.args = {
	activeId: 'output',
};

export const WithBadges: any = Template.bind({});
WithBadges.args = {
	withBadges: true,
};
