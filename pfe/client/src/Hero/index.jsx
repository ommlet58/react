import React from 'react'

function Hero({imageUrl,title,text}) {
  return (
    <div className='hero'>
    <h1>{title}</h1>
        <div>
            <img src={imageUrl}></img>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Hero