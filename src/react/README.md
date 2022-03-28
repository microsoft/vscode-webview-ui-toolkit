# Visual Studio Code React Toolkit Components

In addition to the web components that the Webview UI Toolkit for Visual Studio Code provides, the toolkit also provides a set of React components that can be used to build webview-based extension UIs.

These components are actually built with the same exact web components mentioned above, but are simply wrapped in a React component using the [`@microsoft/fast-react-wrapper`](https://www.npmjs.com/package/@microsoft/fast-react-wrapper) package. You can find the wrapping code in the `src/react/index.ts` file.

## Usage 

To use the React components in your extension, simply install the `@vscode/webview-ui-toolkit` package and import the components using the following syntax:

```ts
import { VSCodeButton, VSCodeCheckbox } from '@vscode/webview-ui-toolkit/react';
```

You should be able to (for the most part) follow the same usage patterns and attributes as the web components. See our [component documentation](../../docs/components.md) for more details.

## Some exceptions

There are still some exceptions to the general usage patterns when using the React components. These are listed below and will be updated as needed.

### Use `onInput` instead of `onChange` to handle keystrokes

Due to the fact that the toolkit React components are built with web components under the hood, it means that input components like `VSCodeTextField` or `VSCodeTextArea` follow the native browser `change` and `input` event model. This means the `onChange` event is fired when focus is blurred away from the input element and `onInput` is fired on every keystroke. This exception is the result of the React team deciding to [override native browser behavior](https://reactjs.org/docs/dom-elements.html#onchange).

As an example, if you would like to update the value of a text field on every keystroke, the `onInput` should be used instead of `onChange`.

```tsx
import { VSCodeTextField } from '@vscode/webview-ui-toolkit/react';

function SomeComponent() {
  const [value, setValue] = useState('');
  
  return <VSCodeTextField value={value} onInput={e => setValue(e.target.value)} />
}
```
