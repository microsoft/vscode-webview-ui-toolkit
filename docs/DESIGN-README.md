# Visual Studio Code Webview Figma Toolkit

👉 Figma Link: [VS Code Webview Toolkit](https://www.figma.com/file/KO1yufOeApPEMymIxJ3dTf/VS-Code-Webview-Toolkit?node-id=0%3A1)

## About this toolkit

This Figma toolkit is an extension of the VS Code Toolkit and made specifically for designing webviews for VS Code extensions. The VS Code Toolkit has all of the core components and templates needed for creating experiences that take place in the explorer, command palette, terminal, editor, and debugger. The experiences in webviews often have design requirements that go beyond the base experiences in VS Code. This toolkit was created to give people the tools to designs webview experiences that are consistent with the rest of VS Code. All of the components were designed with theming in mind and use colors that map directly to the VS Code dark theme color tokens. The components in the toolkit are based on the Fluent Web components but have been redesigned to match VS Code's visual language.

## How to use

**Before you begin using this toolkit, you will need:**

- [The VS Code Figma Toolkit](https://github.com/microsoft/vscode-figma-toolkit)
- [Codicons Font](https://github.com/microsoft/vscode-codicons/blob/master/dist/codicon.ttf)
- [Seti Font](https://github.com/jesseweed/seti-ui/blob/master/styles/_fonts/seti/seti.ttf)
- [Visual Studio Icons Figma Plugin](https://www.figma.com/community/plugin/786075219184960694/Visual-Studio-Code-Icons)

**Additional resources:**

- [VS Code Webview Sample Layouts](https://www.figma.com/file/bfGPz3571VtKVHb0DR3HIk/VS-Code-Webview-Sample-Layouts?node-id=2%3A0)

### 1. Duplicate file

Begin by duplicating this file to your Drafts. This is the only way to re-use this file
as a team library:

![Screen Shot 2020-06-16 at 3 57 12 PM](https://user-images.githubusercontent.com/47866467/84822051-13588d80-afea-11ea-8f5f-18ed8e7d0bdd.png)

### 2. Publish Styles & Components

Next, Publish Styles & Components as a team library. You can also rename and move
this file to a team project if you wish to use this with others.

![Untitled 1](https://user-images.githubusercontent.com/47866467/84821186-ba3c2a00-afe8-11ea-8828-df7c1b27f4bd.png)

### 3. Enable Library

Create a new file and enable the team library for your file:

![Untitled 2](https://user-images.githubusercontent.com/47866467/84821284-dfc93380-afe8-11ea-9acd-9d72191601da.png)

### 4. Install Icon Fonts

Install the Codicon and Seti icon fonts to use the glyphs. Make sure you reload your Figma file after you’ve installed the fonts:

Link: [Codicons](https://github.com/microsoft/vscode-codicons/blob/master/dist/codicon.ttf)

![Untitled 3](https://user-images.githubusercontent.com/47866467/84821285-e061ca00-afe8-11ea-8188-cc0ce2f72bd7.png)

Link: [Seti](https://github.com/jesseweed/seti-ui/blob/master/styles/_fonts/seti/seti.ttf)

![Untitled 4](https://user-images.githubusercontent.com/47866467/84821286-e061ca00-afe8-11ea-99a6-645f1999c06a.png)

### 5. Using Components

You can now search for components using the “Assets” panel or you can go to the master library and copy components and paste them into your file.

![Untitled 5](https://user-images.githubusercontent.com/47866467/84821288-e0fa6080-afe8-11ea-9c99-63ad432761ba.png)

Ensure that when you paste components that they are instances:

![Untitled 6](https://user-images.githubusercontent.com/47866467/84821290-e0fa6080-afe8-11ea-8c8d-a9a9197b4434.png)

### 6. Swapping states

Most components will have various states that you can swap to, which should retain their overrides:

![ezgif com-optimize](https://user-images.githubusercontent.com/47866467/85040705-1329d080-b157-11ea-9545-4c1774b649e8.gif)

### 7. Using icons

Use the “Visual Studio Code Icons” Figma plugin to copy icon glyphs:

Figma plugin: [Visual Studio Code Icons](https://aka.ms/vscode-figma-icons)

![Untitled 7](https://user-images.githubusercontent.com/47866467/84821291-e0fa6080-afe8-11ea-9993-02e32f872233.png)

### 8. Icon styles

All icons can be replaced by pasting a glyph. Ensure that you use the correct icon style for either Codicons or Seti icons.

![Untitled 8](https://user-images.githubusercontent.com/47866467/84821293-e192f700-afe8-11ea-992e-774c8c4a1e77.png)

Seti icons have color styles that you can also use.

![Untitled 9](https://user-images.githubusercontent.com/47866467/84821294-e192f700-afe8-11ea-87c7-bd51aa15b1fc.png)

### 9. Color mapping

The last page in the Figma file has the Color Palette, which contains all the colors used in the default dark and light themes. The color tokens are broken up into sections based on their use in VS Code. Here's an example of the button category, which includes the background, foreground, and hoverBackground. Each card also includes the HEX value.

![Untitled 10](https://user-images.githubusercontent.com/47866467/84821516-3d5d8000-afe9-11ea-8ab5-077bb3dc27be.png)

When looking at the color library in the toolkit, each color is marked with the theme it belongs to, the category, and it's use.

![Screen Shot 2020-06-16 at 3 54 45 PM](https://user-images.githubusercontent.com/47866467/84821822-bbba2200-afe9-11ea-9dcb-e666ac47e12d.png)

When viewing toolkit components in the "Code" view, you will see the color tokens used.

![Untitled 11](https://user-images.githubusercontent.com/47866467/84821519-3e8ead00-afe9-11ea-9ff8-92589f2ea27d.png)

## Contributing

If you'd like to contribute components, please create a PR with a link to your Figma file that has the proposed the components. Please re-use the same naming convention found in the rest of the file.

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit [cla.opensource.microsoft.com](https://cla.opensource.microsoft.com).

When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the Microsoft Open Source Code of Conduct. For more information see the Code of Conduct FAQ or contact opencode@microsoft.com with any additional questions or comments.

## Legal Notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode), see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the [LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at [here](http://go.microsoft.com/fwlink/?LinkID=254653).

Privacy information can be found at [here](https://privacy.microsoft.com/en-us/).

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
