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
const styles = {
  width: 300,
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
      <div className="dropdown " ref={boxRef} style={{ display: content }}>
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
      <Tbox
        values={values}
        dates={dates}
        onClick={dropdown}
        handleOpenDate={handleOpenDate}
        upgrades={upgrades}
      />
      {dates[0] !== null ? (
        <Datebox
          upgrades={upgrades}
          
          setUpgrades={setUpgrades}
          dates={dates}
        ></Datebox>
      ) : (
        ""
      )}
      <Groupsurf />
    </div>
  );
}

export default Rental;
