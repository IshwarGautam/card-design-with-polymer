import { LitElement, html, css } from 'lit';

import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';


export class TestComponent extends LitElement {
  static get styles() {
    return css`

      .createBtn{
        background:rgb(233,30,98);
        color:ivory;
        font-weight:bold;
      }
      
      .wrapper{
        border: 1px solid black;
        padding: 20px;
        width:500px;
        background:ivory;
      }

      .col2{
        margin-left:30px;
      }

      .binding-group{
        border:1px solid gray;
        padding:5px;
        height:100px;
        overflow-y:auto;
        overflow-x:hidden;
      }

      p{
        color: gray;
        font-size: 12px;
      }

      img{
        float:right;
        margin-top:-30px;
      }

      .checkbox{
        width:100%;
        padding:8px;
      }
    `;
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();

    this.bindingGroups = [
      "BRD2 Affinity_High_Affinity",
      "BRD2 AMP_PNP_competitive",
      "BRD@ NRX-0459676_non-competitive",
      "BRD3 Affinity_High_Affinity",
      "BRD3 AMP_PNP_competitive",
      "BRD# NRX-0459676_non-competitive"
    ];

    this.content = {
      name: "",
      description: "",
      ligandsPromoted: 0,
      totalLigands: 0,
      date: "",
      bindingGroups: [],
      comments: ""
    };

    this.check = false;

    this.color = 'transparent';
    
  }

  render() {
    return html`
      <div class = "wrapper">
        <h2>Create Binding Group</h2>

        <table width="500px">
          <tr>
            <td><paper-input 
                  label="Name" 
                  always-float-label>
                </paper-input>
            </td>

            <td><paper-input 
                  class = "col2" 
                  label="Ligands Promoted" 
                  always-float-label 
                  auto-validate pattern="[0-9]*" 
                  error-message="Provide Number!">
                </paper-input>
            </td>
          </tr>

          <tr>
            <td><paper-input 
                  label="Description" 
                  always-float-label>
                </paper-input>
            </td>
            
            <td><paper-input 
                  class = "col2" 
                  label="Total Ligands in Binding Group" 
                  always-float-label 
                  auto-validate pattern="[0-9]*" 
                  error-message="Provide Number!">
                </paper-input>
            </td>
          </tr>

          <tr>
            <td colspan="2"> 
              <paper-input 
                  label="Date" 
                  always-float-label 
                  placeholder = "DD-MM-YYYY">
              </paper-input>
              <img src="../image/date.png" alt = "Date icon"/>
            </td>
          </tr>

          <tr>
            <td colspan = "2">
              <p>Binding Group</p>
              <div class = "binding-group">
                ${this.bindingGroups.map((group) => html`
                  <paper-checkbox noink class="checkbox"
                    ?checked = ${this.check}
                    @change = ${this.updateChecklist}>
                      ${group}
                    </paper-checkbox><br/>
                `)}
              </div>
            </td>
          </tr>

          <tr>
            <td colspan = "2">
              <paper-textarea 
                  label="Comments" 
                  always-float-label
                  rows = "2">
              </paper-textarea>
            </td>
          </tr>
            <td colspan = "2">
              <paper-button 
                toggles raised 
                class = "createBtn">
                  CREATE
              </paper-button>
              
              <paper-button 
                toggles raised>
                  CANCEL
              </paper-button>
            </td>
          </tr>
      </table>
      </div>
    `;
  }

  updateChecklist = e => {
    this.check = e.target.checked;

    this.color = this.check?'rgb(245,245,245)':'transparent';
    e.target.style.background = this.color;
  }
}

customElements.define('test-component', TestComponent);
