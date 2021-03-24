# VSCode Button

The `vscode-button` is a web component implementation of an [HTML Button Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `vscode-components` button supports several visual appearances (primary, secondary, text, install, link).

## Attributes

| Attribute  | Type    | Description                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------- |
| appearance | string  | Determines the visual appearance _(primary, secondary, text, install, link)_ of the button. |
| autofocus  | boolean | Determines if the element should receive document focus on page load.                       |
| disabled   | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.        |

## Usage

### Appearance Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--primary)

```html
<vscode-button appearance="primary">Button Text</vscode-button>
<vscode-button appearance="secondary">Button Text</vscode-button>
<vscode-button appearance="text">Button Text</vscode-button>
<vscode-button appearance="install">Button Text</vscode-button>
<vscode-button appearance="link">Button Text</vscode-button>
```

### Autofocus Attribute

```html
<vscode-button autofocus>Button Text</vscode-button>
```

### Disabled Attribute

```html
<vscode-button disabled>Button Text</vscode-button>
```
