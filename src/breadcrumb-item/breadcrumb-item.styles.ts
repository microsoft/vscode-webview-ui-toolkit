import {css} from '@microsoft/fast-element';
import {display, focusVisible} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles/size';
import {
	breadcrumbItemForegroundColor,
	breadcrumbItemForegroundHoverColor,
	focusBorderWidth,
	typeRampBaseFontSize,
	typeRampBaseLineHeight,
} from '../design-tokens';

export const BreadcrumbItemStyles = css`
    ${display('inline-flex')} :host {
        background: transparent;
        color: ${breadcrumbItemForegroundColor};
        box-sizing: border-box;
        font-family: var(--body-font);
        font-size: ${typeRampBaseFontSize};
        fill: currentColor;
        line-height: ${typeRampBaseLineHeight};
        min-width: calc(${heightNumber} * 1px);
        outline: none;
    }
    .listitem {
        display: flex;
        align-items: center;
    }
    .separator {
        display: flex;
        align-items: center;
        margin: 0 6px;
    }
    .control {
        align-items: center;
        box-sizing: border-box;
        color: ${breadcrumbItemForegroundColor};
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }
    .control:hover {
        color: ${breadcrumbItemForegroundHoverColor};
    }
    .control:active {
        color: ${breadcrumbItemForegroundHoverColor};
    }
    .control .content {
        position: relative;
    }
    .control .content::before {
        content: "";
        display: block;
        height: calc(var(--outline-width) * 1px);
        left: 0;
        position: absolute;
        right: 0;
        top: calc(1em + 4px);
        width: 100%;
    }
    .control:hover .content::before {
        background: ${breadcrumbItemForegroundHoverColor};
    }
    .control:active .content::before {
        background: ${breadcrumbItemForegroundHoverColor};
    }
    .control:${focusVisible} .content::before {
        background: ${breadcrumbItemForegroundColor};
        height: calc(${focusBorderWidth} * 1px);
    }
    .control:not([href]) {
        color: ${breadcrumbItemForegroundColor};
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
        width: 16px;
        height: 16px;
    }
    .start {
        margin-inline-end: 6px;
    }
    .end {
        margin-inline-start: 6px;
    }
`;
