import React, { useState } from 'react'
import logo from '../../assets/image.png'
import Eng from '../../assets/download.png'
import Espa from '../../assets/download(1).png'
import '../Booking/topbar.css'
import { IoIosArrowDown } from "react-icons/io";
function TopBar() {
    const [langIsVisible,setLangIsVisibble]=useState(false);
    const [currIsVisible,setCurrIsVisibble]=useState(false);
  return (
    <div className='topbar'>
        <div className='Logo'>
        <img src={logo} alt="logo"></img>
        </div>
        <div className='lang-curr'>
            <div>
                <p>Currency</p>
                <div className='euro'>
                <span onClick={()=>setCurrIsVisibble(!currIsVisible)}>Euro(EUR)</span> <IoIosArrowDown/>

                </div>
                {currIsVisible && <ul>
                    <li>Euro(EUR)</li>
                    <li>Dollar (USD)</li>
                </ul>
}                
            </div>
            <div>
                <p>Language</p>
                <div onClick={()=>setLangIsVisibble(!langIsVisible)} className='eng'><img src={Eng}></img><IoIosArrowDown/></div>
                {
                   langIsVisible && <ul> 
                    <li><img src={Eng} alt='flage'></img> eng</li>
                    <li><img src={Espa} alt='flage'></img> esp</li>
                </ul>}
            </div>
        </div>
    </div>
  )
}

export default TopBar