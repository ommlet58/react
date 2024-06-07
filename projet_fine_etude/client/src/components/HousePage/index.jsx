import "../HousePage/housepage.css";
import React, { useState } from "react";
import { MdOutlineDoorFront } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { PiDeskBold } from "react-icons/pi";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdOutlinePool } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";

import img1 from "../../assets/OIP.jpeg";
import img2 from "../../assets/R.jpeg";
import img3 from "../../assets/rrt.jpg";
import img4 from "../../assets/003_Front_Porch.jpg";
import img5 from "../../assets/R (1).jpeg";
import { FaWifi } from "react-icons/fa";
import { FaSquareParking } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import Reservation from "./Reservation";

function HousePage() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const toggleLoginForm = () => {
      setShowLoginForm(!showLoginForm);
    };
    const handleCloseMessage = () => {
      setFormSubmitted(false);
    };

  return (
    <div className="housePage-container">
       {showLoginForm && <Reservation setFormSubmitted={setFormSubmitted} setShowLoginForm={setShowLoginForm}></Reservation>}
       {formSubmitted && (
        <div className="dropdown-message">
         <p>
           Reservation submitted successfully! Thank you for choosing us.
          </p>
          <button onClick={handleCloseMessage}>Close</button>
        </div>
      )}
      <h1>Habitat Troglodita Almagruz-Cueva Grande (5-6 pax)</h1>
      <div className="image-container">
        <div className="mainimg">
          <img src={img1} alt="iiaa" />
        </div>
        <div className="sideimages">
          <img src={img2} alt="iiaa" />
          <img src={img3} alt="iiaa" />
          <img src={img4} alt="iiaa" />
          <img src={img5} alt="iiaa" />
        </div>
      </div>
      <div className="housePage-adress">
        <div>
          <h2>Agadir Taghazot</h2>
          <p>6 guests1 bedroom4 beds1 bath</p>
        </div>
        <button onClick={toggleLoginForm}>Book Now</button>
      </div>
      <div className="info-resrvation">
        <div className="left">
          <h2>Hosted by Manuel José</h2>
          <hr></hr>
          <div className="info-text">
            <MdOutlineDoorFront />
            <div>
              <h1>Self check-in</h1>
              <p>You can check in with the building staff.</p>
            </div>
          </div>
          <div className="info-text">
            <PiDeskBold />
            <div>
              <h1>Dedicated workspace</h1>
              <p>A room with wifi that’s well-suited for working.</p>
            </div>
          </div>
          <div className="info-text">
            <SlCalender />
            <div>
              <h1>Free cancellation before May 15</h1>
              <p>Free cancellation before May 15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="discription">
        <hr></hr>
        <p>
          We have six Casas Cueva, with capacity from 2 to 28 people, in a
          unique setting. The houses offer all the comforts, a cozy atmosphere,
          a cozy atmosphere, and every detail to make your stay an unforgettable
          experience. We want you to feel comfortable, happy, in your own home,
          to be able to offer you our approach to life, marked by respect for
          nature in this space created for relaxation,
        </p>
        <hr></hr>
      </div>
      <h2>What this place offers</h2>
      <div className="offer">
        <div className="offerbox">
          <TbToolsKitchen3 />
          <p>Kitchen</p>
        </div>
        <div className="offerbox">
          <PiDeskBold />
          <p>Dedicated workspace</p>
        </div>
        <div className="offerbox">
          <MdOutlinePool />
          <p>Pool</p>
        </div>
        <div className="offerbox">
          <PiTelevisionSimpleBold />
          <p>TV</p>
        </div>
        <div className="offerbox">
          <FaWifi />
          <p>Wifi</p>
        </div>
        <div className="offerbox">
          <FaSquareParking />
          <p>Free parking on premises</p>
        </div>
        <div className="offerbox">
          <MdOutlinePets />
          <p>Pets allowed</p>
        </div>
      </div>
      
    </div>
  );
}

export default HousePage;
