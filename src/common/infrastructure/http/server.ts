import { env } from '../env';
import { dataSource } from '../typeorm';
import { app } from './app';

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`🟢 Database connected!`);
      console.log(`🟢 Server is running on port ${env.PORT}!`);
      console.log(`🟢 API Documentation availabe at GET /api-docs`);
    });
  })
  .catch(error => {
    console.error(`🔴 Error connecting to database: `, error);
  });
