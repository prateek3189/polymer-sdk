

import {
  LitElement, html, customElement, property
} from 'lit-element';

import * as view from "./index.template.html";

@customElement('my-app')
export class MyApp extends LitElement {

  @property()
  foo = 'foo';

  render(){
    return html`<p>${this.foo}</p>`;
  }
}

// Another way of doing this
// customElements.define('my-app', MyApp);
