import { customElement, css } from "@microsoft/fast-element";
import { Button, ButtonTemplate as template } from "@microsoft/fast-foundation";

const styles = css`
  .control {
    background-color: var(--accent-base-color);       <-- Accent Base Color design token
    border-radius: calc(var(--corner-radius) * 1px);  <-- Corner Radius design token
    /* Insert other button styles */
  }

  .control:hover {
    background-color: var(--accent-hover-color);      <-- Accent Hover Color design token
    /* Insert other button styles */
  }

  /* Insert other button styles */
`;

@customElement({
  name: "vscode-button",
  template,
  styles,
  shadowOptions: {
    delegatesFocus: true,
  },
})
export class VSCodeButton extends Button {
  /**
   * This new VSCode button should work right out of the box because it inherits all the
   * behaviors/functionality from the FAST Foundation Button class.
   *
   * With that said, we can still add new behaviors/functionality to this VSCode button if we want.
   */
}
