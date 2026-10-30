"use strict";

const STORAGE_KEY = "day-11-task-list";
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");

let tasks = loadTasks();

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch (error) {
    if (error instanceof SyntaxError) {
      return [];
    }

    throw error;
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item${task.completed ? " completed" : ""}`;
    item.dataset.taskId = task.id;

    const checkbox = document.createElement("input");
    checkbox.className = "task-check";
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark "${task.title}" complete`);

    const label = document.createElement("span");
    label.className = "task-label";
    label.textContent = task.title;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete "${task.title}"`);

    item.append(checkbox, label, deleteButton);
    taskList.append(item);
  });

  const remainingTasks = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${remainingTasks} ${remainingTasks === 1 ? "task" : "tasks"} left`;
  emptyState.hidden = tasks.length > 0;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();

  if (!title) {
    return;
  }

  tasks.push({
    id: crypto.randomUUID(),
    title,
    completed: false,
  });
  saveTasks();
  renderTasks();
  taskForm.reset();
  taskInput.focus();
});

taskList.addEventListener("change", (event) => {
  if (!event.target.classList.contains("task-check")) {
    return;
  }

  const taskItem = event.target.closest(".task-item");
  const task = tasks.find(({ id }) => id === taskItem.dataset.taskId);
  task.completed = event.target.checked;
  saveTasks();
  renderTasks();
});

taskList.addEventListener("click", (event) => {
  if (!event.target.matches("[data-action='delete']")) {
    return;
  }

  const taskItem = event.target.closest(".task-item");
  tasks = tasks.filter(({ id }) => id !== taskItem.dataset.taskId);
  saveTasks();
  renderTasks();
});

renderTasks();
