import {customElement, ElementStyles} from '@microsoft/fast-element';
import {Badge, BadgeTemplate as template} from '@microsoft/fast-foundation';
import {BadgeStyles as styles} from './badge.styles';

/**
 * The VS Code Badge element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.badge/ | Badge} and
 * {@link https://www.fast.design/docs/api/fast-foundation.badgetemplate/ | BadgeTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-badge>`
 */
@customElement({
	name: 'vscode-badge',
	template,
	styles,
})
export class VSCodeBadge extends Badge {}

/**
 * Styles for the VS Code Badge component
 * @public
 */
export const BadgeStyles: ElementStyles = styles;
