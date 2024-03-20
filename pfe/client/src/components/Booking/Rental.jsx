import React from 'react'

function Rental() {
  return (
    <div>
        <label htmlFor='Guest'  >Guest</label> <input type='number' name='Guest' ></input>
        
        <input type="date" id="start" name="start" /> 
        <input type="date" id="end" name="end" /> 
    </div>
  )
}

export default Rental