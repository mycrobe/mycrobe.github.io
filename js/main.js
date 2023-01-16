import {html, render} from 'https://unpkg.com/lit@2.6.0?module';
import './components/header.js';  
import './components/list.js';  

const items = [
    'powered by Lit and WebComponents,',
    'with no build step, and',
    'fiddled with in github codespaces.',
    'only the dynamic part is rendered in lit, the static parts of the page ',
]

// Declare a template
const myTemplate = html`
<dynamic-list .items=${items}></dynamic-list>
`;

// Render the template
render(myTemplate, document.querySelector('#dynamic-part'));

// Clear the style that was hiding any FOUC
document.body.style = '';