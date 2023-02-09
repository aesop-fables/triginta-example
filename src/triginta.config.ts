// /* eslint-disable @typescript-eslint/no-unused-vars */
// export { CreateTaskEndpoint } from './CreateTaskEndpoint';
// export { ListTasksEndpoint } from './ListTasksEndpoint';

// import { container } from './Bootstrap';
// import { RouteRegistry as routes, TrigintaConfig } from '@aesop-fables/triginta';

// const config: TrigintaConfig = {
//   container,
//   routes,
// };

// export default config;

export { CreateTaskEndpoint } from './CreateTaskEndpoint';
export { ListTasksEndpoint } from './ListTasksEndpoint';
export * from './Bootstrap';

export { RouteRegistry as routes } from '@aesop-fables/triginta';
