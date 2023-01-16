import {html, LitElement} from 'https://unpkg.com/lit@2.6.0?module';

export class List extends LitElement {
    static properties = {
        items: {type: Array, attribute: false}
    }

    constructor() {
        super();
        this.items = [];
    }

    render() {
        console.log(this, this.items)
        return html`<ul>
            ${this.items.map(item => html`<li>${item}</li>`)}
        </ul>`;
    }
}

customElements.define('dynamic-list', List);