const submit = document.getElementById('submit');
const newTask = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

submit.disabled = true;

newTask.addEventListener('input', function() {
  submit.disabled = !this.value; /* Enable button if input is not empty*/
});

document.getElementById('tasks').addEventListener('submit', function(event) {
  event.preventDefault(); /* Prevent default form submission*/

  const task = newTask.value; 

  const listItem = document.createElement('li'); /* Create list item and add task*/
  listItem.textContent = task; 

   taskList.append(listItem); /* Add the list item to the list*/

  
  newTask.value = '';/* Clear the input field*/
  submit.disabled = true; /* Disable button after submission*/

  return false; /* Prevent default form action*/
});