import { LitElement, html, css } from 'lit';

export class ButtonComponent extends LitElement {
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

    }
  }

  constructor(){
    super();
    
  }

  render() {
    return html`
    
    `;
  }
}

customElements.define('button-component', ButtonComponent);
