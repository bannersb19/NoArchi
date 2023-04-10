import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleroutes from './routes/dalle.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "100mb" }))

app.use('/api/v1/dalle', dalleroutes)


app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from OPEN-AI" })
  })
  
app.listen(8080, () => console.log('http://localhost:8080'))
  