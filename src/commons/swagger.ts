import { swagger } from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import * as pack from '../../package.json';

export const swaggerSetup = (app: Elysia) =>
  app.use(
    swagger({
      path: '/v1/swagger',
      documentation: {
        info: {
          title: 'Bun with Elysia.js',
          version: pack.version || '',
        },
      },
    }),
  );
