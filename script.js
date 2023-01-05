"use strict";

let tasks = JSON.parse(localStorage.getItem('tasks'));
if (!tasks) {
  tasks = [];
}


const input = document.querySelector('.new-task>input[type="textarea"]');
const submit = document.querySelector('.new-task>input[type="checkbox"]');



const taskList  =  JSON.parse(localStorage.getItem('tasks'));
const container = document.querySelector('.task-list');

submit.addEventListener('click', ()=>{
    if(submit.checked){
        const task = input.value;
        if(validateInput(task)){ // if valid => add task 
            addTask(task);
        }
    }
});

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.type === 'childList'){
            const completeBtns = document.querySelectorAll('.task>input');
            const deleteBtns = document.querySelectorAll('.task-delete-btn');
            if(completeBtns.length != 0){
                completeBtns.forEach(button=>{
                    button.addEventListener('click', completeTask);
                });
            }
            if(deleteBtns.length != 0){
                deleteBtns.forEach(button=>{
                    button.addEventListener('click', deleteTask);
                });
            }
        }
    });
});
observer.observe(document.querySelector('.task-list'), { childList: true });


// check for invalid input 
// if valid return true;
function validateInput(value) {
    if(value.length != 0
        && value.trim != ' ')
        {
            return true;
        }
}


//add to array & add array to the local storage
function addTask(task){ 
    // check if task is already present
    if(tasks.some(str => str.content == task.trim())){
        alert('task already present');
        return;
    };
    //add to array & local storage
    tasks.push({
        "content" : task,
        "status" : 'incomplete'
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
// display tasks after loading
displayTasks();
showCount();
function displayTasks(){
    const taskList  =  JSON.parse(localStorage.getItem('tasks'));
    const container = document.querySelector('.task-list');
   
    // Clear the container element
    container.innerHTML = '';

    if(!taskList){
        return;
    }
    for (const task of taskList) {
        // Create a div element for the item
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // add checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status == 'complete';
        if(checkbox.checked){
            taskDiv.classList.add('complete');
        }

        // add content
        const taskContent = document.createElement('p');
        taskContent.innerHTML = task.content;

        // add deletebtn
        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('task-delete-btn');
        
        taskDiv.append(checkbox,taskContent,deleteBtn);

    
        // Append the div to the container element
        container.appendChild(taskDiv);
    }
    showCount();
}

function completeTask(){
    const task = this.parentElement;
    const taskContent = this.parentElement.querySelector('p').innerHTML;
    let completed;

    if(this.checked){
        task.classList.add('complete');
        completed = true;
    }else{
        task.classList.remove('complete');
        completed =  false;
    }
    let status = completed ? 'complete' : 'incomplete';
    
    // update array & local storage
    tasks.forEach(task=>{
        if(task.content === taskContent){
            task.status = status;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    showCount();
}

function deleteTask(){
    const taskDiv = this.parentElement;
    const taskContent = taskDiv.querySelector('p').innerHTML;
    
    // remove clicked tasks(this removes duplicates too)
    tasks = tasks.filter(task => task.content != taskContent);
    // update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    if(tasks.length == 0){
        localStorage.clear();
    }
    // update html
    displayTasks();
    showCount();
}

// update task count
function showCount(){
    const taskCounterSpan = document.querySelector('.num-items');

    let count = 0;
    tasks.filter(task=> task.status === 'incomplete').forEach(task =>{
        count++;
    });
    // display count
    taskCounterSpan.innerHTML = count;
}

// display active tasks
function displayActiveTasks(){
    const taskList  =  JSON.parse(localStorage.getItem('tasks'));
    const container = document.querySelector('.task-list');
}

