import React, { useState } from "react";
import surf0 from "../../assets/surfers.png";
import surf1 from "../../assets/wave.png";
import surf2 from "../../assets/store.png";
import "../Booking/groupsurf.css";

const arry = [
  { day: 'Mon 15 Apr', board: 'day epoxy board rental + wetsuit', sold: '25' },
  { day: 'Tue 16 Apr', board: 'day soft top rental + wetsuit', sold: '25' },
  { day: 'Wed 17 Apr', board: 'day soft top rental + wetsuit', sold: '25' }
];


function Groupsurf() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(surf0);
  const surfImages = [surf0, surf1, surf2];
  const hundleActive = (index) => {
    setSelectedImage(index);
    setMainImage(surfImages[index]);
  };
  return (
    <>
      <div className="surfGroup">
        <div className="group-img">
          <img src={mainImage} alt="surf" />
          <div className="imgfooter">
            {[...Array(3)].map((_, index) => (
              <img
                src={surfImages[index]}
                key={index}
                className={selectedImage === index ? "active" : ""}
                alt="surf"
                onClick={() => hundleActive(index)}
              />
            ))}
          </div>
        </div>
        <div className="group-text">
          <h1>Surf Rentals</h1>
          <p>
            Rent a surfboard and a wetsuit as many days as you want! Perfect to
            further develop your surfing skills on your own.
          </p>
          <ul>
            We offer:
            <li>
              - A big variety of boards, softboards, epoxy surfboards,
              bodyboards, shortboards and longboards
            </li>
            <li>- Different sizes of 4.3mm thickness wetsuits</li>
            <li>- Place to keep your belongings</li>
            <li>
              rentals. Ideally if you want to visit other surf hotspots within
              Portugal!
            </li>
          </ul>
        </div>
      </div>
      
       {/* <RentBoards></RentBoards>*/
      }
    </>
  );
}

export default Groupsurf;