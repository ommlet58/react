import React from 'react'
import { useLocation  } from 'react-router-dom';




function LastStep() {
  const  location = useLocation();
  let formData;
  console.log(location);
  // Check if location.state and formData are defined
  if (location.state && location.state.formData) {
    formData = location.state.formData;
  } else {
    // Handle the case when formData is not available
    // For example, you can set a default value or display an error message
    console.error("formData is not available in the location state");
  }


  return (
    <div>LastSteaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaap</div>
  )
}

export default LastStep