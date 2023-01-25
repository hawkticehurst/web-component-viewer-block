class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute('name') || 'World';
    this.textContent = `Hello ${name}!`;
  }
}

customElements.define('hello-world', HelloWorld);