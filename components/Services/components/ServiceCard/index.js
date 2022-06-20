import React from "react";

import card from "./ServiceCard.module.scss";

function ServiceCard({ title, background, description }) {
  const backgrounds = [
    "https://i.pinimg.com/originals/12/35/fe/1235fe31b9ff55ffcc60494a9f4ebf5b.jpg",
    "https://i.pinimg.com/564x/f8/15/09/f8150915fe3e9619c0bfad0e86e63445.jpg",
    "https://wallpaperaccess.com/full/4810961.jpg",
    "https://i.pinimg.com/736x/7c/1e/e0/7c1ee042029479a8a035fc511edb2557.jpg",
    "https://data.whicdn.com/images/292687873/original.jpg",
    "https://data.whicdn.com/images/340834876/original.jpg",
  ];
  return (
    <div className={card.card}>
      <img src={`${backgrounds[Math.floor(Math.random() * 6)]}`} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
