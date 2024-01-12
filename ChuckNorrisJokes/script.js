// GETTING ALL ELEMENTS FROM THE DOM
const button = document.querySelector('.btn');
const joke = document.querySelector('#jokes')

const getJokes = ()  => {
   // INITIALIZING THE XHR CONNECTION
   const xhr = new XMLHttpRequest();

   // GET THE CHUCK NORRIS API REQUEST
   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    

   // CRRATING AN EVENT HANDLER TO THE OBJECT
   // CALLING IT THROUGH THE onreadystatechange METHOD
   xhr.onreadystatechange = function () {
    if(this.readyState === 4){
    if(this.status === 200){

        // Getting the data from the server and changing it to readable form
        joke.innerHTML = JSON.parse(this.responseText).value
    } else {
        
        joke.innerHTML = 'Something went wrong Not Chuck Norris Joke'
    } 
    }
};

xhr.send()

}

button.addEventListener('click', getJokes);
document.addEventListener('DOMContentLoaded', getJokes);














