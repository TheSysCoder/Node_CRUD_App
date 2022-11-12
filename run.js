// import all require packages here
import express, { json } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose";

// import config
dotenv.config({
    path: './config.env'
})

// create express app
const app = express();
const PORT = process.env.PORT || 3001

// add CORS middleware

app.use(
    cors({
        origin:"*",
        methods: ['GET','POST','DELETE','PUT','PATCH']
    })
)

// json middleware
app.use(express.json())

// Listen app for request

app.listen(PORT,(err)=>{
    if (err) {
        console.error("Oh no! There is something wrong");
    }else{
        console.log("Awesome!!! Our express serve is started.");
    }
})

// connect to the database

const dbURL = "mongodb://"+process.env.DB_CONNECTION_URL+":"+process.env.DB_PORT+"/"+process.env.DB_NAME

