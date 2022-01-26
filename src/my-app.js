import { LitElement, html, css } from 'lit';

import './components/test-component';

export class MyApp extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        main {
          margin-left:25%;
        }
      `,
    ];
  }
  render() {
    return html`<main><test-component></test-component></main>`;
  }
}

customElements.define('my-app', MyApp);
