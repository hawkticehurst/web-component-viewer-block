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
		"path": "components/toolkit.min.js",
		"sha": "main",
		"file": "docs/vscode-button.md"
	}}
	height={438}
/>
