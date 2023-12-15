import express from "express";
import cors from 'cors';
import PDFParser from 'pdf-parse';
import multer from 'multer';
import isimler from './isimler.js';




const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
  }));



app.listen(process.env.PORT || 5001 ,()=>{
    console.log("server running !")
});
