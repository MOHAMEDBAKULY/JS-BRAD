let seeResults;

const parent = document.querySelector('#parent');

seeResults = parent.childNodes;
seeResults = parent.childNodes[1].nodeName;
seeResults = parent.childNodes[1].textContent;
seeResults = parent.childNodes[1];

seeResults = parent.childNodes[3].textContent;
seeResults = parent.childNodes[3].outerHTML;

seeResults = parent.childNodes[3].innerText = 'I am number three';

seeResults = parent.firstChild;
seeResults = parent.lastChild;

// parent node

const child = document.querySelector('.kids');

seeResults = child.parentNode;
seeResults = child.parentElement;

child.parentNode.style.backgroundColor = 'grey';
child.parentNode.style.padding = '16px';
child.parentNode.style.border = `2px solid black`;

// Siblings 

const grabSibling = document.querySelector('.kids:nth-child(4)')

seeResults = grabSibling.nextSibling.style.color = `pink`;
seeResults = grabSibling.previousSibling.innerText = `Using nodes to manipulate the dom`


console.log(seeResults);