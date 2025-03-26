import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { errorHandler } from './middlewares/errorHandler';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SALES API',
      version: '0.1.1',
      description: 'Sales Application Testing Resolution [HuntIt]',
      contact: {
        name: 'Rafael Mota Ribeiro Xavier',
        url: 'https://www.linkedin.com/in/motarxrafael/',
        email: 'mottacfh.nox@gmail.com',
        phone: '+55 (11) 977 620 032',
      },
      license: {
        name: 'UNLICENSED',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development Environment',
      },
      {
        url: 'http://localhost:3333',
        description: 'Production Environment',
      },
    ],
  },
  apis: ['./src/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(cors());
app.use(express.json());

// @ts-expect-error swaggerUI.serve is not typed
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(router);
app.use(errorHandler);

export { app };
