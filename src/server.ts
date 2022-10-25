import express from 'express';

import { produtsRoutes } from './routes/produts.routes';



const app = express();

app.use(express.json())

app.use("/produts",produtsRoutes)


app.listen(3001,() => console.log("server is running!"));