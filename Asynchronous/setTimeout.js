
const changeText = () => {
    const p = document.querySelector('#settime');
    p.style.color = 'red';
    p.style.fontSize = '32px';
}

const timerId = setTimeout(changeText, 4000);


const button = document.querySelector('#timeout');

button.addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled')
})




const stop = document.querySelector('#stop')
const start = document.querySelector('#start')

let intervalID;

const startChange = ()  => {
    if(!intervalID){
        intervalID =  setInterval(changeColor, 200);
    }               
}
 

const changeColor = () => {
    let colors = Math.floor(Math.random() * 167777215).toString(16);
    document.body.style.backgroundColor = `#${colors}`;
    
}

const stopChange = () => {
    clearInterval(intervalID)
}

stop.addEventListener('click', stopChange)
start.addEventListener('click', startChange)




const header = document.querySelector('#list');
const change = document.querySelector('#change');
const noChange = document.querySelector('#noChange');


const footballers = ["Messi", 'Ronaldo', 'Salah', 'Neymar', 'Mane', 'Saka', 'Alvarez']

  
const changeWords = () => {
   const randomNumber =  Math.floor(Math.random() * footballers.length);
   const randomFootballer = footballers[randomNumber];
   header.textContent = randomFootballer;
   startChangeWords();
 }
        
let footballerID ;
const startChangeWords = () => {
    if(!footballerID){
        footballerID = setInterval(changeWords, 300)
    }
}

const noChangingWords = () => {
    clearInterval(footballerID)
    header.textContent = 'No footballers'
}


change.addEventListener('click', changeWords)
noChange.addEventListener('click', noChangingWords)

