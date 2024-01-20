const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
    .then(res => res.json())
    .then(data => {
        data.forEach((todo) => addTodoToDom(todo))
    })
}

const addTodoToDom = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
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
     completed: false,
    }  

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then((data) => addTodoToDom(data))
}

const toggleCompleted = (e) => {
    if(e.target.classList.contains('todo')){
        e.target.classList.toggle('done');

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'))
    }
};

const updateTodo = (id, completed)  => {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ completed }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
};


const deleteTodo = (e)  => {
    if(e.target.classList.contains('todo')){
       const id = e.target.dataset.id;
       fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
       })
       .then(res => res.json())
       .then(() => e.target.remove())
    }
   
}

const loadContent = () => {
    document.addEventListener('DOMContentLoaded', getTodos);

    const todo = document.querySelector('#todo-form')
    todo.addEventListener('submit', createTodo)

    const togglelist = document.querySelector('#todo-list')
    togglelist.addEventListener('click', toggleCompleted)

    const deletelist = document.querySelector('#todo-list')
    deletelist.addEventListener('dblclick', deleteTodo)
}

loadContent();

