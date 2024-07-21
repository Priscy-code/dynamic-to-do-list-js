document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input")
    const taskList = document.getElementById("task-list")

    const addTask = function (){
        const taskText = taskInput.value.trim();
        if (!taskText){
            alert("please enter a task");
            return;
        }
        const newListItem = document.createElement("li");
        newListItem.textContent = taskText;

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn")

        removeButton.addEventListener("click", function(){
            taskList.removeChild(newListItem)})
        
        newListItem.appendChild(removeButton);
        taskList.appendChild(newListItem);

        tasks.push(taskValue); 
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addTask();

   const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON) {
    const tasks = JSON.parse(tasksJSON);
}
})
function removeTask(event) {
  const taskToRemove = event.target.parentNode;

  taskList.removeChild(taskToRemove);
  const taskIndex = tasks.indexOf(taskToRemove.textContent); 
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } 
}
function loadTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem('tasks');
  if (tasksJSON) {
    const tasks = JSON.parse(tasksJSON);
    const taskList = document.getElementById('taskList'); 
    tasks.forEach(function(task) {
      const newTask = document.createElement('li');
      newTask.textContent = task;
      taskList.appendChild(newTask);
    });
  }
}
