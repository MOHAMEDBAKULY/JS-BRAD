// All Elements from the DOM
const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('.input')
const itemlist = document.querySelector('#item-list');

// Begin of Submit Function
const onSubmit = (e) => {
     e.preventDefault();
    
const newItem = itemInput.value;

    //  Validate the input
    if(newItem === ''){
        alert('Please add an item');
        return
    }

    // Create List Items
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem))

    // Create a Button
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemlist.appendChild(li);

    itemInput.value = '';
}
// End of Submit Function


// Creating a New Button
const createButton = (classes) => {
    const Btn = document.createElement('button');
    Btn.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    Btn.appendChild(icon)
    return Btn
}

//  Adding Its Classes
const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon
}
// Event Listners
itemForm.addEventListener('submit', onSubmit)