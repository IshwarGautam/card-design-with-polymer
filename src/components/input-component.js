import { LitElement, html, css } from 'lit';

import '@polymer/paper-input/paper-input.js';

export class InputComponent extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return css`

    `; 
  }

  static get properties(){
    return {
      requireValidate:{type:Boolean}
    }
  }

  constructor(){
    super();
    
    this.requireValidate = false;
  }

  render() {
    return html`
      <paper-input 
        label="${this.title}" 
        always-float-label
        ${this.requireValidate}?auto-validate pattern="[0-9]*" 
        :''>
      </paper-input>
    `;
  }
}

customElements.define('input-component', InputComponent);
