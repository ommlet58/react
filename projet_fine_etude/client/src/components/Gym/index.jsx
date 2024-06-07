import React from 'react'
import "../Gym/gym.css"
import img1 from "../../assets/gym.jpg"
import img2 from "../../assets/gym1.jpeg"
import img3 from "../../assets/gym1.jpg"
import img4 from "../../assets/gym3.jpeg"
import img5 from "../../assets/gym4.jpeg"
import img6 from "../../assets/gym5.jpeg"
import img7 from "../../assets/gym7.jpeg"

const gymData = [
    {id:1,image:img1,name:"sharkGym",city:"agadir", address:"Tghazot" ,type:"Bodybuilding",price:300},
    {id:2,image:img2,name:"AmalGym",city:"agadir", address:"Tamraght" ,type:"Box",price:400},
    {id:3,image:img3,name:"YogaTme",city:"agadir", address:"Taghazot" ,type:"Yoga and Streatch",price:540},
    {id:4,image:img4,name:"BoxGym",city:"agadir", address:"Anza" ,type:"Box and KickBoxing",price:600},
    {id:5,image:img5,name:"Pool",city:"agadir", address:"Taghazot" ,type:"Swimming and Pool Activite",price:900},
    {id:6,image:img6,name:"Workout",city:"agadir", address:"Tadart" ,type:"CrossFit and Bodybuilding",price:800},
    {id:7,image:img7,name:"Fighting Club",city:"agadir", address:"Anza" ,type:"Boxing, Mua Tai, KickBoxing, CrossFit",price:680},
]

function Gym() {
  return (
    <div className='Gym-container'>
        {
            gymData.map((data)=>{
              return (<GymItem key={data.id} data={data}></GymItem>)
            })
        }
        </div>
  )
}


export default Gym

function GymItem({data}){
    return(
        <div className='Gym-item'>
            <img src={data.image} alt="gym"></img>
            <h1>{data.name}</h1>
            <div className='Gym-item-text'>
                <div className='price-box'><p>{data.type}</p>
                    <p>{data.price}Mad/Month</p>
                </div>
                <p>{data.city}/{data.address}</p>
            </div>
        </div>
    )    
}