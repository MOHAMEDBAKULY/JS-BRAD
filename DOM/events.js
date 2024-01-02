// JAVASCRIPT EVENT LISTNER


// clearBtn.onclick = function () {
    //     alert('Clear Items')
// }


// function onClear(){
//     alert('This is 2024 is there any difference')
// // }
// // 
// clearBtn.addEventListener('click',  onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
// const list = document.querySelector('ul');
// const items = document.querySelectorAll('li')
    



const clearBtn = document.querySelector('.ClearAll')
const logo = document.querySelector('p');


const onClick = () => { 
    if( document.body.style.backgroundColor !== 'red'){
        document.body.style.color = 'green'
        document.body.style.backgroundColor = 'red'

    }else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'blue'

    }
}


const onDoubleClick = () => { 
    console.log('Double clicking');
}

const onRightClick = () => { 
    console.log('Double welcome back');
};

const onMouseDown = () => { 
    // console.log('Mouse Down Event');
};

const onMouseUp = () => { 
    // console.log('Mouse UP Event');
};

const onMouseWheel = () => { 
    // console.log('Mouse Wheel Event');
};

const onMouseOver = () => { 
    // console.log('Mouse Over Event');
    
};

const onMouseOut = () => { 
// console.log('Mouse Out Event');
};

const onDragStart = () => { 
    console.log('Drag Start Event');
    };

const onDrag = () => { 
console.log('Drag Start Event');
 };

const onDragEnd = () => { 
    console.log('Drag End Event');
     };
        



logo.addEventListener('click', onClick)
logo.addEventListener('dblclick', onDoubleClick)
logo.addEventListener('contextmenu', onRightClick)
logo.addEventListener('mousedown', onMouseDown)
logo.addEventListener('mouseup', onMouseUp)
logo.addEventListener('wheel', onMouseWheel)
logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('mouseout', onMouseOut)
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)


















// list.innerHTML = '';
// items.forEach((Item) => Item.remove());
// while(list.firstChild){
// list.removeChild(list.firstChild)
 // }