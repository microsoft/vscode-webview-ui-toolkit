import {css} from '@microsoft/fast-element';
import {display, focusVisible} from '@microsoft/fast-foundation';
import {heightNumber} from '../utilities/styles';

export const BreadcrumbItemStyles = css`
    ${display('inline-flex')} :host {
        background: transparent;
        color: var(--breadcrumb-item-foreground-color);
        box-sizing: border-box;
        font-family: var(--body-font);
        font-size: var(--type-ramp-base-font-size);
        fill: currentColor;
        line-height: var(--type-ramp-base-line-height);
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
        color: var(--breadcrumb-item-foreground-color);
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }
    .control:hover {
        color: var(--breadcrumb-item-foreground-hover-color);
    }
    .control:active {
        color: var(--breadcrumb-item-foreground-hover-color);
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
        background: var(--breadcrumb-item-foreground-hover-color);
    }
    .control:active .content::before {
        background: var(--breadcrumb-item-foreground-hover-color);
    }
    .control:${focusVisible} .content::before {
        background: var(--breadcrumb-item-foreground-color);
        height: calc(var(--focus-border-width) * 1px);
    }
    .control:not([href]) {
        color: var(--breadcrumb-item-foreground-color);
        cursor: default;
    }
    .control:not([href]) .content::before {
        background: none;
    }
    .start,
    .end {
        display: flex;
    }
    ::slotted(svg) {
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
