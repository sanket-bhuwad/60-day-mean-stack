const STORAGE_KEY = 'day-20-tasks';
const form = document.querySelector('#task-form');
const titleInput = document.querySelector('#task-title');
const categoryInput = document.querySelector('#task-category');
const searchInput = document.querySelector('#search-input');
const taskList = document.querySelector('#task-list');
const status = document.querySelector('#task-status');
const filterButtons = document.querySelectorAll('[data-filter]');

let tasks = readTasks();
let activeFilter = 'all';

function readTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error('Unable to read saved tasks:', error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function visibleTasks() {
  const query = searchInput.value.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'completed' && task.completed) ||
      (activeFilter === 'active' && !task.completed);
    const matchesSearch =
      !query ||
      `${task.title} ${task.category}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });
}

function render() {
  const filteredTasks = visibleTasks();
  taskList.replaceChildren();

  filteredTasks.forEach((task) => {
    const item = document.createElement('li');
    item.className = `task ${task.completed ? 'completed' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', `Mark ${task.title} complete`);
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      saveTasks();
      render();
    });

    const content = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = task.title;
    const category = document.createElement('span');
    category.textContent = task.category;
    content.append(title, category);

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove';
    removeButton.textContent = 'Delete';
    removeButton.addEventListener('click', () => {
      tasks = tasks.filter((candidate) => candidate.id !== task.id);
      saveTasks();
      render();
    });

    item.append(checkbox, content, removeButton);
    taskList.append(item);
  });

  const count = filteredTasks.length;
  status.textContent = `${count} ${count === 1 ? 'task' : 'tasks'} shown`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  tasks.unshift({
    id: crypto.randomUUID(),
    title: titleInput.value.trim(),
    category: categoryInput.value.trim(),
    completed: false,
  });
  saveTasks();
  form.reset();
  titleInput.focus();
  render();
});

searchInput.addEventListener('input', render);
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((candidate) =>
      candidate.classList.toggle('active', candidate === button),
    );
    render();
  });
});

render();
