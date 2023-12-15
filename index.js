import express from "express";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(process.env.PORT || 5001 ,()=>{
    console.log("server running !")
});