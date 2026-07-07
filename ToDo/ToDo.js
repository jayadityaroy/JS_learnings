const Task = {
    task: '',
    isCompleted: false,
}
const ToDo = {
    Tasks: [],
    addTask: function (task) {
        const newTask = {task, isCompleted: false};
        this.Tasks.push(newTask); 
        this.renderTasks();
    },
    renderTasks: function () {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // Clear the existing tasks before rendering
        this.Tasks.forEach((taskObj, index) => {
            const li = document.createElement("li"); // Create a new list item for each task
            li.textContent = taskObj.task; // Set the text content of the list item to the task
            li.onclick = () => this.toggleTask(index); // Add an onclick event to toggle the task's completion status
            if (taskObj.isCompleted) {
                li.style.textDecoration = "line-through"; // If the task is completed, strike through the text
                const removeButton = document.createElement("button"); // Create a remove button for completed tasks
                removeButton.textContent = "Remove"; // Set the text content of the remove button
                removeButton.onclick = (event) => {
                    event.stopPropagation(); // Prevent the click event from propagating to the list item, so it doesn't toggle the task's completion status
                    this.removeTask(index);
                };
                li.appendChild(removeButton); // Append the remove button to the list item
            }
            taskList.appendChild(li); // Append the list item to the task list
        })
    },
    toggleTask: function(index){
        this.Tasks[index].isCompleted = !this.Tasks[index].isCompleted;
        this.renderTasks();
    },
    removeTask: function(index){
        if(this.Tasks[index].isCompleted){
            this.Tasks.splice(index, 1); // Remove the task from the array if it is completed
            this.renderTasks(); // Re-render the tasks after removal
        }
    }
}
document.getElementById("addTaskButton").onclick = () => {
    const taskInput = document.getElementById("taskInput");
    ToDo.addTask(taskInput.value);
    taskInput.value = ""; // reset the input field after adding the task
}