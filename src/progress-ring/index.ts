import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	BaseProgress,
	ProgressRingTemplate as template,
} from '@microsoft/fast-foundation';
import {ProgressRingStyles as styles} from './progress-ring.styles';

/**
 * The VSCode Progress Ring element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.baseprogress/ BaseProgress} and
 * {@link https://www.fast.design/docs/api/fast-foundation.progressringtemplate/ ProgressRingTemplate}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-progress-ring>`
 */
@customElement({
	name: 'vscode-progress-ring',
	template,
	styles,
})
export class VSCodeProgressRing extends BaseProgress {}

/**
 * Styles for the VSCode Progress Ring component
 * @public
 */
export const ProgressRingStyles: ElementStyles = styles;
