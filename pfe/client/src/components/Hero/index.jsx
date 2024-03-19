import React from 'react';
import "../Hero/hero.css";


function Hero({imageUrl,title,text,textTitle,heroclass}) {
  return (
    <div className='hero'>
    <h1>{title}</h1>
        <div className={heroclass?'container '+ heroclass:'container'}
        >
            <div className='left'>
            <img src={imageUrl} alt="hero"></img>
            </div>
            <div className='right'>
              <h2>{textTitle}</h2>
              <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Hero