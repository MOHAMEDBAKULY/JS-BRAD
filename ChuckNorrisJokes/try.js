
const fetchJokes = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((data) => {
        getTheJokes(data)
    })
        .catch((error) => {
             console.log('There is problem on our side')
        })
    }

const getTheJokes = (jokes) => { 
 const dispalyJokes = document.querySelector("#jokes");
        
dispalyJokes.innerHTML = `
 <h2>${jokes.value}</h2>
        `;
        
    }
    
const button = document.querySelector('.btn');
button.addEventListener('click', fetchJokes)



fetchJokes()