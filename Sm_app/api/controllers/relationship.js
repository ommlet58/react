import  jwt  from "jsonwebtoken";
import { db } from "../connect.js";

export const getRelationships = (req,res)=>{ 
            const q = "SELECT followerUserId FROM relashionships WHERE followedUserId = ?"
    
            db.query(q,[req.query.followedUserId],(err, data)=>{
                if(err) return res.status(500).json(err);
                return res.status(200).json(data.map(relationship => relationship.followerUserId));
            })
        
        }


        
        export const addRelationship = (req,res)=>{
            const token = req.cookies.accessToken;
        
            if(!token) return res.status(401).json('Not logged in!')
        
            jwt.verify(token,"secretkey",(err,userInfo)=>{
                if(err) return res.status(403).json('Token is not vaild !')
            
            
            
                const q = "INSERT INTO likes (`userid`,`postId`) VALUES (?)"
            
                const values =[
                    userInfo.id,
                    req.body.postId
                ]
            
                db.query(q,[values],(err, data)=>{
                    if(err) return res.status(500).json(err);
                    return res.status(200).json("Post has been liked");
                })
            
            })
        
        }
        





export const deleteRelationship = (req,res)=>{
    const token = req.cookies.accessToken;

    if(!token) return res.status(401).json('Not logged in!')

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json('Token is not vaild !')
    
    
    
        const q = "DELETE FROM likes WHERE `userid`= ? AND `postid`= ?"
    
        
    
        db.query(q,[userInfo.id, req.query.postId],(err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post has been desliked");
        })
    
    })

}

