import React, { useEffect, useState } from "react";
import imag from "../../assets/wetsuit.PNG";
import "../Booking/dataBox.css";

// Function to get the day name and date in the format "Sun 24 Mar"
const getFormattedDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
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

function Datebox({ dates, upgrades, setUpgrades,setDetailToSend }) {
  // Define the start and end dates
  const startDate = new Date(dates[0]);
  const endDate = new Date(dates[1]);
  // Get the array of dates between the start and end dates
  const datesBetween = getDatesBetween(startDate, endDate);
  const [detail, setDetails] = useState(
    Array.from({ length: datesBetween.length  }, () => ({}))
  );
  
  const hundleDetails = (newDetail, index) => {
    setDetails((prvDetaill) => {
      const UpdatedDetails = [...prvDetaill];
      UpdatedDetails[index]=newDetail;
      return UpdatedDetails;
    });
  };
  
  useEffect(()=>{
   setDetailToSend(detail);

 },[detail])
  

  return (
    <div className="box-container">
      <div className="left">
        <div className="box">
          <img src={imag} alt=""></img>
          <div className="text-box">
            <h1>1 day soft top rental + wetsuit</h1>
            <p>€20 / person</p>
          </div>
        </div>
        <div className="box">
          <img src={imag} alt=""></img>
          <div className="text-box">
            <h1>1 day epoxy board rental + wetsuit</h1>
            <p>€20 / person</p>
          </div>
        </div>
        <div className="box">
          <img src={imag} alt=""></img>
          <div className="text-box">
            <h1>1 day epoxy board rental</h1>
            <p>€20 / person</p>
          </div>
        </div>
        <div className="box">
          <img src={imag} alt=""></img>
          <div className="text-box">
            <h1>1 day soft top rental</h1>
            <p>€20 / person</p>
          </div>
        </div>
      </div>
      {datesBetween.map((days,index) => (
        <Inputs
          key={days}
          hundleDetails={hundleDetails}
          days={days}
          detail={detail}
          index={index}
          setUpgrades={setUpgrades}
          upgrades={upgrades}
        ></Inputs>
      ))}
    </div>
  );
}

export default Datebox;

function Inputs({ days, setUpgrades, upgrades, hundleDetails, detail, index }) {
  const [nm, setNm] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  
  
  const hundleChange = (e)=>{
    const { name,id , value } = e.target;
    hundleDetails( { ...detail[index], day: name, board: id , sold: value},index);
    

    setUpgrades(upgrades + Number(value) - nm);
    setNm(Number(value));
    setSelectedOption(e.target.id);
    
    
  }
  

  return (
    <div className="checklist">
      <p>{days}</p>
      <div className="inputs">
        <label className="custom-radio">
          <input
            type="radio"
            id="day soft top rental + wetsuit"
            name={days}
            onChange={hundleChange}
            checked={selectedOption === "day soft top rental + wetsuit"}
            value="25"
            
            
          ></input>
          <span className="checkmark"  ></span>
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            id="day epoxy board rental + wetsuit"
            name={days}
            onChange={hundleChange}
            checked={selectedOption === "day epoxy board rental + wetsuit"}

            value="25"
            
          ></input>
          <span className="checkmark"></span>
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            id="1 day epoxy board rental"
            name={days}
            value="30"
            checked={selectedOption === "1 day epoxy board rental"}
            onChange={hundleChange}
            
          ></input>
          <span className="checkmark"></span>
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            id="1 day soft top rental"
            name={days}
            value="35"
            checked={selectedOption === "1 day soft top rental"}
            onChange={hundleChange}
            
            
          ></input>
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}
