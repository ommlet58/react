import React, { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/DatePicker/styles/index.css';
import 'rsuite/DateRangePicker/styles/index.css';
import Input from 'rsuite/Input';
import InputGroup from 'rsuite/InputGroup';
import 'rsuite/Input/styles/index.css';
import 'rsuite/InputGroup/styles/index.css';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import "../Booking/rental.css"
import { CiCirclePlus , CiCircleMinus} from "react-icons/ci";

const styles = {
  width: 300,
  marginBottom: 10
};


const {beforeToday} =
  DateRangePicker;
function Rental() {
  const [dates,setDates]=useState([null,null])
  const [values,setValues]=useState(0);
  console.log(values)

  return (
    <div>

<div className='guest'>
<InputGroup style={styles}>
      <InputGroup.Addon className='input-g'>
        <AvatarIcon />
      </InputGroup.Addon>
      <Input value={values} onChange={setValues} placeholder='Gueses'  />
    </InputGroup>
<DateRangePicker value={dates} onChange={setDates}  size="lg" placeholder="Check in - Check out" shouldDisableDate={beforeToday()} />  
</div>
<div className='dropdown'>
  <ul>
    <li>
       <p>Couples</p>
      <div className='groups'>
        <CiCircleMinus  className='icon'/>
        <span>{0}</span>
      <CiCirclePlus />
      </div>
    </li>
    <li>
       <p>Females</p>
      <div className='groups'>
        <CiCircleMinus/>
        <span>{0}</span>
      <CiCirclePlus />
      </div>
    </li>
    <li>
       <p>Males</p>
      <div className='groups'>
        <CiCircleMinus/>
        <span>{0}</span>
      <CiCirclePlus />
      </div>
    </li>
    <li>
      <p>Totale</p>
      <span>{0}</span>
    </li>
    
  </ul>
</div>
    </div>

)
}

export default Rental;
