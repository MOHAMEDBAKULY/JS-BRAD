// // METHOD ONE 
// const Item = document.querySelector('.container');

// const onKeyDown = (e) => {
//     Item.innerHTML = `
//     <div class="item">
//     ${e.key === ' ' ? 'Space' : e.key}
//     <small>e.key</small>
//     </div>
    
//     <div class="item">
//     ${e.code}
//     <small>e.code</small>
//     </div>
//     <div class="item">
//     ${e.keyCode}
//     <small>e.keycode</small>
//     </div>
//     `;
// }

// window.addEventListener('keydown', onKeyDown); 

// METHOD 2

const container = document.querySelector('.container');


const showKeyCodes = (e) => {
    container.innerHTML = '';
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };
  
  for(let key in keyCodes){
    const div = document.createElement('div');
    div.className = 'item'
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    container.appendChild(div)
  }
 
}



window.addEventListener('keydown', showKeyCodes)
