const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get("/",(req,res)=>{
    const  sql = "SELECT * FROM student";

    db.query(sql,(err,data)=>{
        if(err)return res.json("error");
        return res.json(data);
    })
})

app.post('/create', (req,res)=>{
    const sql = "INSERT INTO student (`Name`,`Email`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json('Error');
        return res.json(data);
    })
  })
 
app.put('/update/:id', (req,res)=>{
    const sql = "UPDATE student SET `Name` = ?, `Email` = ? WHERE ID = ?";

    const values = [
        req.body.name,
        req.body.email,
    ]
    const id = req.params.id;

    db.query(sql, [...values, id],(err,data)=>{
        if(err) return res.json('Error');
        return res.json(data);
    })
  })
 
  app.put('/update/:id', (req,res)=>{
    const sql = "UPDATE student SET `Name` = ?, `Email` = ? WHERE ID = ?";

    const values = [
        req.body.name,
        req.body.email,
    ]
    const id = req.params.id;

    db.query(sql, [...values, id],(err,data)=>{
        if(err) return res.json('Error');
        return res.json(data);
    })
  })

  app.delete('/student/:id', (req,res)=>{
    const sql = "DELETE FROM `student` WHERE `student`.`ID` = ?";
     

    const id = req.params.id;

    db.query(sql, [id],(err,data)=>{
        if(err) return res.json('Error');
        return res.json(data);
    })
  })
 

//sign up regestration

app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO login ( `name`, `Email`, `password`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password 
    ]

    db.query(sql,[values],(err , data) => {
        if(err){
            return res.json("error");
        }
        return res.json(data);
    })
})


//login 

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `Email` = ? AND `password` = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password 
    ]

    db.query(sql,[req.body.email,req.body.password],(err , data) => {
        if(err){
            return res.json("error");
        }
        if(data.length > 0){
            return res.json("Succes")
        }else{
            return res.json("Fails")

        }
    })
})




app.listen(8081,()=>{
    console.log("lestening");
})