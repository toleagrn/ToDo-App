import "./style.css";

// Function for validating the date of input
function isDateValid(inputDate) {
    const selectedDate = new Date(inputDate);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
}

// Storage functions
function getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function saveTasksToStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
        this.id = Date.now(); // Simple unique ID
    }
}

class ToDoList {
    constructor(projectName) {
        this.projectName = projectName;
        this.tasks = getTasksFromStorage();
    }

    render() {
        mainContainer.innerHTML = "";
        completeTaskDisplay.innerHTML = "";

        this.tasks.forEach(task => this.renderTask(task));
    }

    renderTask(task) {
        const taskContainer = document.createElement("div");
        taskContainer.dataset.id = task.id;
        taskContainer.classList.add("task-container");

        const taskTitle = document.createElement("h2");
        taskTitle.classList.add("heading2");
        taskTitle.textContent = task.title;

        const taskDescription = document.createElement("p");
        taskDescription.classList.add("task-description");
        taskDescription.textContent = task.description;

        const dueDate = document.createElement("p");
        dueDate.classList.add("due-date");
        dueDate.textContent = task.dueDate;

        const btnWrapper = document.createElement("div");
        btnWrapper.classList.add("btn-wrapper");

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("done-btn");
        doneBtn.textContent = "✓";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("done-btn", "delete-task-btn");
        deleteBtn.textContent = "x";

        taskContainer.append(taskTitle, taskDescription, dueDate, btnWrapper);
        btnWrapper.append(doneBtn, deleteBtn);

        if (task.doneStatus) {
            taskContainer.classList.add("completed");
            completeTaskDisplay.appendChild(taskContainer);
        } else {
            mainContainer.appendChild(taskContainer);
        }
    }

    saveNewTask(task) {
        this.tasks.push(task);
        saveTasksToStorage(this.tasks);
        this.renderTask(task);
    }

    findTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    toggleDoneStatus(id) {
        const task = this.findTaskById(id);
        if (task) {
            task.doneStatus = !task.doneStatus;
            saveTasksToStorage(this.tasks);
            this.render(); // Re-render for simplicity, but could be optimized
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        saveTasksToStorage(this.tasks);
        this.render();
    }

    getTaskNotes(id) {
        const task = this.findTaskById(id);
        return task ? task.notes : "";
    }
}

// --- DOM Elements ---
const mainContainer = document.querySelector(".display");
const completeTaskDisplay = document.querySelector(".display-done");
const addNewtaskBtn = document.querySelector("#add-task-btn");
const overlay = document.querySelector(".overlay");
const formAddTask = document.querySelector(".add-task-form");
const saveTaskBtn = document.querySelector("#save-task");
const cancelFormBtn = document.querySelector("#cancel-new-task");
const todayBtn = document.querySelector("#today-btn");
const overdueBtn = document.querySelector("#overdue-btn");

// --- App Initialization ---
const workProject = new ToDoList("work");
workProject.render();

// --- Event Handlers ---

function handleTaskActions(event) {
    const taskContainer = event.target.closest(".task-container");
    if (!taskContainer) return;

    const taskId = Number(taskContainer.dataset.id);

    if (event.target.classList.contains("done-btn")) {
        workProject.toggleDoneStatus(taskId);
    }

    if (event.target.classList.contains("delete-task-btn")) {
        workProject.deleteTask(taskId);
    }
}

// Revealing the notes on click
const toggleNotes = (event) => {
    if(event.target.classList.contains("task-container")) {
        const taskContainer = event.target.closest(".task-container");
        const taskId = Number(taskContainer.dataset.id);
        if(taskContainer.dataset.notes === "true") {
            taskContainer.nextElementSibling?.remove();
            taskContainer.dataset.notes = "false";
            return;
        };

        const notes = workProject.getTaskNotes(taskId);
        if (notes) {
            taskContainer.classList.toggle("opened");
            taskContainer.dataset.notes = "true";
            const notesDiv = document.createElement("div");
            notesDiv.classList.add("notes-section");
            notesDiv.textContent = notes;
            taskContainer.insertAdjacentElement("afterend", notesDiv);
        }
    }
}

function showForm() {
    overlay.classList.remove("hidden");
}

function hideForm() {
    overlay.classList.add("hidden");
    formAddTask.reset();
}

function validateAndSaveTask(event) {
    event.preventDefault();

    const title = document.querySelector("#title-field").value;
    const description = document.querySelector("#description-field").value;
    const dueDate = document.querySelector("#dueDate-field").value;
    const notes = document.querySelector("#notes-field").value;

    // Basic validation - could be improved with inline messages
    if (title.length < 3 || title.length > 60) {
        alert("Title must be between 3 and 60 characters!");
        return;
    }
    if (description.length < 3 || description.length > 90) {
        alert("Description must be between 3 and 90 characters!");
        return;
    }
    if (!isDateValid(dueDate)) {
        alert("Due date must be in the future!");
        return;
    }
    if (notes.length > 500) {
        alert("Notes must be shorter than 500 characters!");
        return;
    }

    const newTask = new Task(title, description, notes, dueDate, false);
    workProject.saveNewTask(newTask);
    hideForm();
}

function highlightTodayTasks() {
    const today = new Date();
    workProject.tasks.forEach(task => {
        const dateOfTask = new Date(task.dueDate);
        if (dateOfTask.getDate() === today.getDate() &&
            dateOfTask.getMonth() === today.getMonth() &&
            dateOfTask.getFullYear() === today.getFullYear()) {
            const taskContainer = document.querySelector(`[data-id="${task.id}"]`);
            taskContainer?.classList.toggle("today-task");
        }
    });
}

function highlightOverdueTasks() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    workProject.tasks.forEach(task => {
        const dateOfTask = new Date(task.dueDate);
        if (dateOfTask < today) {
            const taskContainer = document.querySelector(`[data-id="${task.id}"]`);
            taskContainer?.classList.toggle("overdue-task");
        }
    });
}

// --- Event Listeners ---
addNewtaskBtn.addEventListener("click", showForm);
saveTaskBtn.addEventListener("click", validateAndSaveTask);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) hideForm();
});

cancelFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    hideForm();
});

mainContainer.addEventListener("click", toggleNotes);
mainContainer.addEventListener("click", handleTaskActions);
completeTaskDisplay.addEventListener("click", handleTaskActions);

todayBtn.addEventListener("click", highlightTodayTasks);
overdueBtn.addEventListener("click", highlightOverdueTasks);
