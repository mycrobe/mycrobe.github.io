import {html, LitElement} from 'https://unpkg.com/lit@2.6.0?module';

export class HelloHeader extends LitElement {
    static properties = {
        name: {}
    }

    constructor() {
        super();
        this.name = 'World'
    }

    render() {
        return html`<h1>Hello, ${this.name}!</h1>`;
    }
}

customElements.define('hello-header', HelloHeader);