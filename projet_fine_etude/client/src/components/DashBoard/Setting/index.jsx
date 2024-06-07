import React, { useContext, useState } from 'react'
import "../Setting/setting.css";



import { AuthContext } from "../../../context/authContext.js";
import axios from 'axios';
import {makeRequest} from  "../../../axios.js"
import {useQuery } from '@tanstack/react-query'




function SettingHouse() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showUpdat,setShowUpdat]=useState(false);
  const [updates, setUpdates] = useState({
    type:"",
     name:"",
  });


  const {currentUser}= useContext(AuthContext);
  const userId=currentUser.userId;

  const handleClick = (ev) => {
    if (ev === "username") {
      setUpdates({
        type: "text",
        name: "Name"
      });
    } else if (ev === "email") {
      setUpdates({
        type: "email",
        name: "email"
      });
    } else if (ev === "phoneNumber") {
      setUpdates({
        type: "tel",
        name: "phoneNumber"
      });
    } else if (ev === "password") {
      setUpdates({
        type: "password",
        name: "password"
      });
    } 
    setShowUpdat(true);
  };
  const handleCloseMessage = () => {
    setFormSubmitted(false);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/auth/showhUserInfo/"+userId);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

console.log(data)
console.log(updates)
  
  if(isLoading){
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/*messsage drop */}
      {formSubmitted && (
        <div className="dropdown-message">
         <p>
           You Profile is Updated successfully! 
          </p>
          <button onClick={handleCloseMessage}>Close</button>
        </div>
      )}
    <div className='houseSetting'>
        <h1>Generale settings</h1>
        <h2 onClick={()=>handleClick("username")}>change UserName</h2>
        <h2 onClick={()=>handleClick("password")}>change Your Password</h2>
        <h2 onClick={()=>handleClick("email")}>change Your Email</h2>
        <h2 onClick={()=>handleClick("phoneNumber")}>change Your Phone Number</h2>
        <h2>Remove House info</h2>
        <h2>Delet Accounts</h2>
    </div>
    {showUpdat && <SettingForm data={data} setShowUpdat={setShowUpdat}  type={updates.type} name={updates.name} setFormSubmitted={setFormSubmitted}></SettingForm>}
    </div>
  )
}

export default SettingHouse

function SettingForm({data,  type, name, setFormSubmitted , setShowUpdat}){

  const [formData, setFormData] = useState({
    Name: data.Name,
    phoneNumber: data.phoneNumber,
    email: data.email,
    password: data.password,
    userId: data.userId
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  console.log(formData)



  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    axios.put("http://localhost:8081/server/auth/updateHuser", formData).then(res => console.log(res)).catch(err=> console.log(err))
    setFormSubmitted(true);
    setShowUpdat(false);
  };


    return(
        <div className='SettingForm'>
                <h1>Update your {name}</h1>
            <form  onSubmit={handleSubmit} >

                <div className="setting-form-group">
          <label htmlFor="input">{name}:</label>
          <input type={type} id="input" name={name} value={name === "Name"? formData.Name: name === "password" ? formData.password : name === "email" ? formData.email : "phoneNumber" ? formData.phoneNumber :"" } onChange={handleChange}  />
        </div>
        <button type='submit'>Submit</button>

            </form>
        </div>
    )
}