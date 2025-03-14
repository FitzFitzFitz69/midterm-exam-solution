// Array to store tasks
let task = [];

// DOM Elements
const Form = document.getElementById('task-form');
const Input = document.getElementById('task-input');
const List = document. getElementById('task-list');

// Function to render tasks
function renderTasks(){
  List.innerHTML = ''; // Clear the list
  task.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button onclick ="edittask(${index})">Edit</button>
      <button onclick ="deletetask(${index})">Delete</button>
    `;
    List.appendChild(li);
  });
}

// Function to add a new task
function addTask(event){
  event.preventDefault(); // Prevent form submission
  const newtask = Input.value.trim();
  if (newtask){
      task.push(newtask);
      Input.value = ''; // Clear the input
      renderTasks();
  }
}

// Function to edit a task
function editTask(index){
  const updatedtask = prompt('Edit your task:', task[index]);
  if (updatedtask !== null){
    task[index] = updatedtask.trim()
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  if (confirm('Are you sure you want to delete this task?')) {
    task.splice(index, 1);
    renderTasks();
  }
}

// Event Listeners
Form.addEventListener('submit', addTask());

// Initial render
renderTasks();

