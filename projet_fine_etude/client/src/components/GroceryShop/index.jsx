import React, { useState } from 'react'
import fimg1 from '../../assets/frt5.jpeg'
import fimg2 from '../../assets/frt7.jpeg'
import fimg3 from '../../assets/frt9.jpeg'
import f1 from '../../assets/f1.jpeg'
import f2 from '../../assets/f2.jpeg'
import f4 from '../../assets/f4.jpeg'
import f5 from '../../assets/f5.jpg'
import "../GroceryShop/groceryShop.css"
import { LuShoppingBag } from "react-icons/lu";
import { ImCross } from "react-icons/im";


function GroceryShop() {
    const [showPanel, setShowPanel] = useState(false);

    const handleCloseMessage = () => {
        setFormSubmitted(false);
      };
      
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        address: ""
      });
      const [openOrderForm, setOpenOrderForm]=useState(false);
      const [formSubmitted, setFormSubmitted] = useState(false);

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
    <div className='groceryShop-container'>
        <LuShoppingBag
        className="panele-icon"
        onClick={togglePanel}
      ></LuShoppingBag>
      {/* panel */}
      <div className={`panele ${showPanel ? "show" : ""}`}>
        <ImCross className="panele-croseicon" onClick={togglePanel}></ImCross>
      
        <div className="items">
        <PanelItems></PanelItems>
        <PanelItems></PanelItems>
        </div>
        <div className="panele-order">
        <h2>Totale: 190Dh</h2>
        <button  onClick={()=>setOpenOrderForm(true)} >Order Now</button>
        </div>
      </div> 


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

      {/* order form */}

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

        <div className='groceryShop-top'>
            <div className='groceryShop-top-img'>
              
            <img src={fimg1} alt="imageae"></img>
                
                <img src={fimg2} alt="imageae"></img>
            <img src={fimg3} alt="imageae"></img>
            </div>
            <div className='groceryShop-top-info'>
                <h2>Selling fruits and vegetables</h2>
                <p>Agadir Tamraght Sahel</p>
            </div>
        </div>

        <div className='groceryShop-shop'>
                <ShopItem image={f1}></ShopItem>
                <ShopItem image={f2}></ShopItem>
                <ShopItem image={f4}></ShopItem>
                <ShopItem image={f5}></ShopItem>
                <ShopItem image={f5}></ShopItem>
                <ShopItem image={f5}></ShopItem>
        </div>
    </div>
  )
}

export default GroceryShop

function ShopItem({image}){
    return(
        <div className="shop-item">
            <img src={image} alt="imagio"></img>
            <div className='namePrice'>
            <h2>banan</h2>
            <h2>12:99DH/KG</h2>
             </div>   
            <button>Add To Card</button>            
        </div>
    )
}

function PanelItems(){
    return(
      <div className="panelItem">
        <img src={f1} alt="am"></img>
        <div className="info">
          <h2> 2kg bbanan</h2>
          <p>price: 150 DH</p>
        </div>
      </div>
    )
  }