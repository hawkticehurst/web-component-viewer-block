class BasicTimer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `Seconds: <span>0</span>`;
    this.seconds = this.querySelector('span');
    this.timer = setInterval(() => this.tick(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  tick() {
    this.seconds.textContent = parseInt(this.seconds.textContent) + 1;
  }
}

customElements.define('basic-timer', BasicTimer);