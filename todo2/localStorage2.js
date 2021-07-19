const form = document.querySelector('#add-todo');
const  list = document.querySelector('#todo-list');

const savedList = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedList.length; i++) {
    let newTask = document.createElement("li");
    newTask.innerText = savedList[i].task;
    newTask.isCompleted = savedList[i].isCompleted ? true : false;
    if(new.isCompleted){
        newTask.style.textDecoration = "line-through";
    }
    list.appendChild(newTodo);
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    let newTask = document.createElement("li");
    let value = document.getElementById('todoName').value;
    newTask.innerText = value;
    newTask.isCompleted = false;
    form.reset();
    list.appendChild(newTask);
//still part of submitting the form event
//this creates the object?
    savedList.push({task: newTodo.innerText, isCompleted: false});
    localStorge.setItem("todos",JSON.stringify(savedList));

});

list.addEventListener('click',function(e){
    let listedTask = e.target;
// ! becuase newTask is labeled as false
    if(!listedTask.isCompleted){
        listedTask.style.textDecoration = "line-through";
        listedTask.isCompleted = true;
    }else{
        listedTask.style.textDecoration = "none";
        listedTask.isCompleted = false;
    }

    for(let i = 0; i < listedTask.length; i++){
        if(savedList[i].task === listedTask.innerText) {
            savedList[i].isCompleted = !savedList[i].isCompleted;
            localStorage.setItem("todos",JSON.stringify(savedList));
        }
    }

})


