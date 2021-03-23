# VSCode Badge

The `vscode-badge` component is used to highlight an item and attract attention or flag status.

## Attributes

| Attribute | Type    | Description                                                |
| --------- | ------- | ---------------------------------------------------------- |
| circular  | boolean | Indicates the element should be circular.                  |
| color     | string  | Indicates the badge should have a filled foreground style. |
| fill      | string  | Indicates the badge should have a filled background style. |

## Usage

### Circular Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-badge--circular)

```html
<vscode-badge circular="true">1</vscode-badge>
```

### Fill & Color Attributes

The `fill` and `color` attributes accept the name of a developer defined CSS variable referencing a color string.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-badge--default)

```css
vscode-badge {
	--badge-fill-primary: #00ff00;
	--badge-fill-danger: #ff0000;
	--badge-color-light: #ffffff;
	--badge-color-dark: #000000;
}
```

```html
<vscode-badge fill="primary" color="light">Badge Text</vscode-badge>
```
