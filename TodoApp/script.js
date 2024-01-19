const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
    .then(res => res.json())
    .then(data => {
        data.forEach((todo) => addTodoToDom(todo))
    })
}

const addTodoToDom = (todo) => {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id)
    if(todo.completed){
        div.classList.add('done')
    }
    document.querySelector('#todo-list').appendChild(div)
}

// Making a Post Request to add data to the DOM
const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
     title:  e.target.firstElementChild.value,
     completed: false
    }  

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => addTodoToDom(data))
}


const loadContent = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    const todo = document.querySelector('#todo-form')
    todo.addEventListener('submit', createTodo)
}

loadContent();

