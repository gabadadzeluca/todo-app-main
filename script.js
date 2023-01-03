"use strict";


const input = document.querySelector('.new-task>input[type="textarea"]');
const submit = document.querySelector('.new-task>input[type="checkbox"]');

let taskHTML = '';
submit.addEventListener('click', ()=>{
    console.log(submit.checked);
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
        && value.trim != ' '){
            return true;
        }
}

let tasks = []; 
//add to array & add array to the local storage
function addTask(task){ 
    tasks.push(task);
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



