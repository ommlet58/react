import React from 'react';
import "../Tradespersons/tradespersons.css";
import img1 from "../../assets/Electrician.jpg";
import img2 from "../../assets/Bricklayer.png";
import img3 from "../../assets/gardener.jpeg";
import img4 from "../../assets/Mechanic.jpeg";
import img5 from "../../assets/Plumber.jpg";

const TradespersonsData=[
  {id:1,image:img1,service:"Electrician",Price:150,city:"Agadir",Address:"Taghazot"},
  {id:2,image:img2,service:"Bricklayer",Price:160,city:"Agadir",Address:"Taghazot"},
  {id:3,image:img3,service:"Gardener",Price:160,city:"Agadir",Address:"Taghazot"},
  {id:4,image:img4,service:"Mechanic",Price:160,city:"Agadir",Address:"Taghazot"},
  {id:5,image:img5,service:"Plumber",Price:160,city:"Agadir",Address:"Taghazot"},
];


function Tradespersons() {
  return (<>
    <div className="Tradespersons-container">
      
      {TradespersonsData.map((data)=>(
        <TradespersonsItem key={data.id} data={data} ></TradespersonsItem>
      ))}

    </div>
    <TradespersonsPage></TradespersonsPage>
  </>
  )
}

export default Tradespersons

function TradespersonsItem({data}){
  return(<div className='tradespersonsItem'>
    <img src={data.image} alt="aa"></img>
    <div className='info'>
      <h1>Service:{data.service}</h1>
      <p>Price:{data.Price}</p>
      <p>Address:{data.city} / {data.Address}</p>
    </div>
  </div>)
}

function TradespersonsPage(){

  return(
    <div className='TradespersonsPage'>
      <img src={img1} alt="aa"></img>
    <div className='info'>
      <h1>Service:Electrician</h1>
      <p>Price: 150DH/ day</p>
      <p>Address: Agadir / Anza</p>
      <p>With over a decade of experience in the field, John is your trusted electrician, dedicated to providing top-notch electrical services tailored to meet your needs. From residential homes to commercial establishments, John has the expertise and knowledge to tackle any electrical issue with precision and efficiency.</p>
      <button >Book Now</button>
    </div>

      
    </div>
  )
}
