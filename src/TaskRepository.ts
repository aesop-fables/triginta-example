import { Task } from './Task';

export interface ITaskRepository {
  create(summary: string): Promise<Task>;
  list(): Promise<Task[]>;
}

export class TaskRepository implements ITaskRepository {
  readonly tasks: Task[] = [];

  async create(summary: string): Promise<Task> {
    const task = {
      id: 'nope',
      summary,
      complete: false,
    };

    this.tasks.push(task);

    return task;
  }

  async list(): Promise<Task[]> {
    return this.tasks;
  }
}
