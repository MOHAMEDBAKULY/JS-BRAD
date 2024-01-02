// const divs = document.createElement('div');
// divs.className = 'first';
// divs.id = 'home';
// divs.setAttribute('target', 'https://photohive.com');

// // divs.innerText = 'welcome Home'

// // const textNode = document.createTextNode('This is interesting');
// // divs.appendChild(textNode);

// document.querySelector('h1').appendChild(divs);

// const btn = document.createElement('button');
// btn.className = 'back-home';
// btn.id = 'back-it-up';
// btn.style.backgroundColor = 'red'
// btn.setAttribute('url', 'home-is-here');

// const btnText = document.createTextNode('Back home');
// btn.appendChild(btnText);



// // document.querySelector('ul').appendChild(btnText);



// // Challenge create an element then add it to the body 

// function createNewItem(item) {
//     const list = document.createElement('li');

//     list.innerHTML = ` ${item} <button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`
//     document.querySelector('.items').appendChild(list)
// }
// createNewItem('Machungwa');

// function createButton(button){
//     const btn = document.createElement('button');

//     btn.innerHTML = ` <i class="fa-solid fa-plus"></i> ${button}`;
//     btn.style.marginLeft = '100px'
//     btn.className = 'Two'
//     btn.style.padding = '8px'
//     document.querySelector('.Two').appendChild(btn);
// }

// createButton('Add Another one')

// function createGoodItem(item){
//     const list = document.createElement('li');
//     list.appendChild(document.createTextNode(item));

//     const button = createBtn('remove-item btn-link text-red');

    
//     list.appendChild(button)
    
//     document.querySelector('.items').appendChild(list)
    
// }
// createGoodItem('waterMelon');


// function createBtn(classes) {
//     const button = document.createElement('button');
//     button.className = classes;
    
//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon)

//     return button;
// }

// function createIcon(classes) {
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
 
// }

// const inputField = document.createElement('button');
// inputField.innerText = 'Remove all Items'
// inputField.style.backgroundColor = 'yellow';
// inputField.style.marginLeft = '200px'
// 
// document.querySelector('.ClearAll').appendChild(inputField)
// 
// console.log(inputField.innerText)
// 

// }
// function createClearButton(classes) {

// createClearButton("Remove All items")




// INSERTING ELEMENTS INTO THE DOM USING JAVASCRIPT

// InsertAdjacentElement 

// function insertElment() {
//     const button  = document.querySelector('.Two');

//     const btn  = document.createElement('button');
//     btn.style.backgroundColor = 'black'
//     btn.style.color = 'white'
//     btn.textContent = 'Click me'
//     btn.style.width = '80px'
//     btn.style.marginBottom = '10px'

//     button.insertAdjacentElement('afterend', btn)

// }

// insertElment();

// InsertAdjacentText

// function insertText() {
//     const item = document.querySelector('li:first-child');

//     item.insertAdjacentText('beforeend', 'I am in the same box as you are')
// }

// insertText()
// InsertAjacentHTML

// function insertHTML() {
//     const header = document.querySelector('.head');
//     header.insertAdjacentHTML('afterend', '<i>This is stylelish </i>')
//     // header.style.fontSize = '1'
// }

// insertHTML()

// InsertBefore

// function insertBeforeItem() {
    // const ul = document.querySelector('ul');
// 
    // const Li = document.createElement('li');
    // Li.textContent = 'I am  before you'
// 
    // const thirdItem = document.querySelector('li:nth-child(3)')
// 
    // ul.insertBefore(Li, thirdItem)
// }
// 
// insertBeforeItem()
// 
// function insertAfterItem(newEl, exstingEl) {
    // exstingEl.parentElement.insertBefore(newEl, exstingEl.nextSibling)
// }
// 
// const Li = document.createElement('li');
// Li.textContent = 'I am after you down here';
// 
// const firstItem = document.querySelector('li:first-child')
// 
// insertAfterItem(Li, firstItem)
// 
// 
// 
// function createAdjacentElemnt() {
    // const inputIT = document.querySelector('.One')
    // 
    // const btn = document.createElement('button')
    // btn.style.width = '90px'
    // btn.textContent = 'welcome Here'
// 
    // inputIT.insertAdjacentElement('beforebegin', btn)
// 
// }
// 
// createAdjacentElemnt()
// 
// 
// function createAdjacentHTML() {
    // const btns = document.querySelector('.ClearAll')
// 
    // btns.insertAdjacentHTML('afterend',  '<button>This new here</button>')
// }
// 
// createAdjacentHTML()


// REMOVVING ELEMENTS IT THE DOM

function replaceFirstItem() {
    const firstUtem = document.querySelector('li:first-child')

    const li  = document.createElement('li');
    li.textContent = 'Replaced the first';

    firstUtem.replaceWith(li)
}
// replaceFirstItem()

function  replaceTheHeader() {
    const header = document.querySelector('.head');
    header.style.color = 'green';

    const head2 = document.createElement('h2');
    head2.style.fontSize = '24px';
    head2.textContent = 'I am the new king'
    head2.style.border = '4px solid red'

    const lineUnder = document.createElement('hr')
    lineUnder.textContent = 'this is new'
    lineUnder.style.color = 'blue'
    lineUnder.style.fontSize = '10px'
    lineUnder.style.marginTop = '40px'

    header.replaceWith(head2)
    head2.insertAdjacentElement('afterend', lineUnder)
    console.log(lineUnder)
}

// replaceTheHeader();

function replaceThirdItem() {
    const thirdItem = document.querySelector('li:nth-child(3)')

    thirdItem.outerHTML = `<li>The other one went missing</li>`
}

// replaceThirdItem();

function replaceAllItems() {
    const allList = document.querySelectorAll('li');

    // allList.forEach((list, index) =>  {
    // //   list.outerHTML = `<li>We have been replaced</li>`
    // if(index === 2){
    //     list.textContent = 'The new third item'
    // }else {

    //     list.innerHTML = `We are the new kids in the block`
    // }
    // })

    allList.forEach(
        (list, index) => 
        (list.outerHTML = index === 1 ? `<li>I have changed</li>` :
        `<li>Thing ziko poa</li>`)
        )
}

// replaceAllItems()



function replaceChildHeading() {
    const header = document.querySelector('#Heading')
    const h1 = document.querySelector('#Heading h1');

    const h3 = document.createElement('h3')
    h3.id = 'new-heading'
    h3.textContent = 'Shopping Bucket'
    h3.style.color = 'green'
    h3.style.fontSize = '24px'


    header.replaceChild(h3, h1)
}

// replaceChildHeading()

// Removing Elements on the DOM

function removeAddButton() {
  const button =  document.querySelector('.Two')

  button.remove()
}

// removeAddButton()

function removeFirstItem() {
    const parent = document.querySelector('ul')
    const child = document.querySelector('li:nth-child(2)')

    parent.removeChild(child)
}

// removeFirstItem()

function IconLeft() {
    const parent = document.querySelector('ul')
    const child = document.querySelector('li')
    
    
    parent.removeChild(child)
}

// IconLeft()


function removeItem(ItemNumber) {
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${ItemNumber})`)

    ul.removeChild(li)
}

// removeItem(3)

function removeItem2(ItemNumber){
    const ul = document.querySelector('ul');
    // const li = document.querySelectorAll('li')[2];
    const li = document.querySelectorAll('li')[ItemNumber - 1];

    ul.removeChild(li)

}
// removeItem2(1)

function removeItem3(ItemNumber){
    const li = document.querySelectorAll('li')
    li[ItemNumber - 1].remove()
}

// removeItem3(2)

const removeItem4 = (ItemNumber) =>  
document.querySelectorAll('li')[ItemNumber - 1].remove();

// removeItem4(3)