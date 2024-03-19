import React from 'react'
import Hero from '../Hero'
import capture from "../../assets/Capture.PNG";

function Aloha() {
  return (
    <Hero 
    heroclass="reverse"
    title="Learn to surf at our Aloha Surf Camp "
    textTitle="Aloha Surf Camp   "
    imageUrl={capture}
    text="Gota Dagua surf camp is a surf camp near Lisbon that offers you a surf camp experience like no other. Including accommodation, surf courses, yoga sessions, camp activities, amazing food, live music & much more. Learn how to surf at our surf camp Lisbon or come with your own surf equipment while enjoying a surf camp Lisbon experience. Make lifelong memories with new people from around the world in one of the best surf camp in Portugal. Whether you are a solo traveller or a group of friends, you will share great surf experiences in a great surf holiday destination."
    ></Hero>
  )
}

export default Aloha