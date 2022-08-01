import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import controllers from './controllers';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())

controllers(app);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
