import React from 'react'
import '../Restaurant/restaurant.css'
import img1 from "../../assets/Res.jpeg"
import img2 from "../../assets/res2.jpeg"
import img3 from "../../assets/res3.jpeg"
import img4 from "../../assets/res4jpeg.jpeg"
import img5 from "../../assets/surfc.jpg"
import Rating from '@mui/material/Rating';

const resData=[
    {id:1,image:img1,name:"Choc chok",city:"agadir",adress:"Taghazot",rating:4,type:"Traditional"},
    {id:2,image:img2,name:"Berber cook",city:"agadir",adress:"Anza",rating:3,type:"Traditional -Fast Food"},
    {id:3,image:img3,name:"Lina surf",city:"agadir",adress:"Taghazot",rating:4,type:"Fast Food "},
    {id:4,image:img4,name:"Bella vista",city:"agadir",adress:"Anza",rating:4.5,type:"Traditional -Healthy Food"},
    {id:5,image:img5,name:"Choc chok",city:"agadir",adress:"Tamraght",rating:5,type:"Traditional"}
]

function Restaurant() {
  return (
    <div className='restaurant-container'>
        {resData.map((restau)=>{
            return(
                <Resteau key={restau.id} image={restau.image} name={restau.name} city={restau.city} adress={restau.adress} rating={restau.rating} type={restau.type}></Resteau>
            )
        })}
    </div>
  )
}

export default Restaurant

function Resteau({image,name,city,adress,rating,type}){
    return(
        <div className='rest-box'>
            <img src={image} alt="img"></img>
           <div className='text-box'>
           <div className='name'>
            <h1>{name}</h1>
            
            <Rating name="no-value" value={rating}  precision={0.5} />
            

           </div>
            <p>{city}/{adress}</p>
            <p>{type}</p>
           </div>
        </div>

    )
}
