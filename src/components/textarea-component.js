import { LitElement, html, css } from 'lit';

export class TextareaComponent extends LitElement {
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

customElements.define('textarea-component', TextareaComponent);
