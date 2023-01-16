import {html, render} from 'https://unpkg.com/lit@2.6.0?module';
import './components/header.js';  
import './components/list.js';  

const items = [
    'powered by Lit and WebComponents,',
    'with no build step, and',
    'fiddled with in github codespaces.',
    'Addendum: Everything is rendered in JS so it\'s not ideal.',
]

// Declare a template
const myTemplate = html`
<hello-header name="Everybody"></hello-header>
<p>This is a website:</p>
<dynamic-list .items=${items}></dynamic-list>
<p>I could have built this on an iPad. (I didn't, but I <em>could</em> have.)</p>
`;

// Render the template
render(myTemplate, document.body);