let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes of UL
val = list.childNodes; // Includes text spaces in between
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Types
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - DocType

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
val = list.children[3].children;
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Last Child
val = list.firstChild;
val = list.firstElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

console.log(val);