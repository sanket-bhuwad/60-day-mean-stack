const API_URL = 'https://jsonplaceholder.typicode.com/users';

const statusMessage = document.querySelector('#status');
const retryButton = document.querySelector('#retry-button');
const userList = document.querySelector('#user-list');

function setStatus(message, state) {
  statusMessage.textContent = message;
  statusMessage.dataset.state = state;
}

function createUserCard(user) {
  const card = document.createElement('article');
  card.className = 'user-card';

  const name = document.createElement('h3');
  name.textContent = user.name;

  const username = document.createElement('p');
  username.className = 'username';
  username.textContent = `@${user.username}`;

  const details = document.createElement('dl');
  const fields = [
    ['Email', user.email],
    ['Company', user.company.name],
    ['Location', `${user.address.city}, ${user.address.zipcode}`],
  ];

  fields.forEach(([label, value]) => {
    const term = document.createElement('dt');
    term.textContent = label;
    const description = document.createElement('dd');
    description.textContent = value;
    details.append(term, description);
  });

  card.append(name, username, details);
  return card;
}

function renderUsers(users) {
  userList.replaceChildren(...users.map(createUserCard));
}

async function loadUsers() {
  retryButton.hidden = true;
  userList.replaceChildren();
  setStatus('Loading users...', 'loading');

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const users = await response.json();

    if (!Array.isArray(users) || users.length === 0) {
      setStatus('No users were returned by the API.', 'empty');
      return;
    }

    renderUsers(users);
    setStatus(`${users.length} users loaded.`, 'success');
  } catch (error) {
    setStatus(
      'The users could not be loaded. Check your connection and try again.',
      'error',
    );
    retryButton.hidden = false;
    console.error('Unable to load users:', error);
  }
}

retryButton.addEventListener('click', loadUsers);
loadUsers();
