// INITIALIZE XHR HTTP OBJECT
const xhr = new XMLHttpRequest();

// CALLING THE OPEN METHOD OF THE XHR OBJECT 
// AND ALSO THE PATH TO THE SERVER, DATABASE OR LOCAL FILE 
xhr.open('GET', 'https://api.github.com/users/MOHAMEDBAKULY/repos');


// CREATING AN EVENT HANDLER FOR THE OBJECT 
// ITS CALLED THE ON READY STATE CHANGE
xhr.onreadystatechange = function () {
  if(this.readyState === 4 && this.status === 200){
    // console.log(JSON.parse(this.responseText))

    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`
        document.querySelector('.list-item').appendChild(li)
    })
  }
}

// SENDING THE REQUEST WITH THE SEND XHR METHOD
xhr.send();