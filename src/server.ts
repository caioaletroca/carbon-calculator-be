import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

import { Router, Request, Response } from 'express';

dotenv.config();

const app = express();

const route = Router()

app.use(cors());
app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
