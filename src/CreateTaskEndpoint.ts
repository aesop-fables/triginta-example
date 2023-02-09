import { inject } from '@aesop-fables/containr';
import { httpPost, IHttpEndpoint, useMiddleware } from '@aesop-fables/triginta';
import { Task } from './Task';
import { ITaskRepository } from './TaskRepository';
import { TaskServices } from './TaskServices';
import { createHttpLambda } from './Bootstrap';
import httpJsonBodyParser from '@middy/http-json-body-parser';

interface CreateTaskRequest {
  summary: string;
}

@httpPost('/tasks')
@useMiddleware(httpJsonBodyParser)
export class CreateTaskEndpoint implements IHttpEndpoint<CreateTaskRequest, Task> {
  constructor(@inject(TaskServices.Repository) private readonly repository: ITaskRepository) {}

  handle(request: CreateTaskRequest): Promise<Task> {
    return this.repository.create(request.summary);
  }
}

export const handler = createHttpLambda(CreateTaskEndpoint);
