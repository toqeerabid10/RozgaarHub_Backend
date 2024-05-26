import express from 'express'
import dotenv from 'dotenv'; //dotenv is setup for environment variable of nodejs thta deal with env
import cors from 'cors' //cors used for connect backend with frontend
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import userRouter from './routes/userRouter.js'
import applicationRouter from './routes/applicationRouter.js'
import jobRouter from './routes/jobRouter.js'
import {dbConnection} from './database/dbConnection.js'
import { errorMiddleware } from './middlewares/error.js';
const app=express()

dotenv.config({path: './config/config.env'})

app.use(cors({
 origin:[process.env.Frontend_URL], //origin array use like if we want this backend connect with multiple frontend
 methods:['GET','POST','DELETE','PUT'],
 credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); //convert strin into json
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: "/tem/",

}));

app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);

dbConnection();
app.use(errorMiddleware)
export default app;