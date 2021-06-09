import {css} from '@microsoft/fast-element';
import {display, focusVisible} from '@microsoft/fast-foundation';
import {
	borderWidth,
	breadcrumbItemForeground,
	breadcrumbItemForegroundHover,
	breadcrumbSeparatorMarginHorizontal,
	designUnit,
	focusBorderWidth,
	fontFamily,
	iconHeight,
	iconWidth,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const BreadcrumbItemStyles = css`
    ${display('inline-flex')} :host {
        background: transparent;
        box-sizing: border-box;
        color: ${breadcrumbItemForeground};
        font-family: ${fontFamily};
        font-size: ${typeRampBaseFontSize};
        fill: current;
        line-height: ${typeRampBaseLineHeight};
        min-width: calc(${designUnit} * 7px);
        outline: none;
    }
    .listitem {
        display: flex;
        align-items: center;
    }
    .separator {
        display: flex;
        align-items: center;
        margin: 0 ${breadcrumbSeparatorMarginHorizontal};
    }
    .control {
        align-items: center;
        box-sizing: border-box;
        color: ${breadcrumbItemForeground};
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }
    .control:hover {
        color: ${breadcrumbItemForegroundHover};
    }
    .control:active {
        color: ${breadcrumbItemForegroundHover};
    }
    .control .content {
        position: relative;
    }
    .control .content::before {
        content: "";
        display: block;
        height: calc(${borderWidth} * 1px);
        left: 0;
        position: absolute;
        right: 0;
        top: calc(1em + 4px);
        width: 100%;
    }
    .control:hover .content::before {
        background: ${breadcrumbItemForegroundHover};
    }
    .control:active .content::before {
        background: ${breadcrumbItemForegroundHover};
    }
    .control:${focusVisible} .content::before {
        background: ${breadcrumbItemForeground};
        height: calc(${focusBorderWidth} * 1px);
    }
    .control:not([href]) {
        color: ${breadcrumbItemForeground};
        cursor: default;
    }
    .control:not([href]) .content::before {
        background: none;
    }
    .start,
    .end {
        display: flex;
    }
    ::slotted(svg), ::slotted(span) {
        width: ${iconWidth};
        height: ${iconHeight};
    }
    .start {
        margin-inline-end: 6px;
    }
    .end {
        margin-inline-start: 6px;
    }
`;
