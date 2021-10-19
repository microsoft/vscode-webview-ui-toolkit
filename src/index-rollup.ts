// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// TODO: Is exporting Foundation still necessary with the updated API's?
// export * from "@microsoft/fast-element";
import { allComponents } from "./custom-elements";
import { provideVSCodeDesignSystem } from "./vscode-design-system";

export * from "./index";

/**
 * The global VSCode Design System.
 * @remarks
 * Only available if the components are added through a script tag
 * rather than a module/build system.
 */
export const FASTDesignSystem = provideVSCodeDesignSystem().register(allComponents);
