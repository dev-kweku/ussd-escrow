import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./src/config/db";

const app=express();
dotenv.config()
const port=3000;

app.listen(port,(err)=>{
    try{
        connectDb();
        if(err) throw new Error('server asleep')
            console.log(`server is up on http://localhost:${port}/`)
    }catch(err){
        console.error(err)
    }

})
