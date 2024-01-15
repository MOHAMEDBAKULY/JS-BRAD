// FETCHING DATA FROM JSON FILES
fetch('./movies.json')
.then((response) => response.json())
.then((data) => console.log(data))

// FETCHING DATA FROM A TXT FILES
fetch('./test.txt')
.then((response) => response.text())
.then((data) => console.log(data))

// FETCHING DATA FROM MY GITHUB REPO
fetch('https://api.github.com/users/MOHAMEDBAKULY')
.then((response) => response.json())
.then((data) => {
    document.querySelector('h2').textContent = data.login
})

// FETCHING DATA FROM POKEMAN API
fetch("https://pokeapi.co/api/v2/berry/3/")
  .then((response) => response.json())
  .then((data) => {
   const berries = document.querySelector('.poke');
   berries.textContent = data.name
   berries.style.color = 'red'
  })

//  FETCHING DATA FROM POKEMAN API
fetch("https://pokeapi.co/api/v2/ability/1/")
 .then((response) => response.json())
 .then((data) => {
    const list = document.querySelector('.list')
    list.textContent = data.name
 })