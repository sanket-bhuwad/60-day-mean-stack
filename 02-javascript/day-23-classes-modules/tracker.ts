import { Task } from './task';

export class TaskTracker {
  private readonly tasks: Task[] = [];

  add(task: Task): void {
    this.tasks.push(task);
  }

  find(query = ''): Task[] {
    const normalizedQuery = query.trim().toLowerCase();
    return this.tasks.filter((task) =>
      `${task.title} ${task.category}`.toLowerCase().includes(normalizedQuery),
    );
  }

  countCompleted(): number {
    return this.tasks.filter((task) => task.completed).length;
  }
}
