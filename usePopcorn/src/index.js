import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import StarRating from './StarRating';



function Test(){
  const [movieRating,setMovieRatting]=useState(0);

  return (
    <StarRating onSetRatting={setMovieRatting}></StarRating>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   { <App />}
  { /*<Test></Test>
   <StarRating maxRating={10}/>
   <StarRating maxRating={5} size={24}/>
   <StarRating maxRating={5} messages={["Terrible","Bad","Okay","Good","Amazing"]} defaultRating={4}/>
   */}
  </React.StrictMode>
);


