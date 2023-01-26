# Visual Studio Code Button

The `vscode-button` is a web component implementation of a [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `vscode-button` also supports several visual appearances––primary, secondary, and icon.

![Button hero](./imgs/button-hero.png)

### Basic Button

```html
<vscode-button>Button Text</vscode-button>
```

<BlockComponent
	block={{
		"type": "file",
		"id": "web-component-viewer",
		"title": "Web Component Viewer",
		"description": "A block for viewing web components in a markdown file",
		"sandbox": true,
		"entry": "blocks/web-component-viewer/index.svelte",
		"matches": ["*.js"],
		"example_path": "https://github.com/hawkticehurst/web-component-viewer-block/blob/main/components/vscode-button.js",
		"owner": "hawkticehurst",
		"repo": "web-component-viewer-block",
	}}
	context={{
		"repo": "web-component-viewer-block",
		"owner": "hawkticehurst",
		"path": "components/vscode-button.js",
		"sha": "main",
		"file": "docs/vscode-button.md"
	}}
	height={438}
/>

### Appearance Attribute

There are a number of visual appearances that the `vscode-button` can have. The default appearance is `primary`.

```html
<vscode-button appearance="primary">Button Text</vscode-button>
<vscode-button appearance="secondary">Button Text</vscode-button>
<vscode-button appearance="icon">
  <span class="codicon codicon-check"></span>
</vscode-button>
```

### Autofocus Attribute

```html
<vscode-button autofocus>Button Text</vscode-button>
```

### Disabled Attribute

```html
<vscode-button disabled>Button Text</vscode-button>
```

### Start Icon

An icon can be added to the left of Button text by adding an element with the attribute `slot="start"`.

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-button>
  Button Text
  <span slot="start" class="codicon codicon-add"></span>
</vscode-button>
```

### Icon Only

An icon can also fill the default slot of the Button component (instead of text) to create an icon button by using the `appearance="icon"` attribute and value.

**❗️❗️❗️ Important ❗️❗️❗️**

Because icon buttons do not have text that can be used by screen readers, they are not meaningfully/semantically accessible by default.

An `aria-label` of "Icon Button" is automatically defined on all icon buttons so they are still technically accessible out of the box, however, a descriptive and meaningful label that fits the use case or context of the icon button should be defined to replace the default label.

For example, if you're using an icon button to confirm a state change, adding an `aria-label` with the value "Confirm" or "Confirm Changes" would be appropriate.

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-button appearance="icon" aria-label="Confirm">
  <span class="codicon codicon-check"></span>
</vscode-button>
```
