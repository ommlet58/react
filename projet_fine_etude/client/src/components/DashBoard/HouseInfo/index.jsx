import React, { useContext, useState } from 'react'
import "../HouseInfo/houseInfo.css"
import { AuthContext } from "../../../context/authContext.js";
import axios from 'axios';
import {makeRequest} from  "../../../axios.js"
import img from "../../../assets/noimg.jpeg"


import img1 from "../../../assets/OIP.jpeg";
import img2 from "../../../assets/R.jpeg";
import img3 from "../../../assets/rrt.jpg";
import img4 from "../../../assets/003_Front_Porch.jpg";



import {useQuery } from '@tanstack/react-query'


function HouseInfo() {
  const [showUpdate,setShowUpdat]=useState(false); 
  const [showAddnfo,setShowAddnfo]=useState(false); 
  
  
  const {currentUser}= useContext(AuthContext);
  const userId=currentUser.userId;
  
  
  const { isLoading, error, data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      try {
        const response = await makeRequest.get("/house/getHouseInfo/"+userId);
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  if(isLoading){
    return <p>Loading...</p>;
  }
  
  
  
  return(
    <div className='HouseInfoContainer'>
      {showUpdate && <HouseInfoForm></HouseInfoForm>}
      <div className='img-container' >
        <img src={data.img1?
          "/uplead/"+data.img1:
          img
          } alt="ii" ></img>
        <img src={
          data.img2?
          "/uplead/"+data.img2:
          img
        } alt="ii" ></img>
        <img src={
          data.img3?"/uplead/"+data.img3:
          img} alt="ii" ></img>
        <img src={
          data.img4?"/uplead/"+data.img4:img} alt="ii" ></img>
      </div>
      <div className="infos">
        <p><b>Title: {data.title} </b>   </p>
        

        <p>
        <b>address:</b> {data.addresse}
          </p>
        <p><b>guest Number :</b> {data.guest}</p> 
       <p> <b>bedroom Number</b>{data.bedroom}
        </p> 
        <p><b>bed Numeber</b>{data.bed}</p> 
        <p><b>bath Number</b>{data.bath}</p> 
        <p><b>House description</b>{data.description}</p> 
      </div>
      {data?
      <button onClick={()=> setShowUpdat(true) }> Update </button>:
      <button onClick={()=> setShowAddnfo(true) }> add Infos </button>
      }
    </div>
  )
    
  
}

export default HouseInfo


function HouseInfoForm(){
  const {currentUser}= useContext(AuthContext);

    const [img1,setImg1]=useState(null);
    const [img2,setImg2]=useState(null);
    const [img3,setImg3]=useState(null);
    const [img4,setImg4]=useState(null);

    const [formData, setFormData] = useState({
      title: '',
      address: '',
        guest: '',
        bedroom: '',
        bed: '',
        bath: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        description: '',
        userId:currentUser.userId
      });
      

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const upload = async (file)=>{
        try{
          const formData= new FormData();
          formData.append("file",file);
          const res = await makeRequest.post("/upload",formData);
          return res.data;
        }catch(err){
          console.log(err)
        }
      }
    


      const handleSubmit = async (e) => {
        e.preventDefault();
        let img1Url;
        let img2Url;
        let img3Url;
        let img4Url;

        img1Url = await upload(img1);
        img2Url = await upload(img2);
        img3Url = await upload(img3);
        img4Url = await upload(img4);

        
        
        try {
          const res = await axios.post("http://localhost:8081/server/house/addInfo", {...formData, img1: img1Url,img2: img2Url,img3: img3Url,img4: img4Url,
        }, {
            withCredentials: true,
          });
          console.log(res.data);
        } catch (err) {
          console.error(err);
        }
      };





  return (
    <div className='HouseinfoPage' >
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <h1>Add New Listing</h1>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="guest">Guest:</label>
          <input type="number" id="guest" name="guest" value={formData.guest} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bedroom">Bedroom:</label>
          <input type="number" id="bedroom" name="bedroom" value={formData.bedroom} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bed">Bed:</label>
          <input type="number" id="bed" name="bed" value={formData.bed} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bath">Bath:</label>
          <input type="number" id="bath" name="bath" value={formData.bath} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="img1">Image 1 URL:</label>
          <input
            type="file"
            id="profile"
            onChange={(e) => setImg1(e.target.files[0])}
          />

          
        </div>
        <div className="form-group">
          <label htmlFor="img2">Image 2 URL:</label>
          
          <input
            type="file"
            id="profile"
            onChange={(e) => setImg2(e.target.files[0])}
          />

        </div>
        <div className="form-group">
          <label htmlFor="img3">Image 3 URL:</label>
          <input
            type="file"
            id="profile"
            onChange={(e) => setImg3(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="img4">Image 4 URL:</label>
          <input
            type="file"
            id="profile"
            onChange={(e) => setImg4(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>)
}


function updateForm(){


  return(
    <div className='update-house'>
      <form>

      </form>
    </div>
  )
}