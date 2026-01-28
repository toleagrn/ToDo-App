To-Do App
  This application is a vanilla JavaScript task manager that utilizes Object-Oriented Programming (OOP) and Event Delegation to handle task creation, persistent storage, and UI state management.

## Core Logic & Architecture
  The application is structured around two primary classes to ensure data consistency and logical encapsulation:
  Task Class: Acts as a data schema, ensuring every task object contains a title, description, notes, due date, and completion status.
  ToDoList Class: Manages the collection of tasks, handling the interface between the data layer and the DOM. It contains methods for rendering the UI (displayTasksAll) and saving data (saveNewtask).
  Event Delegation: Instead of attaching listeners to every button, the app listens for clicks on the mainContainer. It identifies which task was interacted with using the event.target and the .closest(".task-container") method.

## LocalStorage Implementation
  The app uses the browser's localStorage to ensure tasks persist after a page refresh.
  Saving Data: Tasks are saved using Date.now() as a unique key. The task object is converted into a string using JSON.stringify() before being stored.
  Retrieving Data: Upon initialization and every re-render, the app uses Object.entries(localStorage) to pull all stored data.
  Data Parsing: Because localStorage stores everything as strings, the app utilizes JSON.parse() within a try...catch block to safely convert strings back into usable JavaScript objects.
  Synchronization: Whenever a task is deleted or its completion status is toggled, the app calls localStorage.removeItem() or localStorage.setItem() followed immediately by a UI re-render to keep the "Source of Truth" in sync with the view.
