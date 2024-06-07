import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const sql =
    "INSERT INTO `houseuser`(`Name`, `phoneNumber`, `email`, `password`) VALUES (?)";

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const values = [
    req.body.name,
    req.body.phoneNumber,
    req.body.email,
    hashedPassword,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("error");
    }
    return res.json(data);
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM houseuser WHERE Name = ?";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const CheckPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!CheckPassword)
      return res.status(400).json("Wrong password or username");

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};



export const updateHouseUser = (req, res) => {
  
  
    

    const q1 = "SELECT * FROM houseuser WHERE `userId` = ?";

    db.query(q1, [req.body.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json('User not found!');

      const user = data[0];
      const checkPassword = bcrypt.compareSync(req.body.password, user.password);

      let newPassword;
      if (!checkPassword) {
        const salt = bcrypt.genSaltSync(10);
        newPassword = bcrypt.hashSync(req.body.password, salt);
      } else {
        newPassword = req.body.password;
      }

      const q2 = "UPDATE `houseuser` SET `Name`= ?, `phoneNumber`= ?, `email`= ?, `password`= ? WHERE `userId` = ?";
      const values = [
        req.body.Name,
        req.body.phoneNumber,
        req.body.email,
        newPassword,
        req.body.userId
      ];

      db.query(q2, values, (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated");
        return res.status(403).json("You can update only your account");
      });
    });
  
};


export const showhUserInfo = (req, res) => {

  const userId = req.params.userId;

  const q = "SELECT * FROM `houseuser` WHERE `userId` = ?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    return res.status(200).json(data[0]);
    
  });
};
