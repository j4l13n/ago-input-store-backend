import express, { Request, Response } from 'express';
import sequelize from './utils/database';
import Farmer from './models/Farmer';
import Order from './models/Order';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API is working');
});

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => console.log(err));
