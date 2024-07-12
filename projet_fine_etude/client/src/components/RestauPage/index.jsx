import React, { useState } from "react";
import "../RestauPage/restauPage.css";
import img1 from "../../assets/Res.jpeg";
import img4 from "../../assets/res4jpeg.jpeg";
import img5 from "../../assets/surfc.jpg";

import pimage from "../../assets/piza1.jpeg";
import pimage1 from "../../assets/piza2.jpeg";
import pimage2 from "../../assets/piza3.jpeg";
import pimage4 from "../../assets/piza3.jpeg";

import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { ImCross } from "react-icons/im";

const foodData = [
  {
    id: 1,
    image: pimage,
    name: "pizza",
    desc: "pizza with paproine and some blabla",
    price: 45,
  },
  {
    id: 2,
    image: pimage1,
    name: "pizza",
    desc: "pizza with paproine and some blabla",
    price: 45,
  },
  {
    id: 3,
    image: pimage2,
    name: "pizza",
    desc: "pizza with paproine and some blabla",
    price: 45,
  },
  {
    id: 4,
    image: pimage4,
    name: "pizza",
    desc: "pizza with paproine and some blabla",
    price: 45,
  },
];


function RestauPage({ }) {
  const [showPanel, setShowPanel] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: ""
  });
  const [openOrderForm, setOpenOrderForm]=useState(false);
  const [openResForm, setOpenResForm]=useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [order,setOrder]=useState([]);
  const [price,setPrice]=useState(0);

  const handleCloseMessage = () => {
    setFormSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenOrderForm(false);
    setFormSubmitted(true);
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };



  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="restauPage-container  ">
      <LuShoppingBag
        className="panele-icon"
        onClick={togglePanel}
      ></LuShoppingBag>
      <div className={`panele ${showPanel ? "show" : ""}`}>
        <ImCross className="panele-croseicon" onClick={togglePanel}></ImCross>
      
        <div className="items">
          {order.map((i,d)=>(
            <PanelItems key={d} d={i}></PanelItems>

          ))}
        
        </div>
        <div className="panele-order">
        <h2>Totale: {price}Dh</h2>
        <button onClick={()=>setOpenOrderForm(true)}>Order Now</button>
        </div>
      </div> 
      {/* Order form*/
      }
      {openOrderForm && <div className="Order-Form">
        <ImCross onClick={()=>setOpenOrderForm(false)} className="form-cros-icon"></ImCross>
        <h2>Please Fill The Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Place Order</button>
      </form>
      </div>}
       {/*messsage drop */}
       {formSubmitted && (
        <div className="dropdown-message">
         <p>
           Order submitted successfully! Thank you for choosing us.
           <br></br>
           We will Contact You As Soon As Possible
          </p>
          <button onClick={handleCloseMessage}>Close</button>
        </div>
      )}
      {/*reservation form */}
      {openResForm && <ReservationForm openResForm={openResForm} setOpenResForm={setOpenResForm}></ReservationForm>}

      <div className="restau-top">
        <div className="imag-div">
          <img src={img1} alt="imagerest"></img>
          <img src={img4} alt="imagerest"></img>
          <img src={img5} alt="imagerest"></img>
        </div>
        <div className="rightside">
          <div className="right-side-header">
            <h1>Choc chok Restuarant</h1>
            <button onClick={()=>setOpenResForm(true)} >Book A Table</button>
          </div>
          <h2>Traditional Food</h2>
          <p>Agadir/Taghazot</p>
          <p>
            Whether it's a cozy trattoria in Italy serving homemade pasta
            dishes, a bustling bistro in France offering classic French cuisine,
            or a family-run taverna in Greece specializing in traditional Greek
            mezze, traditional restaurants play an essential role in preserving
            culinary heritage and celebrating the rich diversity of world
            cuisines.
          </p>
        </div>
      </div>
      <div className="product-container">
        {foodData.map((item) => (
          <MenuItem key={item.id} data={item} order={order} setOrder={setOrder} setPrice={setPrice} price={price} ></MenuItem>
        ))}
      </div>
    </div>
  );
}

export default RestauPage;

function MenuItem({ data , order ,setOrder , setPrice, price}) {
  const [qnt,setQnt]=useState(0);
 
  


  const addToOrder = () => {
    if (qnt > 0) {
      const newItem = {
        id: data.id,         
        name: data.name,
        price: data.price,
        quantity: qnt,
      };
       setOrder([...order, newItem]);
       setQnt(0);
      console.log(order)
      setPrice(price+data.price)
    }
  }

  return (
    <div className="menueItem">
      <div className="menue-top">
        <h2>{data.name}</h2>
        <h2>{data.price}Mad</h2>
      </div>
      <div className="menue-img">
        <img src={data.image} alt={data.name}></img>
      </div>
      <p className="desc">{data.desc}</p>
      <div className="menueItem-info">
        <>
          <FaCircleMinus className="icon" onClick={()=>setQnt(qnt-1)} />
        </>
        <p>{qnt}</p>
        <>
          <FaPlusCircle className="icon" onClick={()=>setQnt(qnt+1)} />
        </>
      </div>
      <button onClick={addToOrder}  >Add To Card</button>
    </div>
  );
}

function PanelItems({d}){

  return(
    <div className="panelItem">
      <img src={img1} alt="am"></img>
      <div className="info">
        <h2>{d.name}</h2>
        <p>price: {d.price} DH</p>
      </div>
    </div>
  )
}

function ReservationForm({openResForm,setOpenResForm}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenResForm(false);   // Handle form submission, e.g., send data to server
    console.log(formData);
  };
  
  return (
    <div className="Reservation-Form">
      <ImCross onClick={()=>setOpenResForm(false)} className="form-cros-icon"></ImCross>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationDate">Reservation Date:</label>
          <input
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationTime">Reservation Time:</label>
          <input
            type="time"
            id="reservationTime"
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
}
