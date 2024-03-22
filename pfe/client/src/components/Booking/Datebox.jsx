import React, { useState } from "react";
import imag from "../../assets/wetsuit.PNG";
import "../Booking/dataBox.css";

    
    
    // Function to get the day name and date in the format "Sun 24 Mar"
    const getFormattedDate = (date) => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = days[date.getDay()];
      const dateNum = date.getDate();
      const month = months[date.getMonth()];
      return `${day} ${dateNum} ${month}`;
    };
    
    // Function to get an array of dates between the start and end dates
    const getDatesBetween = (startDate, endDate) => {
      const dates = [];
      let currentDate = startDate;
      while (currentDate <= endDate) {
        dates.push(getFormattedDate(new Date(currentDate)));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return dates;
    };
    
    
    

function Datebox({dates,upgrades,setUpgrades}) {
  // Define the start and end dates
  const startDate = new Date(dates[0]);
  const endDate = new Date(dates[1]);
  // Get the array of dates between the start and end dates
  const datesBetween = getDatesBetween(startDate, endDate);
 
  
  return (
    <div className="box-container">
      <div className="left">
        <div className="box">
          <img src={imag}></img>
          <div className="text-box">
            <h1>1 day soft top rental + wetsuit</h1>
            <p>€20 / person</p>
          </div>
        </div>
        <div className="box">
          <img src={imag}></img>
          <div className="text-box">
            <h1>1 day soft top rental + wetsuit</h1>
            <p>€20 / person</p>
          </div>
        </div>
        <div className="box">
          <img src={imag}></img>
          <div className="text-box">
            <h1>1 day soft top rental + wetsuit</h1>
            <p>€20 / person</p>
          </div>
        </div>
        <div className="box">
          <img src={imag}></img>
          <div className="text-box">
            <h1>1 day soft top rental + wetsuit</h1>
            <p>€20 / person</p>
          </div>
        </div>
      </div>
      {
        datesBetween.map((days)=><Inputs key={days} days={days} setUpgrades={setUpgrades} upgrades={upgrades}></Inputs>)
      }
    </div>
  );
}

export default Datebox;


function Inputs({days,setUpgrades,upgrades}){
  const [nm,setNm]=useState(0);
  const handleCheck = (e)=>{
    setUpgrades(upgrades+Number(e.target.value)-nm)
    setNm(Number(e.target.value))
  
  }
  
  return(
    <div className="checklist">
        <p>{days}</p>
        <div className="inputs">
        <label className="custom-radio">
        <input
          type="radio"
          id="option1"
          name={days}
          value="20"
          onClick={handleCheck}
        ></input>
          <span className="checkmark"></span>
          </label>
        <label className="custom-radio">
        <input
          type="radio"
          id="option1"
          name={days}
          value="25"
          onClick={handleCheck}
          ></input>
          <span className="checkmark"></span>
          </label>
        <label className="custom-radio">
        <input
          type="radio"
          id="option1"
          name={days}
          value="30"
          onClick={handleCheck}
          ></input>
          <span className="checkmark"></span>
          </label>
        <label className="custom-radio">
        <input
          type="radio"
          id="option1"
          name={days}
          value="35"
          onClick={handleCheck}
        ></input>
          <span className="checkmark"></span>
          </label>
        </div>
      </div>
  )
}