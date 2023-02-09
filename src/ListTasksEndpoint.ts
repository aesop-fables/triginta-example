import { inject } from '@aesop-fables/containr';
import { httpGet, IHttpEndpoint, useMiddleware } from '@aesop-fables/triginta';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { createHttpLambda } from './Bootstrap';
import { CreateTaskEndpoint } from './CreateTaskEndpoint';
import { Task } from './Task';
import { ITaskRepository } from './TaskRepository';
import { TaskServices } from './TaskServices';

interface ListTasksRequest {}

@httpGet('/tasks')
@useMiddleware(httpJsonBodyParser)
export class ListTasksEndpoint implements IHttpEndpoint<ListTasksRequest, Task[]> {
  constructor(@inject(TaskServices.Repository) private readonly repository: ITaskRepository) {}

  handle(): Promise<Task[]> {
    return this.repository.list();
  }
}

export const handler = createHttpLambda(CreateTaskEndpoint);
