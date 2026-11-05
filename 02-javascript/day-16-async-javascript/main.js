const wait = (value, delay, callback) => {
  setTimeout(() => callback(null, value), delay);
};

function loadUserWithCallback(callback) {
  wait({ id: 17, name: 'Sanket' }, 10, callback);
}

function loadUser() {
  return new Promise((resolve) => {
    wait({ id: 17, name: 'Sanket' }, 10, (error, user) => {
      if (error) {
        return;
      }

      resolve(user);
    });
  });
}

async function showUser() {
  const user = await loadUser();
  return `Loaded user: ${user.name}`;
}

function demonstrateEventLoop() {
  const order = [];

  order.push('synchronous');
  setTimeout(() => order.push('timer'), 0);
  Promise.resolve().then(() => order.push('promise microtask'));

  return new Promise((resolve) => {
    setTimeout(() => resolve(order), 0);
  });
}

console.log('Callback example:');
loadUserWithCallback((error, user) => {
  if (error) {
    console.error(`Could not load user: ${error.message}`);
    return;
  }

  console.log(`Loaded user: ${user.name}`);
});

loadUser()
  .then((user) => console.log(`Promise example: Loaded user ${user.name}`))
  .catch((error) => console.error(`Could not load user: ${error.message}`));

showUser()
  .then((message) => console.log(`Async/await example: ${message}`))
  .catch((error) => console.error(`Could not show user: ${error.message}`));

demonstrateEventLoop().then((order) => {
  console.log(`Event loop order: ${order.join(' -> ')}`);
});

console.log('Main script finished before asynchronous work.');
