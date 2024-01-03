// window.onload = () => {
//     // const header = document.querySelector('.head')
//     // header.textContent = 'Welcome Home'
// }

window.addEventListener('load', (e) => {
    // const header = document.querySelector('.head')
    // header.textContent = 'Welcome Home'
    const eventTime = e.timeStamp;
    console.log('Loaded time is ' + eventTime)
})

window.addEventListener('DOMContentLoaded', (e) => {
    const header = document.querySelector('.head')
    header.textContent = 'Welcome Home'
    const eventTime = e.timeStamp;
    console.log('DOM content Loaded time is ' + eventTime)
})


window.addEventListener('resize', () => {
    const header = document.querySelector('.head')
    header.innerText = `The resized value is ${window.innerWidth} & ${window.innerHeight}`
    
})

// window.addEventListener('scroll', () => {
//    const scrolling = `Scrolled Height is ${window.scrollY} and the lenght is ${window.scrollX}`
// 
//    if(window.screenX > 2){
    // document.body.style.backgroundColor = 'green';
    // document.body.style.color = 'yellow'
// }else {
    // document.body.style.backgroundColor = 'white';
    // document.body.style.color = 'black'
// }
// })
// 

window.addEventListener('focus', () => {
    const text = document.querySelector('p');
    text.style.color = 'red'
    text.style.fontSize = '32px';
})


window.addEventListener('blur', () => {
    const text = document.querySelector('p');
    text.style.color = 'blue'
    text.style.fontSize = '48px';
})
