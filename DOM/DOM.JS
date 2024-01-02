// console.dir(window.document)

// console.log(document.body.innerText)

// console.log(document.links[0]);

// document.body.innerHTML = "<h2>JavaScript with brad is so fun</h2>"

// console.log(document.getElementsByClassName('.Test'))
// const Testing = document.getElementsByClassName('.Test')
// Testing.innerHTML = "<h2>This is amazing Guys</h2>"


// let output;

// output = document.all[14];
// output = document.documentElement;

// output = document.head.children;
// output = document.body.children;
// output = document.domain;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// document.write('Hello world')
// 
// output = document.head.children;
// output = document.doctype;

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;

// output = document.forms[0].method;
// output = document.forms[0].action;

// output = document.links;
// output = document.links[0].href;


// 
// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form))



// console.log(output)

// document.getElementById()

// console.log(document.getElementById('Heading').getAttribute('id'));

// document.getElementById('Heading').title = 'New heading';

// document.getElementById('Heading').setAttribute('class', 'title');

// const title = document.getElementById('Heading');

// // console.log(title)


// // Get or Change

// console.log(title.textContent);
// title.textContent = 'Welcome To Javascript';
// title.innerText = 'welcome home'
// title.innerHTML = "<b>Shopping List</b>"

// // Setting styles
// title.style.color = 'blue';
// title.style.backgroundColor = 'black';
// title.style.borderTopColor = 'green'


// // document.querySelector()
// console.log(document.querySelector('b'));
// console.log(document.querySelector('#Heading'));
// console.log(document.querySelector('.Filter'));
// console.log(document.querySelector('input[type= "text"]'));

// console.log(document.querySelector('li:nth-child(1)').innerText);

// const manipulate = document.querySelector('li:nth-child(1)');

// manipulate.innerText = 'Mango Juice';
// manipulate.style.color = 'yellow';
// manipulate.style.backgroundColor = 'grey'


// const List = document.querySelector('ul');
// console.log(List);

// const FirstItem = document.querySelector('li:nth-child(2)');
// FirstItem.innerText = `Matomoko `;;
// console.log(FirstItem)

// console.log(manipulate);

// 
// const backgroundColor  = document.body;
// backgroundColor.style.backgroundColor = 'lightblue';
// 
// 
// const button = document.querySelector('.ClearAll');
// button.style.color = 'red';
// button.style.padding = '20px'
// 
// 
// const filterme = document.querySelector('h4');
// filterme.innerText = 'Change Happens here';
// filterme.style.fontSize = '20px';
// filterme.style.color = 'green';
// 

// const icon = document.getElementsByClassName('fa-list-check');
// icon.style.backgroundColor = 'red';
// 
// document.queryselectorAll

// const listItems = document.querySelectorAll('.items');

// console.log(listItems[2].innerText);


// listItems[2].style.color = 'brown';

// listItems.forEach((item, index) => {
    
//     item.style.backgroundColor = 'purple'

//     if(index === 2){
//         item.remove();
//     }

//     if( index === 0){
//         item.innerHTML = ` <li class="items">Matomoko <i class="fa-solid fa-xmark"></i></li>`;
//     }
// })


// const listItem = document.getElementsByClassName('items');

// console.log(listItem[1].innerText = 'Chapati')

// const listItem1 = Array.from(listItem);

// listItem1.forEach((value, index) => {
//     value.style.color = 'yellow';
// });


// const listItem3 = document.getElementsByTagName('button');

// listItem3.style.padding = '24px';

