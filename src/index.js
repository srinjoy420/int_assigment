import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import classifyroueter from "./routes/Classifier.routers.js"
import COnnectDB from "./db/index.db.js"

dotenv.config();
const app=express();
const PORT=process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send("Hello World!");
});
app.get("/health",(req,res)=>{
    res.status(200).json({
        message:"Server is running succesfully",
       success:true
    })
})
app.use("/api/v1/text",classifyroueter)
COnnectDB()
app.listen((PORT),()=>{
    console.log("server is running at ",PORT);
    
})