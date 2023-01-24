class CounterButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<button>Clicked <span>0</span> times</button>`;

    this.button = this.querySelector('button');
    this.count = this.querySelector('span');

    this.button.addEventListener('click', () => {
      this.increment();
    });
  }

  disconnectedCallback() {
    this.button.removeEventListener('click', this.increment);
  }

  increment() {
    this.count.textContent = parseInt(this.count.textContent) + 1;
  }
}

customElements.define('counter-button', CounterButton);