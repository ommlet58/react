import React from 'react'
import capture from "../../assets/Capture.PNG"
import "../Slide/slide.css"






function Slide(data) {
  return (
    <div className='slide-container'>
    <img src={data.img} alt='slide'></img>
    <h1>{data.title}</h1>
    <p>{data.desc}</p>
    </div>
  )
}

export default Slide