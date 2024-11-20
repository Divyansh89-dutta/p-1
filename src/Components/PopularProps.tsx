import React from "react";
import HouseCard from "./HouseCard";
import "./PopularProps.css";

function PopularProps() {
  // Example data for house cards
  const houseData = [
    {
      propertyName: "Luxury Villa",
      location: "Beverly Hills",
      bedrooms: "4",
      bathrooms: "3",
      garage: "2",
      price: "1,200,0",
      imgSrc: "./src/assets/house.jpg"
    },
    {
      propertyName: "Modern Apartment",
      location: "Downtown",
      bedrooms: "2",
      bathrooms: "2",
      garage: "1",
      price: "850,00",
      imgSrc: "./src/assets/house.jpg"
    },
    {
      propertyName: "Cozy Cottage",
      location: "Lake Tahoe",
      bedrooms: "3",
      bathrooms: "2",
      garage: "1",
      price: "650,00",
      imgSrc: "./src/assets/house.jpg"
    },
    {
      propertyName: "Elegant Mansion",
      location: "Beverly Hills",
      bedrooms: "5",
      bathrooms: "4",
      garage: "3",
      price: "2,500,0",
      imgSrc: "./src/assets/house.jpg"
    },
    {
      propertyName: "Urban Loft",
      location: "New York City",
      bedrooms: "1",
      bathrooms: "1",
      garage: "0",
      price: "900,00",
      imgSrc: "./src/assets/house.jpg"
    },
    {
      propertyName: "Suburban Home",
      location: "Chicago",
      bedrooms: "4",
      bathrooms: "3",
      garage: "2",
      price: "750,00",
      imgSrc: "./src/assets/house.jpg"
    }
  ];

  return (
    <div className="PopularProps">
      <h1>Popular Properties</h1>

      <div className="props-grid">
        {houseData.map((house, index) => (
          <HouseCard
            key={index}
            propertyName={house.propertyName}
            location={house.location}
            bedrooms={house.bedrooms}
            bathrooms={house.bathrooms}
            garage={house.garage}
            price={house.price}
            imgSrc={house.imgSrc}
          />
        ))}
      </div>

      <a href="#">VIEW ALL</a>
    </div>
  );
}

export default PopularProps;
