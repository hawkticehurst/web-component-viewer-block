class ScopedStyledText extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadow.innerHTML = `
			<style>
				p {
					color: purple;
					font-family: 'Comic Sans MS', cursive;
					margin: 0;
				}
			</style>
			<p>This is some text with scoped styles</p>
		`;
  }
}

customElements.define('scoped-styled-text', ScopedStyledText);