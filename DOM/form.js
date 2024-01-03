const form = document.querySelector('#item-form');

const onSubmit = (e) => {
    // Prevent from Submitting on the current page
    e.preventDefault();
    
    //  Getting values of field items 
    const item = document.querySelector('.One').value;
    const priority = document.querySelector('#priority-input').value;
    
    // Checking for inputs 
    if(item === '' || priority === '0'){
        alert('Please fill in all fields')
        return
    }
    // console.log(item, priority)
};


const onSubmit2 = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form)

    const item = formData.get('Item');
    const priority = formData.get('priority');

    // console.log(item, priority)

    const entries = formData.entries();
    console.log(entries)

    for (let entry of entries ){
        console.log(entry)
    }
};




form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);