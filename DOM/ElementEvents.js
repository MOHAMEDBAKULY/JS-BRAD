const Logo = document.querySelector('.logo')
const Link = document.querySelector('a');
const inputItem = document.querySelector('.One')

const onClick = (e) => {
    // console.log(e.target)
    // console.log(e.currentTarget)
    // e.target.style.backgroundColor = 'green'
    // console.log(e.type)
    // console.log(e.timeStamp)
    console.log("The position from left is " + e.screenX + "px")
    console.log("The position from Up is " + e.screenY + "px")
}


const theLink = (e) => {
    e.preventDefault();
    console.log('The link was clicked')
}

Link.addEventListener('click', theLink)

Logo.addEventListener('click', onClick);



const coolTrick = (e) => {
    const h1 = document.querySelector('h1');
    h1.textContent = ` Distance from left ${e.pageX} Distance from Up ${e.pageY} `
    h1.style.color = 'green'
}


Logo.addEventListener('mouseover', coolTrick )




document.body.addEventListener('click', (e) => {
    // console.log(e.target)
    // console.log(e.currentTarget)
})


const onKeyPress = (e) => {
    console.log('Key pressed')
}

const onKeyUp = (e) => {
    console.log('Key is Up')
}

const onKeyDown = (e) => {
    // KEY TYPE EVENT
    // const h4 = document.querySelector('h4');
    // h4.innerText = e.key;
    // h4.style.color = 'red';

    // if (e.key === "Enter"){
    //     prompt('That was good')
    // }

    // if (e.keyCode === 13){
        // prompt('You pressed 13')
    // }

    // if(e.code === 'Digit1'){
        // console.log('You pressd 1')
    // }

    if(e.repeat){
        console.log("you are holing down " + e.key)
    }

    if( e.shiftKey){
    console.log(" You Pressed Shift Key")
  }
 else if(e.key && e.key !== e.shiftKey){
    console.log('That is ' + e.key)
 };
   
 
if(e.altKey){
        console.log("Pressed ALtKey")
}
else if(e.key && e.key !== e.altKey){
        console.log('That is ' + e.key)
     };

    if( e.ctrlKey){
        console.log("You pressed Contorl Key")
    }
    else if(e.key && e.key !== e.ctrlKey){
        console.log('That is ' + e.key)
     };

    // console.log("Press Control " + e.ctrlKey)
    // console.log("Press Shift " + e.altKey)

}

// inputItem.addEventListener('keypress', onKeyPress)
// inputItem.addEventListener('keyup', onKeyUp)
inputItem.addEventListener('keydown', onKeyDown)