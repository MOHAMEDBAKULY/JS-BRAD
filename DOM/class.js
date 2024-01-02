const text = document.querySelector('p');
const list = document.querySelector('.item-list');
const items = document.querySelectorAll('li')
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // console.log(list.className)
    // text.className = 'Display dark';

    // ClassList
    // console.log(list.classList);

    list.classList.forEach((cla) => console.log(cla))

    // text.classList.add('dark')
    // text.classList.remove('Display')

    // text.classList.toggle('hidden')

    // list.style.color = 'purple';
     
    items.forEach((item, index) => {
        item.style.color = 'yellow'
        item.style.marginBottom = '14px'

        if(index === 3) {
            item.textContent = 'I have changed'
        }

    })
  
})