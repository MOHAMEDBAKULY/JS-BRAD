// All Elements from the DOM
const itemForm = document.getElementById('item-form');
const itemInput = document.querySelector('.input')
const itemlist = document.querySelector('#item-list');
const clearButton = document.querySelector('.clearAll');
const filterH4 = document.querySelector('.filter');
const formBtn = itemForm.querySelector('button')
let isEditMode = false;


// DOM Loading to Display All Items
const displayItems = () => {
    const itemsFromLocalStorage = getItemsFromStorage();
    itemsFromLocalStorage.forEach((item) => addItemToDOM(item));

    checkListUI();
}

// Begin of Submit Function
const onAddItemSubmit = (e) => {
     e.preventDefault();
    
const newItem = itemInput.value;

    //  Validate the input
    if(newItem === ''){
        alert('Please add an item');
        return
    }

    // Check if Edit Mode 
    if(isEditMode){
     const itemToEdit = itemlist.querySelector('.edit-mode');

     removeItemFromStorage(itemToEdit.textContent);
     itemToEdit.classList.remove('edit-mode');
     itemToEdit.remove();
     isEditMode = false;
    } else {
        if(checkIfItemExists(newItem)){
            alert('That item already exists!');
            return;
        }
    }

    // Create Item DOM element
    addItemToDOM(newItem);

    // Add item to local Storage
    addItemToStorage(newItem)

    checkListUI();


    itemInput.value = '';
}
// End of Submit Function

// Adding Items to the DOM 
const addItemToDOM = (item) => {
    // Create List Items
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    // Create a Button
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the DOM
    itemlist.appendChild(li);

}


const addItemToStorage = (item) => {

    let itemsFromLocalStorage = getItemsFromStorage();



     // Add new items to array
    itemsFromLocalStorage.push(item)


    // Convert Items to JSON string and set to local storage 
    localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage));

}


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


const onClickItem = (e)  => {
    if(e.target.parentElement.classList.contains('remove-item')){
        // if(confirm('Are you sure?')){
          onRemoveItem(e.target.parentElement.parentElement)
        }  else {
         setItemToEdit(e.target);
        }
}

// Checking for Duplicates in the entries
const checkIfItemExists = (item)  => {
    const itemsFromStorage = getItemsFromStorage();
    return  itemsFromStorage.includes(item);
  
}



// Setting The Edit Mode
const setItemToEdit = (item) => {
  isEditMode = true;
   
  itemlist.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = ` <i class="fa-solid fa-pen"></i> Update Item`;
  formBtn.style.backgroundColor = '#228B22'
  itemInput.value = item.textContent;
}

// Remove One item at a time on the list 
const onRemoveItem = (item)  => {
    if(confirm('Are you sure?')){
     item.remove();


    //  Remove item from storage
    removeItemFromStorage(item.textContent);

     checkListUI();
    }

}

// Removing the items from Storage
const removeItemFromStorage = (item) => {
    let itemsFromLocalStorage = getItemsFromStorage();

    // Filter Items to be Removed
    itemsFromLocalStorage = itemsFromLocalStorage.filter((value) => 
        value !== item
    );

    // Rest to local Storage
    localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage));
}

// Get Items from Storage
const getItemsFromStorage = () => {
    let itemsFromLocalStorage;

    if(localStorage.getItem('items') === null){
        itemsFromLocalStorage = [];
    }
    else{
     itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'))
    }

    return itemsFromLocalStorage;

}

// Clear All items on the list
const onClearAll = () => {
   while(itemlist.firstChild){
    itemlist.removeChild(itemlist.firstChild);
   }

// Clear All the items On The DOM and local Storage
localStorage.removeItem('items')

   checkListUI();
}

// Filtering all items 
const onFitering = (e) => {
   const checkList = document.querySelectorAll('li')
   const text = e.target.value.toLowerCase();

    checkList.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if(itemName.indexOf(text) != -1){
        item.style.display = 'flex'
    }else {
        item.style.display = 'none'
        
    }
   })
}


// Check the UI if there are items 
const checkListUI = () => {
  itemInput.value = '';

const checkList = document.querySelectorAll('li')
  if(checkList.length === 0){
     clearButton.style.display = 'none';
     filterH4.style.display = 'none';
    
  }else {
    clearButton.style.display = 'block';
    filterH4.style.display = 'block';

  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add item';
  formBtn.style.backgroundColor = 'black';

  isEditMode = false;
}


// Fubction Initializer 
const Initialize = ()  => {
    // Event Listners
itemForm.addEventListener('submit', onAddItemSubmit);
itemlist.addEventListener('click', onClickItem);
clearButton.addEventListener('click', onClearAll);
filterH4.addEventListener('input', onFitering);
document.addEventListener('DOMContentLoaded', displayItems);

checkListUI();

}


// Initializing the page
Initialize();




