import React from "react";
import "../Booking/tbox.css";
import { Link } from "react-router-dom";

function Tbox({ values, dates, onClick, handleOpenDate,upgrades,setNext,next  }) {
  var durationInDays = 0;

  if (dates[0]) {
    const durationInMilliseconds = Math.abs(
      dates[1].getTime() - dates[0].getTime()
    );
    durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);

  }

  


  return ( 
    <div className="tbox">
      {values ? (
        <>
          <ul>
            <li>
              <span>Guest</span>
              <span>{values}</span>
            </li>
            {dates[0] ? (
              <>
                <li>
                  <span>Checkin</span>
                  <span>{dates[0] ? dates[0].toDateString() : ""}</span>
                </li>
                <li>
                  <span>Checkout</span>
                  <span>{dates[0] ? dates[0].toDateString() : ""}</span>
                </li>
                <li>
                  <span>Duration</span>
                  <span>{dates[0] ? durationInDays : ""}</span>
                </li>
              </>
            ) : (
              <button onClick={handleOpenDate}>Chose Dates</button>
            )}
            <li>
              <span>Upgrades</span>
              <span>{`${upgrades} * ${values}`}</span>
            </li>
            <li>
              <span>Total</span>
              <span>{upgrades*values}€</span>
            </li>
          {next<2 ? <button onClick={()=>setNext(next+1)} >Continue</button> : <Link to="/lastStep"> <button >Submit</button> </Link> }
          </ul>
        </>
      ) : (
        <button onClick={onClick} className="guestselect">Select Guest</button>
      )}
    </div>
  );
}

export default Tbox;
