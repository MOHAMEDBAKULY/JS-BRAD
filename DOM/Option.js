const inputItem = document.querySelector('.One');
const priorityInput = document.querySelector('#priority-input');
const checkBox = document.querySelector('#input-checkbox');
const heading = document.querySelector('.head');


const onInput = (e) => {
    heading.textContent = e.target.value;
}

const onChecked = (e) => {
     const isChecked =  e.target.checked;
     heading.textContent = isChecked ? 'Its checked' : 'Not Checked'
}

const onFocus = (e) => {
    priorityInput.style.border = "2px solid blue"
    console.log('I am on focus')
    
}

const onBlur = (e) => {
    priorityInput.style.border = "2px solid green"
     console.log("I am on Blur")
}



inputItem.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkBox.addEventListener('input', onChecked);
priorityInput.addEventListener('focus', onFocus);
priorityInput.addEventListener('blur', onBlur);