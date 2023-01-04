"use strict";


const input = document.querySelector('.new-task>input[type="textarea"]');
const submit = document.querySelector('.new-task>input[type="checkbox"]');

submit.addEventListener('click', ()=>{
    if(submit.checked){
        const task = input.value;
        if(validateInput(task)){ // if valid => add task 
            addTask(task);
        }
    }
});

// check for invalid input 
// if valid return true;
function validateInput(value) {
    if(value.length != 0
        && value.trim != ' ')
        {
            return true;
        }
}

let tasks = JSON.parse(localStorage.getItem('tasks'));
if (!tasks) {
  tasks = [];
}
//add to array & add array to the local storage
function addTask(task){ 
    tasks.push(task);
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
displayTasks();

function displayTasks(){
    const taskList  =   JSON.parse(localStorage.getItem('tasks'));
    addItemsToHTML(taskList);
}


function addItemsToHTML(items) {

    const container = document.querySelector('.task-list');
    console.log('adding to', container);
    // Clear the container element
    container.innerHTML = '';
    if(!items){
        return;
    }
    for (const item of items) {
        // Create a div element for the item
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        // add checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // add content
        const taskContent = document.createElement('p');
        taskContent.innerHTML = item;

        // add deletebtn
        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('task-delete-btn');
        
        taskDiv.append(checkbox,taskContent,deleteBtn);

    
        // Append the div to the container element
        container.appendChild(taskDiv);
    }
  }