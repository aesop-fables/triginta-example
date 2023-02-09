import 'reflect-metadata';
import { createServiceModule } from '@aesop-fables/containr';
import { HttpLambda } from '@aesop-fables/triginta';
import { ITaskRepository, TaskRepository } from './TaskRepository';
import { TaskServices } from './TaskServices';

const useTaskRepository = createServiceModule('taskRepository', (services) => {
  services.register<ITaskRepository>(TaskServices.Repository, new TaskRepository());
});

const { createHttpLambda } = HttpLambda.initialize([useTaskRepository]);
const container = HttpLambda.getContainer();

export { container, createHttpLambda };
