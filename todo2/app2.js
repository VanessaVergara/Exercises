const form = document.querySelector('#add-todo')
const input = document.querySelector('#todoName')
const todoList = document.querySelector('#todo-list')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items',JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
//I tried incorporating a solution I found on another source, mainly: https://www.taniarascia.com/how-to-use-local-storage-with-javascript/ to store it in the local storage, (lines 4-8)
//however it doesn't work, what do you think is the problem?


todoList.addEventListener('click',function(e){
    if (e.target.tagName === 'BUTTON'){
        console.log(e)
         e.target.parentElement.classList.add('completed');
       
    }

   
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    const newTodo = document.createElement('li');
    const completed = document.createElement('button');
    completed.innerText = 'completed';
    newTodo.innerText = input.value;
    itemsArray
    newTodo.appendChild(completed);
    todoList.appendChild(newTodo);
    input.value = '';

})







