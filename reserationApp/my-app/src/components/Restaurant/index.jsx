import React from "react";
import imag1 from "../../assets/R.jpeg";
import imag2 from "../../assets/R1.jpeg";
import imag3 from "../../assets/R3.jpeg";
import imag4 from "../../assets/R4.jpg";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
const obj = [
  {
    image: imag1,
    name: "name1",
    rating: 4,
    address: "addrs1",
    type: "type1",
    review: 9,
  },
  {
    image: imag2,
    name: "name2",
    rating: 5,
    address: "addrs2",
    type: "type1",
    review: 9,
  },
  {
    image: imag3,
    name: "name1",
    rating: 4,
    address: "addrs1",
    type: "type1",
    review: 19,
  },
  {
    image: imag4,
    name: "name1",
    rating: 4,
    address: "addrs1",
    type: "type1",
    review: 10,
  },
];

function Restaurant() {
  return <div className="resturant">
    {obj.map((obj,index)=>{
       return <ShopFront key={index} obj={obj}></ShopFront>
    })}
  </div>;
}

export default Restaurant;

function ShopFront({obj}) {
  return (
    <div className="shopfront">
      <img src={obj.image} alt="restaurant"></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>{obj.name}</h1>
        <Rating name="simple-controlled" value={obj.rating} />
      </div>
      <p>Adresse: {obj.address}</p>
      <p>Type: {obj.type}</p>
      <p>reviews({obj.review})</p>
      <NavLink to="/restaurant/shop">
      <button className="visiteBtn">Visite</button>
      </NavLink>
    </div>
  );
}
