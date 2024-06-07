import React from 'react';
import "../Streetfood/streetfood.css";
import img1 from "../../assets/streetfood.jpg";
import img2 from "../../assets/str1.jpeg";
import img3 from "../../assets/str2.jpeg";
import img4 from "../../assets/str3.jpeg";
import img5 from "../../assets/str4.jpg";

const streetfoodData = [
    { id: 1, image: img1, city: "Agadir", addresse: "Taghazot", category: "Briwat" },
    { id: 2, image: img2, city: "Agadir", addresse: "Taghazot", category: "Lhem Rass" },
    { id: 3, image: img3, city: "Agadir", addresse: "Anza", category: "Mesmen" },
    { id: 4, image: img4, city: "Agadir", addresse: "Tamraght", category: "Harira" },
    { id: 5, image: img5, city: "Agadir", addresse: "Sok al Hed", category: "Chowaya" },
];

function Streetfood() {
    return (
        <div className="streetfood-container">
            {streetfoodData.map((itemData) => (
                <StreetFoodItem key={itemData.id} data={itemData} />
            ))}
        </div>
    );
}

export default Streetfood;

function StreetFoodItem({ data }) {
    return (
        <div className="streetfood-item">
            <img src={data.image} alt="aa" />
            <div className='item-text'>
                <h1>{data.category}</h1>
                <p>{data.city} {data.addresse}</p>
            </div>
        </div>
    );
}
    