import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const addInfo  = (req, res) => {

    const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not vaild !");

    
    const q =
      " INSERT INTO `house`( `title`, `addresse`, `guest`, `bedroom`, `bed`, `bath`, `img1`, `img2`, `img3`, `img4`, `description`, `userId`) VALUES  (?)";

    const values = [
    
        req.body.title,
        req.body.address,
        req.body.guest,
        req.body.bedroom,
        req.body.bed,
        req.body.bath,
        req.body.img1,
        req.body.img2,
        req.body.img3,
        req.body.img4,
        req.body.description,
        req.body.userId,



    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("house created");
    });
  });
};

export const  getHouseInfo = (req,res) =>{

  const userId = req.params.userId;
  const query = "SELECT * FROM `house` WHERE `userId` = ?";

  db.query(query, [userId], (err, data) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: 'House information not found' });
    }

    const houseInfo = data[0];
    return res.json(houseInfo);
  });
}


export const getHouseBooking = (req , res )=>{
  
  const userId = req.params.userId;
  const query = "SELECT * FROM `housebooking`  WHERE  `userId` = ?";
  

  db.query(query, [userId], (err, data) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: 'Booking information not found' });
    }

    const houseInfo = data;
    return res.json(houseInfo);
  })

}


export const  getHouseBookingToday = (req,res) =>{

  const userId = req.params.userId;
  const query = "SELECT count(checkIn) AS bookingCount FROM `housebooking` WHERE `userId` = ? and DATE(checkIn) = CURDATE()";

  db.query(query, [userId], (err, data) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: 'House information not found' });
    }

    return res.json({ bookingCount: data[0].bookingCount });

  });
}
export const  getHouseBookingmonth = (req,res) =>{

  const userId = req.params.userId;
  const query = "SELECT count(checkIn) AS bookingCount FROM `housebooking` WHERE `userId` = ? and MONTH(checkIn) = MONTH(CURRENT_DATE()) AND YEAR(checkIn) = YEAR(CURRENT_DATE())";

  db.query(query, [userId], (err, datacount) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (datacount.length === 0) {
      return res.status(404).json({ message: 'House information not found' });
    }

    return res.json({ monthCount: datacount[0].bookingCount });

  });
}
