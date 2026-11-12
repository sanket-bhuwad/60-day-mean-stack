import { Task } from './task';
import { TaskTracker } from './tracker';

const tracker = new TaskTracker();
const closures = new Task(1, 'Practise closures', 'JavaScript');
const types = new Task(2, 'Learn union types', 'TypeScript');

tracker.add(closures);
tracker.add(types);
closures.toggle();

console.log('matching tasks:', tracker.find('script').map((task) => task.title));
console.log('completed tasks:', tracker.countCompleted());
