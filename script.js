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
        
    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  addTask();
})