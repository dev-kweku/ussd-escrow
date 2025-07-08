import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
dotenv.config()
const port=3000;


const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({msg:"app is ready"})
})


app.listen(port,(err)=>{
    if(err) throw new Error("server failed")
        console.log(`server is up on http://localhost:${port}`)
})