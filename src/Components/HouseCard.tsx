import "./HouseCard.css";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineGarage } from "react-icons/md";

interface HouseCardProps {
  propertyName: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  price: string;
  imgSrc: string;
}

function HouseCard({ propertyName, location, bedrooms, bathrooms, garage, price, imgSrc }: HouseCardProps) {
  return (
    <div className="housecard">
      <div className="img-container">
        <img src={imgSrc} alt="house" />
      </div>

      <div className="prop-title">
        <h4>{propertyName}</h4>
        <CiHeart />
      </div>

      <div className="prop-location">
        <CiLocationOn />
        <p>{location}</p>
      </div>

      <div className="prop-info">
        <div className="bed">
          <MdOutlineBed />
          <p>{bedrooms}</p>
        </div>

        <div className="bath">
          <MdOutlineBathroom />
          <p>{bathrooms}</p>
        </div>
        <div className="car">
          <MdOutlineGarage />
          <p>{garage}</p>
        </div>
      </div>

      <div className="prop-cta">
        <p>₹{price}</p>
        <button><a href="/PropertyPage.html">Know More</a></button>
      </div>
    </div>
  );
}

export default HouseCard;
