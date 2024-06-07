import React from 'react'
import "../Grocery/grocery.css"

import fimg1 from '../../assets/frt5.jpeg'
import fimg2 from '../../assets/frt7.jpeg'
import fimg3 from '../../assets/frt9.jpeg'
import fimg0 from '../../assets/market.jpeg'

import vimg0 from "../../assets/market1.jpeg"
import vimg1 from "../../assets/vig4.jpeg"
import vimg2 from "../../assets/veg4.jpeg"
import vimg3 from "../../assets/veg5.jpeg"

import vnimg0 from "../../assets/market2.jpeg"
import vnimg1 from "../../assets/vnd1.jpeg"
import vnimg2 from "../../assets/vnd2.jpeg"
import vnimg3 from "../../assets/vnd3.jpeg"

const groceryData=[
    {id:1,cover:fimg0, image1:fimg1, image2:fimg2, image3:fimg3,city:"Agadir",address:"Anza",category:"Selling Fruits"},
    {id:2,cover:vimg0, image1:vimg1, image2:vimg2, image3:vimg3,city:"Agadir",address:"Taghzaot",category:"Selling fruits and vegetables"},
    {id:3,cover:vnimg0, image1:vnimg1, image2:vnimg2, image3:vnimg3,city:"Agadir",address:"Tamraght",category:"Butcher"}
]

function Grocery() {
  return (
    <div className='shop-container'>
    {groceryData.map((shop)=>{
        return(
            <Shop 
            key={shop.id}
            cover={shop.cover}
            image1={shop.image1}
            image2={shop.image2}
            image3={shop.image3}
            city={shop.city}
            address={shop.address}
            category={shop.category}
            ></Shop>
        )
    })}
    </div>
  )
}

export default Grocery

function Shop({cover,image1,image2,image3,city,address,category}){
    return(
        <div className='shop'> 
            <div className='shop-imgs'>
                <img src={cover} alt='cover'></img>
                <img src={image1} alt='cover'></img>
                <img src={image2} alt='cover'></img>
                <img src={image3} alt='cover'></img>
            </div>
            <div className='shop-addresse'>
                <h1>{category}</h1>
                <p>{city}/{address}</p>
            </div>
        </div>
    )
}


