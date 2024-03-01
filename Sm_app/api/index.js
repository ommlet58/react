import express from "express";
import authRouts from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";

import userRouts from "./routes/users.js";
import postRouts from "./routes/posts.js";
import likeRouts from "./routes/likes.js";
import commentRouts from "./routes/comments.js";

const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next();
})

app.use(express.json());
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

  app.post("/api/upload",upload.single('file'),(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
  })

app.use("/api/auth",authRouts);
app.use("/api/users",userRouts);
app.use("/api/posts",postRouts);
app.use("/api/comments",commentRouts);
app.use("/api/likes",likeRouts);



app.listen(8081,()=>{
    console.log("api working ");
})

