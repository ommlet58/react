import express from "express";
import authRouts from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

//import userRouts from "./routes/users.js";
//import postRouts from "./routes/posts.js";
//import likeRouts from "./routes/likes.js";
//import commentRouts from "./routes/comments.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser);


app.use("/api/auth",authRouts);
//app.use("/api/users",userRouts);
//app.use("/api/posts",postRouts);
//app.use("/api/comments",commentRouts);
//app.use("/api/likes",likeRouts);



app.listen(8081,()=>{
    console.log("api working ");
})

