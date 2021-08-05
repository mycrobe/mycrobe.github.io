import {html, render} from 'https://unpkg.com/lit-html@1.4.1?module';
  		
// Declare a template
const myTemplate = html`
<h1>Hello World</h1>
<p>This is a website.</p>
`;

// Render the template
render(myTemplate, document.body);