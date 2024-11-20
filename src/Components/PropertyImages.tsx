// PropertyImages.tsx
import React, { useState } from 'react';
import './PropertyImages.css';

interface PropertyImagesProps {
  images: string[];
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="property-images">
      <div className="main-images">
        {images.slice(0, 3).map((image, index) => (
          <img key={index} src={image} alt={`Property image ${index + 1}`} className="property-image" />
        ))}
      </div>
      {showAll ? (
        <div className="all-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Property image ${index + 1}`} className="property-image" />
          ))}
        </div>
      ) : (
        <button onClick={handleShowAll} className="show-all-button">
          Show all {images.length} photos
        </button>
      )}
    </div>
  );
};

export default PropertyImages;
