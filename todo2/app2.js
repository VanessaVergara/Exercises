document.addEventListener("DOMContentLoaded",function(){
let form = document.querySelector('#add-todo')
let input = document.querySelector('#todoName')
let todoList = document.querySelector('#todo-list')

// localStorage.setItem('items',JSON.stringify(todoList))
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

// const data = JSON.parse(localStorage.getItem('items'))
//I tried incorporating a solution I found on another source, mainly: https://www.taniarascia.com/how-to-use-local-storage-with-javascript/ to store it in the local storage, (lines 4-8)
//however it doesn't work, what do you think is the problem?
form.addEventListener('submit',function(e){
    e.preventDefault();
    let remove = document.createElement('button');
    remove.innerText = 'remove';

    let newTodo = document.createElement('li');
   
    newTodo.innerText = input.value;
    todoList.appendChild(newTodo);
    newTodo.appendChild(remove);
    
    form.reset();

    })

todoList.addEventListener('click',function(e){
    if (e.target.tagName === 'LI'){
        console.log(e)
         e.target.classList.add('completed');
       
    }else if (e.target.tagName === "BUTTON"){
        e.target.parentNode.remove();
    }

   
    })


})








