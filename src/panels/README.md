# Visual Studio Code Panels

The `vscode-panels` component is a web component implementation of a [tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role).

![Panel hero](/docs/assets/images/panels-hero.png)

The component is created using three components that work together to interchangably display different content:

- `<vscode-panels>`: The top level container element.
- `<vscode-panel-tab>`: Renders the panel tab that will be associated with a panel view.
- `<vscode-panel-view>`: The container element that will hold content associated with a given tab.

## Usage

| ❌ Don't                                                                                      | ✅ Do                                                                               |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| ![Tab panel with too many tabs](/docs/assets/images/panels-dont-1.png)                        | ![Tab panel with several clearly labeled tabs](/docs/assets/images/panels-do-1.png) |
| Don't use more than six panel tabs to organize your extensions views to reduce load on users. | Structure content into as few tabs as possible.                                     |

| ❌ Don't                                                                     | ✅ Do                                                           |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| ![Tab panel with random tab ordering](/docs/assets/images/panels-dont-2.png) | ![Image placeholder](/docs/assets/images/panels-do-2.png)       |
| Don't use a random tab order.                                                | Tabs with related content should be grouped next to each other. |

| ❌ Don't                                                                                           | ✅ Do                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Tab featuring a very long label with multiple categories](/docs/assets/images/panels-dont-3.png) | ![Image placeholder](/docs/assets/images/panels-do-3.png)                                                                                                                    |
| Don't use too many words in a tab label or group too many sections in a single tab.                | Use concise titles to ensure users know what to expect in each tab. Consider splitting content into multiple tabs if one panel contains many distinct categories of content. |

## Implementation

[Interactive component examples](https://codesandbox.io/s/panels-sample-ch0224?file=/index.html)

### Panels Attributes

| Attribute  | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| `activeid` | string | The id of the active panel tab. |

### Panel Tab Attributes

None

### Panel View Attributes

None

**❗️❗️❗️ Important ❗️❗️❗️**

An aria-label of "Panels" is automatically defined on all panels components so they are technically accessible out of the box. However, a descriptive and meaningful label that fits the use case or context of the panels component should always be defined to replace the default label so those viewing your panels component with a screen reader can better understand the meaning of what's being displayed.

For example, if you're using a panels component to display photos of puppies and kittens, adding an aria-label with the value "Puppy and Kitten Photos" would be appropriate.

**A Note About Panel Views**

Panel view components are rendered as a CSS [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) with default values––they will automatically flow any content contained within them horizontally starting from the left side of the container.

This behavior can be overridden, however, by adding custom styles to all `<vscode-panel-view>` components or individual components. Below are a couple of examples for common overrides that may be desired.

To completely opt out of `<vscode-panel-view>` components rendering as flexbox containers:

```css
vscode-panel-view {
  display: block;
}
```

To make the content flow vertically:

```css
vscode-panel-view {
  flex-direction: column;
}
```

To center the content within the container:

```css
vscode-panel-view {
  justify-content: center;
  align-items: center;
}
```

To apply styling to one `<vscode-panel-view>` component:

```html
<vscode-panels>
  ...panel tabs...
  <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
  <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
  <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
  <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
</vscode-panels>
```

```css
#view-1 {
  justify-content: center;
  align-items: center;
}
```

To apply styling to multiple `<vscode-panel-view>` components (but not all):

```html
<vscode-panels>
  ...panel tabs...
  <vscode-panel-view id="view-1"> Problems content. </vscode-panel-view>
  <vscode-panel-view id="view-2" class="custom-styles"> Output content. </vscode-panel-view>
  <vscode-panel-view id="view-3" class="custom-styles"> Debug content. </vscode-panel-view>
  <vscode-panel-view id="view-4" class="custom-styles"> Terminal content. </vscode-panel-view>
</vscode-panels>
```

```css
.custom-styles {
  justify-content: center;
  align-items: center;
}
```

_Finally, an important detail to be aware of is that `<br/>` tags are [known to not to play well with flexboxes](https://stackoverflow.com/questions/45087054/br-is-not-friendly-with-the-flexbox). So if you absolutely need that tag you should likely opt out of the default flexbox behavior._

### Basic Panel

Note: Adding a unique ID to each `<vscode-panel-tab>` and `<vscode-panel-view>` component is a convention that helps with easily styling and identifying each tab and view component, but it is not explicitly required unless the `activeid` attribute is being used as demonstrated in the next section.

Also, the unique ID can follow any format or convention as long as each component ID is, in fact, unique from all the others.

```html
<vscode-panels>
  <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
  <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
  <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
  <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
  <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
  <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
  <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
  <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
</vscode-panels>
```

### Active ID Attribute

```html
<vscode-panels activeid="tab-4">
  <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
  <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
  <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
  <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
  <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
  <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
  <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
  <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
</vscode-panels>
```

### With Visual Studio Code Badge

In addition to text, a Visual Studio Code Badge can be used in a panel tab to highlight an item, attract attention, and/or flag status.

```html
<vscode-panels>
  <vscode-panel-tab id="tab-1">
    PROBLEMS
    <vscode-badge appearance="secondary">1</vscode-badge>
  </vscode-panel-tab>
  <vscode-panel-tab id="tab-2">
    OUTPUT
    <vscode-badge appearance="secondary">1</vscode-badge>
  </vscode-panel-tab>
  <vscode-panel-tab id="tab-3">
    DEBUG CONSOLE
    <vscode-badge appearance="secondary">1</vscode-badge>
  </vscode-panel-tab>
  <vscode-panel-tab id="tab-4">
    TERMINAL
    <vscode-badge appearance="secondary">1</vscode-badge>
  </vscode-panel-tab>
  <vscode-panel-view id="view-1"> Problems Content </vscode-panel-view>
  <vscode-panel-view id="view-2"> Output Content </vscode-panel-view>
  <vscode-panel-view id="view-3"> Debug Console Content </vscode-panel-view>
  <vscode-panel-view id="view-4"> Terminal Content </vscode-panel-view>
</vscode-panels>
```

### Complex Content

A `vscode-panel-view` can also contain any valid HTML.

```html
<vscode-panels>
  <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
  <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
  <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
  <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
  <vscode-panel-view id="view-1">
    <section style="display: flex; flex-direction: column; width: 100%;">
      <h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>
      <vscode-checkbox>Apples</vscode-checkbox>
      <vscode-checkbox>Oranges</vscode-checkbox>
      <vscode-checkbox>Grapes</vscode-checkbox>
      <vscode-checkbox disabled>Blueberries</vscode-checkbox>
      <vscode-checkbox>Pineapple</vscode-checkbox>
      <vscode-checkbox>Mango</vscode-checkbox>
      <vscode-checkbox>Lemon</vscode-checkbox>
      <vscode-button>Make Smoothie!</vscode-button>
    </section>
  </vscode-panel-view>
  <vscode-panel-view id="view-2"> ... Insert Complex Content ... </vscode-panel-view>
  <vscode-panel-view id="view-3"> ... Insert Complex Content ... </vscode-panel-view>
  <vscode-panel-view id="view-4"> ... Insert Complex Content ... </vscode-panel-view>
</vscode-panels>
```
