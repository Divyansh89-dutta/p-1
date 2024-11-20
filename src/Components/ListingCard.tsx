import React, { useState } from 'react';
import './ListingCard.css';
import { CiCircleInfo } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineBed } from 'react-icons/md';
import { MdOutlineShower } from 'react-icons/md';
import { FaCar } from 'react-icons/fa6';
import { MdClose } from "react-icons/md";


interface ListingCardProps {
  propertyName: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  price: string;
  imgSrc: string; // New prop for image source
}

const ListingCard: React.FC<ListingCardProps> = ({
  propertyName,
  location,
  bedrooms,
  bathrooms,
  garage,
  price,
  imgSrc // Destructure imgSrc from props
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="housecard">
      <div className="img-container">
        <img src={imgSrc} alt={propertyName} />
      </div>
      
      <div className="prop-title">
        <h4>{propertyName}</h4>
        <CiCircleInfo onClick={openModal} className="info-icon" />
      </div>

      <div className="prop-location">
        <IoLocationOutline className="listingicon" />
        <p>{location}</p>
      </div>

      <div className="prop-info">
        <div className="bed">
          <MdOutlineBed className="listingicon" />
          <p>{bedrooms}</p>
        </div>

        <div className="bath">
          <MdOutlineShower className="listingicon" />
          <p>{bathrooms}</p>
        </div>

        <div className="car">
          <FaCar className="listingicon" />
          <p>{garage}</p>
        </div>
      </div>

      <div className="prop-cta">
        <p>₹{price}</p>
        <button onClick={openModal}>Know More</button>
      </div>

      {showModal && (
        <div className="overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}><MdClose /></button>
            <div className='popupcontent'>
              <h6>Views:</h6>
              <p>12345678</p>
            </div>  
            <div className='popupcontent'>
              <h6>No of Favorites:</h6>
              <p>12345678</p>
            </div>  
            <div className='popupcontent'>
              <h6>Listed date:</h6>
              <p>11/07/2024</p>
            </div>  
            <div className='popupcontent'>
              <h6>Coversions:</h6>
              <p>15</p>
            </div>  
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingCard;
