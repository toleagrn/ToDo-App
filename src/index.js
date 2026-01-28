import "./style.css";

// Function for validating the date of input
function isDateValid(inputDate) {
    const selectedDate = new Date(inputDate);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
}

// Load tasks from storage
function loadTasksFromStorage() {
    let tasks = Object.entries(localStorage).map(([key, value]) => {
        try {
            return {key, data: JSON.parse(value)};
        } catch(error) {
            return {key, data: value};
        }
    })
    return tasks;
}

class Task {
    constructor(title, description, notes, 
                dueDate, doneStatus, project) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.dueDate = dueDate;
        this.doneStatus = doneStatus;
        this.project = project;
    }
}

class ToDoList {
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = loadTasksFromStorage();
    }

    displayTasksAll() {
        // Getting the entries from localstorage
        this.tasks = loadTasksFromStorage();
        
        // DOM scripting to display
        mainContainer.innerHTML = "";
        completeTaskDisplay.innerHTML = "";

        for(const item of this.tasks) {
            const taskContainer = document.createElement("div");
            taskContainer.dataset.key = item.key;
            taskContainer.classList.add("task-container");

            const taskTitle = document.createElement("h2");
            taskTitle.classList.add("heading2");
            taskTitle.textContent = item.data.title;

            const taskDescription = document.createElement("p");                
            taskDescription.classList.add("task-description");
            taskDescription.textContent = item.data.description;

            const dueDate = document.createElement("p");
            dueDate.classList.add("due-date");
            dueDate.textContent = item.data.dueDate;

            const btnWrapper = document.createElement("div");
            btnWrapper.classList.add("btn-wrapper");

            const doneBtn = document.createElement("button");
            doneBtn.classList.add("done-btn");
            doneBtn.textContent = "✓";

            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("done-btn");
            deleteBtn.classList.add("delete-task-btn");
            deleteBtn.textContent = "x";

            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskDescription);
            taskContainer.appendChild(dueDate);
            btnWrapper.appendChild(doneBtn);
            btnWrapper.appendChild(deleteBtn);
            taskContainer.appendChild(btnWrapper);

            if(!item.data.doneStatus){
                taskContainer.classList.remove("completed");
                mainContainer.appendChild(taskContainer);
            } else {
                completeTaskDisplay.appendChild(taskContainer);
                taskContainer.classList.add("completed");
            }   
        }

    }

    saveNewtask(task) {
        localStorage.setItem(Date.now(), JSON.stringify(task));
    }
}

// Main display containers
const mainContainer = document.querySelector(".display");
const completeTaskDisplay = document.querySelector(".display-done");
const workProject = new ToDoList("work");
workProject.displayTasksAll();

const toggleHandler = (event) => {
    const taskKey = Number(event.target.closest(".task-container").dataset.key);

    if(event.target.classList.contains("done-btn")) {
        for(const item of workProject.tasks) {
            if(item.key == taskKey) {
                item.data.doneStatus = !item.data.doneStatus;
                localStorage.setItem(item.key, JSON.stringify(item.data));
                workProject.displayTasksAll();
            }
        }
    }
    
    if(event.target.classList.contains("delete-task-btn")) {
        localStorage.removeItem(taskKey);
        workProject.displayTasksAll();
    }
}

// Add new task btn logic
// Displaying the form
const addNewtaskBtn = document.querySelector("#add-task-btn");
const overlay = document.querySelector(".overlay");
const formAddTask = document.querySelector(".add-task-form");
addNewtaskBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
})

const saveTaskBtn = document.querySelector("#save-task");
    saveTaskBtn.addEventListener("click", (event) => {
        event.preventDefault();

        // Client side form validation
        const taskTitle = document.querySelector("#title-field").value;
        if(taskTitle.length < 3) {
            alert("Title must be longer!")
            return;
        } else if(taskTitle.length > 60) {
            alert("Title must be shorter!");
            return;
        }

        const taskDescription = document.querySelector("#description-field").value;
        if(taskDescription.length < 3) {
            alert("Add a longer desription!");
            return;
        } else if(taskDescription.length > 90) {
            alert("Description must be shorter! (Hint) ->  You can use notes for longer text if needed!");
            return;
        }

        const taskDueDate = document.querySelector("#dueDate-field").value;
         if(!isDateValid(taskDueDate)) {
            alert("Need to enter a date in the future!");
            return;
        }

        const taskNotes = document.querySelector("#notes-field");
        if(taskNotes.length > 500) {
            alert("Notes must be shorter!");
            return;
        }
        
        // Creating a new Task instance with form data
        const currentTask = new Task(
            document.querySelector("#title-field").value,
            document.querySelector("#description-field").value,
            document.querySelector("#notes-field").value,
            document.querySelector("#dueDate-field").value,
            false
        )

        // Saving task, updating the display
        workProject.saveNewtask(currentTask);
        formAddTask.reset();
        workProject.displayTasksAll();
        overlay.classList.add("hidden");
    })

// Closing the form on outside click and cancelBtn
const cancelFormBtn = document.querySelector("#cancel-new-task");
overlay.addEventListener("click", (event) => {
    if(event.target === overlay) overlay.classList.add("hidden");
})

cancelFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.classList.add("hidden");
    formAddTask.reset();
})

// Revealing the notes on click
const toggleNotes = (event) => {
    if(event.target.classList.contains("task-container")) {
        const taskContainer = event.target.closest(".task-container");
        const taskKey = Number(taskContainer.dataset.key);
        if(taskContainer.dataset.notes === "true") {
            taskContainer.nextElementSibling?.remove();
            taskContainer.dataset.notes = "false";
            return;
        };

        for(const item of workProject.tasks) {
            if(item.key == taskKey) {
                taskContainer.classList.toggle("opened");
                taskContainer.dataset.notes = "true";
                const notesDiv = document.createElement("div");
                notesDiv.classList.add("notes-section");
                notesDiv.textContent = item.data.notes;
                event.target.closest(".task-container").insertAdjacentElement("afterend", notesDiv);
            }
        }
    }
}

mainContainer.addEventListener("click", toggleNotes);
mainContainer.addEventListener("click", toggleHandler);
completeTaskDisplay.addEventListener("click", toggleHandler);

// Event listener for today btn
const todayBtn = document.querySelector("#today-btn");
todayBtn.addEventListener("click", () => {
    for(const item of workProject.tasks) {
        const dateOfTask = new Date(item.data.dueDate);
        const today = new Date();
        
        if(dateOfTask.getDate() === today.getDate() &&
           dateOfTask.getMonth() === today.getMonth() &&
           dateOfTask.getFullYear() === today.getFullYear()) {
                const taskContainer = document.querySelector(`[data-key="${Number(item.key)}"]`);
                taskContainer.classList.toggle("today-task");
        }
    }
})

// Event listener for overdued
const overdueBtn = document.querySelector("#overdue-btn");
overdueBtn.addEventListener("click", () => {
    for(const item of workProject.tasks) {
        const dateOfTask = new Date(item.data.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if(dateOfTask < today) {
            const taskContainer = document.querySelector(`[data-key="${Number(item.key)}"]`);
            taskContainer.classList.toggle("overdue-task");
        }
    }
})
