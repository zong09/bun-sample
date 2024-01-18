import { logger } from '@grotto/logysia';
import { Elysia } from 'elysia';
import { securitySetup } from './commons/security';
import { swaggerSetup } from './commons/swagger';

const PORT = process.env.PORT || 3000;
export const app = new Elysia();

app
  .use(securitySetup)
  .use(swaggerSetup)
  .use(logger())
  // .use(hooksSetup)
  .get('/', () => 'Hello Bun.js!')
  // .group('/api', (app: Elysia) =>
  //   app
  //     .use(usersController)
  //     .use(staticDataController)
  //     // and other controllers
  // )
  .listen(PORT, () => {
    console.log(`🦊 Elysia is running at ${app.server?.hostname}:${PORT}`);
  });
