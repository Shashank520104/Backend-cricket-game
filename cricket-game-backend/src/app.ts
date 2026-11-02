import express from "express";

const app=express();

app.use(express.json());

app.get("/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Cricket Game Backend is running successfully"
    });
});

export default app;