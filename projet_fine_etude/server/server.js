import express from "express";
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from "cookie-parser";

import authRouts from "./routes/auth.js";
import houseRouts from "./routes/house.js";
import multer from "multer";



const app = express();


app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next();
})
app.use(cors({
    origin:"http://localhost:3000"}
));

app.use(cookieParser());



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/uplead')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post("/server/upload",upload.single('file'),(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
  })




app.use("/server/auth",authRouts);
app.use("/server/house",houseRouts);



app.listen(8081,()=>{
console.log("listening")
})

