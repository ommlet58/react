import React from 'react'
import Hero from '../Hero'
import capture from "../../assets/Capture.PNG";
import Slide from '../Slide';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const data=
[{img:capture,
title:"SHARED ROOMS",
desc:"Our shared rooms have brilliantly designed bunk beds, each with its own curtain for privacy, power outlet and nightlight. The shared rooms are the best choice for solo travelers and an excellent way to make new friends."
},
{img:capture,
    title:"SHARED ROOMS",
    desc:"Our shared rooms have brilliantly designed bunk beds, each with its own curtain for privacy, power outlet and nightlight. The shared rooms are the best choice for solo travelers and an excellent way to make new friends."
},
{img:capture,
    title:"SHARED ROOMS",
    desc:"Our shared rooms have brilliantly designed bunk beds, each with its own curtain for privacy, power outlet and nightlight. The shared rooms are the best choice for solo travelers and an excellent way to make new friends."
},
{img:capture,
    title:"SHARED ROOMS",
    desc:"Our shared rooms have brilliantly designed bunk beds, each with its own curtain for privacy, power outlet and nightlight. The shared rooms are the best choice for solo travelers and an excellent way to make new friends."
},
    
]

const iconStyles = {
  color: 'grey',
  width: '50px',
  height: '50px',
  transition: 'color 0.3s' ,
  
};
function SampleNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"  }}
      onClick={onClick}
    >
      <IoIosArrowForward 
      style={iconStyles}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowBack
      style={iconStyles}
      />
    </div>
  );
}

function Aloha() {

  

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay:true
  };
  return (
    <>
    <Hero 
    heroclass="reverse"
    title="Learn to surf at our Aloha Surf Camp "
    textTitle="Aloha Surf Camp   "
    imageUrl={capture}
    text="Gota Dagua surf camp is a surf camp near Lisbon that offers you a surf camp experience like no other. Including accommodation, surf courses, yoga sessions, camp activities, amazing food, live music & much more. Learn how to surf at our surf camp Lisbon or come with your own surf equipment while enjoying a surf camp Lisbon experience. Make lifelong memories with new people from around the world in one of the best surf camp in Portugal. Whether you are a solo traveller or a group of friends, you will share great surf experiences in a great surf holiday destination."
    ></Hero>
    <Slider {...settings}>
    {data.map((item,index)=>(
      <Slide img={item.img} desc={item.desc} title={item.title}  key={index}/>
    ))}
    </Slider>
    </>
  )
}

export default Aloha