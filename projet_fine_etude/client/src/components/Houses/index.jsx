import React from 'react'
import img1 from "../../assets/OIP.jpeg"
import img2 from "../../assets/R.jpeg"
import img3 from "../../assets/rrt.jpg"
import img4 from "../../assets/003_Front_Porch.jpg"
import img5 from "../../assets/R (1).jpeg"
import "../Houses/house.css"

import { useNavigate } from 'react-router-dom';

const housedata=[
    {id:1,img:img1, contry:"Maroc",city:"Agadir",Adresse:"Taghazot",Price:500},
    {id:2,img:img2, contry:"Maroc",city:"Agadir",Adresse:"Tamraght",Price:400},
    {id:3,img:img3, contry:"Maroc",city:"Agadir",Adresse:"Anza",Price:500},
    {id:4,img:img4, contry:"Maroc",city:"Agadir",Adresse:"Taghazot",Price:300},
    {id:5,img:img5, contry:"Maroc",city:"Agadir",Adresse:"Aghrod",Price:200}
]

function Houses() {
  return (
    <div className='houses-container'>
        {housedata.map((house)=>{
           return(
           <House key={house.id} image={house.img} country={house.contry} city={house.city} Adresse={house.Adresse} Price={house.Price}></House>
        )
        })}
    </div>
  )
}

export default Houses



function House({ image, country, city, Adresse, Price }){

  const navigate = useNavigate();

  const navv = ()=>{
    navigate(`/housepage`);
  }
    return(
        <div  className='house' onClick={navv}>
        <img src={image} alt="img"  ></img>
        <p>{country},{city}</p>
        <p className='addresse'>{Adresse}</p>
        <p>{Price} MAD <span>night</span> <span>&ensp; &ensp; <u>{Price+7} MAD  total </u> </span></p>
        </div>
    )
}