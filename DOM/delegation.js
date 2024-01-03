const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove()
//     })
// })


list.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.style.fontSize = '30px';
        // e.target.style.padding = '20px';
    }
})

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})



