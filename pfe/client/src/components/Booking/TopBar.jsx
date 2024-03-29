import React from 'react'
import logo from '../../assets/image.png'
import Eng from '../../assets/download.png'
import Espa from '../../assets/download(1).png'
function TopBar() {
  return (
    <div>
        <div className='Logo'>
        <img src={logo} alt="logo"></img>
        </div>
        <div className='lang-curr'>
            <div>
                <p>Currency</p>
                <ul>
                    Euro(EUR)
                    <li>Euro(EUR)</li>
                    <li>Dollar (USD)</li>
                </ul>
                
            </div>
            <div>
                <p>Language</p>
                <ul>
                    <img src={Eng}></img>
                    
                    <li><img src={Eng}></img> eng</li>
                    <li><img src={Eng}></img> esp</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopBar