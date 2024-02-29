import  jwt  from "jsonwebtoken";
import { db } from "../connect.js";

export const getLikes = (req,res)=>{ 
            const q = "SELECT userid FROM likes WHERE postid = ?"
    
            db.query(q,[req.query.postId],(err, data)=>{
                if(err) return res.status(500).json(err);
                return res.status(200).json(data.map(like => like.userid));
            })
        
        }



