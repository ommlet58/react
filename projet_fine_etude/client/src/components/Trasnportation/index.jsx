import React from 'react'
import "../Trasnportation/trasnportation.css"

import img1 from "../../assets/Taxi.jpeg";
import img2 from "../../assets/triporteur.jpeg";
import img3 from "../../assets/quade.jpg";
import img4 from "../../assets/minibus1.jpeg";
import img5 from "../../assets/minibus.jpeg";
import img6 from "../../assets/honda.jpeg";
import img7 from "../../assets/byscle.jpeg";

const transortData=[
  {id:1, image:img1, name:'Hicham',city:"Agadir" ,address:"Taghazot",service:"Transportation personnele"},
  {id:2, image:img2, name:'Ilyass',city:"Agadir" ,address:"Taghazot",service:"transportation of goods"},
  {id:3, image:img3, name:'Akram',city:"Agadir" ,address:"Taghazot",service:"Quade Rental"},
  {id:4, image:img4, name:'Nouh',city:"Agadir" ,address:"Tadart",service:"Transportation personnele"},
  {id:5, image:img5, name:'Nouah',city:"Agadir" ,address:"Tadart",service:"Transportation personnele"},
  {id:6, image:img6, name:'Ayoub',city:"Agadir" ,address:"Tadart",service:"Transportation Of Goods"},
  {id:7, image:img7, name:'Othman',city:"Agadir" ,address:"Tadart",service:"bike Rental"},
]


function Trasnportation() {
  return (
    <div className='transport-container'>
      {transortData.map((data)=>{
        return(
          <TransportItem key={data.id} data={data}></TransportItem>
        )
      })}
    </div>
  )
}

export default Trasnportation


function TransportItem({data}){
  return(<div className='TransportItem'>
    <img src={data.image} alt="imag" ></img>
    <div className='info'>
      <h1>{data.name}</h1>
      <p>{data.city + " /" + data.address}</p>
      <p>{data.service}</p>
    </div>
  </div>)
}