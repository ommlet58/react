import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/image.png'
import Eng from '../../assets/download.png'
import Espa from '../../assets/download(1).png'
import '../Booking/topbar.css'
import { IoIosArrowDown } from "react-icons/io";
function TopBar() {
    const [langIsVisible,setLangIsVisibble]=useState(false);
    const [currIsVisible,setCurrIsVisibble]=useState(false);
    const lenDrop = useRef(null);
    const currDrop = useRef(null);
    const handleClickOutsideLang = (event) => {
        if (lenDrop.current && !lenDrop.current.contains(event.target)) {
            setLangIsVisibble(false);
        }
      };
    const handleClickOutsideCurr = (event) => {
        if (currDrop.current && !currDrop.current.contains(event.target)) {
            setCurrIsVisibble(false);
        }
      };
      
      useEffect(() => {
        // Add event listener when the box is enabled
        if (langIsVisible) {
          document.addEventListener("mousedown", handleClickOutsideLang);
        } else {
          // Remove event listener when the box is disabled
          document.removeEventListener("mousedown", handleClickOutsideLang);
        }
        if (currIsVisible) {
          document.addEventListener("mousedown", handleClickOutsideCurr);
        } else {
          // Remove event listener when the box is disabled
          document.removeEventListener("mousedown", handleClickOutsideCurr);
        }
      
        // Clean up the event listener
        return () => {
          document.removeEventListener("mousedown", handleClickOutsideLang);
          document.removeEventListener("mousedown", handleClickOutsideCurr);
        };
      }, [langIsVisible,currIsVisible]);

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
                {currIsVisible && <ul ref={currDrop}>
                    <li>Euro(EUR)</li>
                    <li>Dollar (USD)</li>
                </ul>
}                
            </div>
            <div>
                <p>Language</p>
                <div onClick={()=>setLangIsVisibble(!langIsVisible)} className='eng'><img src={Eng}></img><IoIosArrowDown/></div>
                {
                   langIsVisible && <ul ref={lenDrop}> 
                    <li><img src={Eng} alt='flage'></img> eng</li>
                    <li><img src={Espa} alt='flage'></img> esp</li>
                </ul>}
            </div>
        </div>
    </div>
  )
}

export default TopBar