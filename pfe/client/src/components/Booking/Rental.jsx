import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "rsuite";
//import "rsuite/DatePicker/styles/index.css";
import "rsuite/DateRangePicker/styles/index.css";
import Input from "rsuite/Input";
import InputGroup from "rsuite/InputGroup";
import "rsuite/Input/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import "../Booking/rental.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Tbox from "./Tbox";
import Datebox from "./Datebox";
import Groupsurf from "./Groupsurf";
import Form from "./Form";
import imag from "../../assets/wetsuit.PNG";
import TopBar from "./TopBar";
import { IoIosArrowUp , IoIosArrowDown } from "react-icons/io";
import surf0 from "../../assets/surfers.png";
import surf1 from "../../assets/wave.png";
import surf2 from "../../assets/store.png";

  const styles = {
    width: 300,
    height:50,
    marginBottom: 10,
    
  };

const { beforeToday } = DateRangePicker;
function Rental() {
  const [dates, setDates] = useState([null, null]);
  const [females, setFemales] = useState(0);
  const [males, setMales] = useState(0);
  const [couples, setCouples] = useState(0);
  const [values, setValues] = useState(0);
  const [content, setContent] = useState("none");
  const [isOpen, setIsOpen] = useState(false);
  const [upgrades, setUpgrades] = useState(0);
  const [isActive, setIsActive] = useState(false);


  

  const [formData, setFormData] = useState(Array.from({length :values},()=>({
  })));

const updateFormData=(index,newData)=>{
  setFormData((prvData)=>{
    const updatedData = [...prvData];
    updatedData[index]=newData;
    return updatedData;

  })
}



  const boxRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setContent("none");
      }
    }

    // Add event listener when the box is enabled
    if (content === "block") {
      document.addEventListener("mousedown", handleClickOutside);
      } else {
      // Remove event listener when the box is disabled
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [content]);

  const handleOpenDate = () => {
    setIsOpen(!isOpen);
  };

  const handleMinusCouple = () => {
    if (!couples) return;
    setCouples(couples - 1);
    setValues(values - 2);
  };

  const handleAddCouple = () => {
    setCouples(couples + 1);
    setValues(values + 2);
  };
  const handleAddFemale = () => {
    setFemales(females + 1);
    setValues(values + 1);
  };
  const handleMinusFemale = () => {
    if (!females) return;
    setFemales(females - 1);
    setValues(values - 1);
  };
  const handleAddMales = () => {
    setMales(males + 1);
    setValues(values + 1);
  };
  const handleMinusMales = () => {
    if (!males) return;
    setMales(males - 1);
    setValues(values - 1);
  };
  const dropdown = () => {
    if (content === "none") setContent("block");
    else setContent("none");
  };
const handleCloseDate= ()=>{
  setDates([null, null]);
  setUpgrades(0);
}
  return (
    <div>
      <TopBar></TopBar>
      <div className="guest-bar">
      <div className={`guest ${content === "block" ? "after-visible" : ""}`}>
        <InputGroup style={styles} onClick={dropdown}>
          <InputGroup.Addon>
            <AvatarIcon />
            <span
              style={{
                paddingLeft: "5px",
                fontWeight: "bold",
                
              }}
            >
              Guesst
            </span>
          </InputGroup.Addon>
          <Input
            value={values}
            onChange={setValues}
            placeholder="Gueses"
            disabled
            className="input-g"
            style={{background:"white"}}
          />
        </InputGroup>
        {values > 0 && (
          <DateRangePicker
            value={dates}
            onChange={setDates}
            size="lg"
            placeholder="Check in - Check out"
            shouldDisableDate={beforeToday()}
            open={isOpen}
            onOk={handleOpenDate}
            onClean={handleCloseDate}
            onClick={handleOpenDate}
            
          />
        )}
      </div>
      <div className="dropdown " ref={boxRef} style={{ display: content  }}>
        <ul>
          <li>
            <p>Couples</p>
            <div className="groups">
              <CiCircleMinus className="icon" onClick={handleMinusCouple} />
              <span>{couples}</span>
              <CiCirclePlus className="icon" onClick={handleAddCouple} />
            </div>
          </li>
          <li>
            <p>Females</p>
            <div className="groups">
              <CiCircleMinus className="icon" onClick={handleMinusFemale} />
              <span>{females}</span>
              <CiCirclePlus className="icon" onClick={handleAddFemale} />
            </div>
          </li>
          <li>
            <p>Males</p>
            <div className="groups">
              <CiCircleMinus className="icon" onClick={handleMinusMales} />
              <span>{males}</span>
              <CiCirclePlus className="icon" onClick={handleAddMales} />
            </div>
          </li>
          <li>
            <p>Totale</p>
            <span>{values}</span>
          </li>
        </ul>
        <span
          className="close"
          style={{ cursor: "pointer" }}
          onClick={() => setContent("none")}
        >
          Close
        </span>
      </div>
      </div>
      <div style={{
        paddingTop:20
        ,display:"flex",
        justifyContent:"space-between"}}>

      <Groupsurf />
      <div >

      <Tbox
      className="totalbox"
        values={values}
        dates={dates}
        onClick={dropdown}
        handleOpenDate={handleOpenDate}
        upgrades={upgrades}
        />
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
        
      {dates[0] !== null ? (
        <Datebox
          upgrades={upgrades}
          
          setUpgrades={setUpgrades}
          dates={dates}
        ></Datebox>
      ) : (
        ""
      )}
      }
      {/*<div className="forms">
      {[...Array(values)].map((_,i)=>(
        <Form key={i} updateFormData={updateFormData} formData={formData} i={i}></Form>
        
        ))}
        
      </div>*/}
       
    </div>
  );
}

export default Rental;


const arry = [
  { day: 'Mon 15 Apr', board: 'day epoxy board rental + wetsuit', sold: '25' },
  { day: 'Tue 16 Apr', board: 'day soft top rental + wetsuit', sold: '25' },
  { day: 'Wed 17 Apr', board: 'day soft top rental + wetsuit', sold: '25' }
];

function RentBoards(){
  
  return (
  <div >
    <div className="rentbox">
      <img src={surf0} alt="" />
      <div>
        <h1>Surf Rentals</h1>
        <p>30 Mar 2024 - 5 Apr 2024</p>
      </div>
    </div>
      {arry.map((obj,index)=>(
        <RentBoardsBox obj={obj} key={index}></RentBoardsBox>
      ))}
    <div>

    </div>
  </div>  
  )
}

function RentBoardsBox ({obj}){
  var imgBoard ;
  
  if(obj.board==="day epoxy board rental + wetsuit"){
    imgBoard = surf0;

}else if(obj.board==='day soft top rental + wetsuit'){
   imgBoard = surf1;
  
}else{
   imgBoard = surf2;

 }
  return(
    <div className="rentBoardsBox">
      <img src={imgBoard} alt="img"></img>
      <div>
        <h1>{obj.board}</h1>
        <p>{obj.day}</p>
      </div>
      <div>{obj.sold}$</div>
    </div>
  )
}


