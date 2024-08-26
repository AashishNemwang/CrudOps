import express from 'express'
import cors from 'cors'
import userRouter from "./router/userRouter.js"

import db from './db.js';
const app = express();
app.use(cors())

app.use(express.json());

app.use('/api', userRouter);


app.listen(5555,()=>{
    console.log("Wow!! Server is running")
})