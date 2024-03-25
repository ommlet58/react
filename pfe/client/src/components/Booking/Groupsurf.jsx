import React, { useState } from "react";
import surf0 from "../../assets/surfers.png";
import surf1 from "../../assets/wave.png";
import surf2 from "../../assets/store.png";
import "../Booking/groupsurf.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const arry = [
  { day: 'Mon 15 Apr', board: 'day epoxy board rental + wetsuit', sold: '25' },
  { day: 'Tue 16 Apr', board: 'day soft top rental + wetsuit', sold: '25' },
  { day: 'Wed 17 Apr', board: 'day soft top rental + wetsuit', sold: '25' }
];


function Groupsurf() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(surf0);
  const [isActive, setIsActive] = useState(false);
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
      {isActive && <div className="more">
        <h3>Surf equipment</h3>
        <p>
          We offer surf equipment for every level and style: softboards, epoxy
          surfboards, bodyboards, shortboards, longboards and wetsuits. Our
          equipment is renewed every season to ensure good quality.
        </p>

        <h3>Facilities on the beach Costa da Caparica</h3>
        <p>
          We have a Surf Shop / Surf School in front of the main beach of Costa
          da Caparica (Tarquínio Beach Bar) with all our surf equipment and a
          place to keep your stuff safe while you are enjoying the waves.
        </p>

        <h3>Long term rental includes (more than 1 day)</h3>

        <p>
          If you want to take the surf equipment with you and only return it in
          the end of your booking time, we will charge a deposit of 250 euros
          (cash) at the day you pick up the surf equipment and give the deposit
          back when you return the surf equipment in good state. The surf
          equipment includes:
          <br></br>- Surfboard car rack
          <br></br>- Surfboard cover
          <br></br>- Wetsuit bag
          <br></br>- Surfboard leash
        </p>

        <h3>Pick up and drop-off (long term rentals)</h3>

        <p>
          - Surf School in Tarquínio Beach Bar from 10am to 6pm. Other options
          available by request. Please get in touch with us!
        </p>
      </div>}
      {isActive?<span className="show" onClick={()=> setIsActive(false)}>Show Less  <IoIosArrowUp /></span>
     :<span className="show" onClick={()=>setIsActive(true)} >Show More<IoIosArrowDown /></span>}
    </>
  );
}




export default Groupsurf;
