import express from "express";
import cors from 'cors';




const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
  }));

app.get('/', (req, res) => {
    res.send('App is running..');
  });



app.listen(process.env.PORT || 5001 ,()=>{
    console.log("server running !")
});
