const button = document.querySelector('.Two');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

/*Event Bubbling is the listening of events 
  from the child moving all way up to the document 
  looking for all events that happen in your page

//   You can use the stop propagation method 
to handle where thr bubling of events should stop
*/

button.addEventListener('click', (e) => {
    alert('The button was clicked')
    e.stopPropagation();
})

div.addEventListener('click', () => {
    alert('The div was clicked')
})

form.addEventListener('click', () => {
    alert('The form was clicked')
})

document.body.addEventListener('click', () => {
    alert('The body was clicked')
})