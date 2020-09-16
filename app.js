// Create Element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Id Name
li.id = 'new-item';

// Add attributes
li.setAttribute('title', 'New Item');

// Create & Append text node
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link to li
li.appendChild(link);

// Append Li as child to UL
document.querySelector('ul.collection').appendChild(li);

console.log(li);