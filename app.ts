import express, { Express, Request, Response } from 'express';
import router from './routes'
import dotenv from 'dotenv'

const app: Express = express();
const port = 3001;
dotenv.config();

app.use('/api', router)
app.get('/', (req: Request, res: Response) => {
  res.send('Server Ready');
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});