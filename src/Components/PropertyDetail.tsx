import React, { useState, useEffect } from "react";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { MdLocationOn, MdOutlineDateRange } from "react-icons/md";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { VscFilePdf } from "react-icons/vsc";
import { BsHouse } from "react-icons/bs";
import { TfiRulerAlt } from "react-icons/tfi";
import { Carousel } from "react-responsive-carousel";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./PropertyDetail.css";

import img1 from "../assets/propertyone.svg";
import img2 from "../assets/propertytwo.svg";
import img3 from "../assets/propertythree.svg";
import Navbar from "./Navbar";

interface Coordinates {
  lat: number;
  lon: number;
}

function PropertyDetail() {
  const [showAll, setShowAll] = useState(false);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addressDetails = {
    address: "Jumeirah Beach Residence",
    area: "Jumeirah Beach Residence",
    city: "Dubai",
    state: "Dubai",
    country: "United Arab Emirates",
  };

  const fullAddress = `${addressDetails.address}, ${addressDetails.city}, ${addressDetails.state}, ${addressDetails.country}`;

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        fullAddress
      )}&format=json&limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCoordinates({
            lat: parseFloat(data[0].lat),
            lon: parseFloat(data[0].lon),
          });
        } else {
          setError("No results found");
        }
      })
      .catch((error) => setError(error.message));
  }, [fullAddress]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Your Title",
          text: "Your Description",
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSavePDF = () => {
    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("page.pdf");
    });
  };

  const images = [img1, img2, img3]; // Add more images as needed

  return (
    <div className="property-detail-container">
      <Navbar />
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; <a href="/listings">Listings</a> &gt;{" "}
        <a href="/listings/pallapatti">Pallapatti</a> &gt; Apartment
      </div>

      <div className="property-info">
        <div className="newsec1">
          <h1 className="property-title">
            64 Prince Albert Boulevard, Pallapatti
          </h1>
          <div className="impicons">
            <CiHeart className="impicon" />
            <CiShare2 className="impicon" onClick={handleShare} />
            <IoPrintOutline className="impicon" onClick={handlePrint} />
            <VscFilePdf className="impicon" onClick={handleSavePDF} />
          </div>
        </div>
        <div className="newsec2">
          <div className="propleft">
            <span className="badge for-sale">For Sale</span>
            <div className="property-details">
              <div>
                <MdLocationOn className="impicon"/> 48 BE 2nd Cross Shanagar Pallapatti
              </div>
              <div>
                <MdOutlineDateRange className="impicon"/> 15 Days Ago
              </div>
            </div>
          </div>
          <div className="propright">
            <div className="price">₹3,00,000</div>
          </div>
        </div>
        <div className="newsec3">
          <div className="property-specs">
            <div>
              <FaBed /> 03
            </div>
            <div>
              <FaBath /> 02
            </div>
            <div>
              <FaCar /> 01
            </div>
            <div>
              <BsHouse /> Apartment
            </div>
            <div>
              <IoEyeOutline /> 5,652 Views
            </div>
          </div>
          <div className="area">
            <TfiRulerAlt />
            1,200 sqft
          </div>
        </div>
      </div>

      <div className="property-images">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          emulateTouch
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-container">
              <img src={image} alt={`Property Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="property-description">
        <h2>Description</h2>
     
        <ul>
          <li>
            Elegantly designed, voluminous living areas bathed in soul-soothing
            natural light
          </li>
          <li>Spacious bedrooms with fitted wardrobes and premium fixtures</li>
          <li>
            Modern kitchen with integrated appliances and sleek countertops
          </li>
          <li>
            Stylish bathrooms with high-quality finishes and contemporary
            fittings
          </li>
          <li>
            Private balcony offering breathtaking views of the surroundings
          </li>
          <li>Secure and well-maintained community with top-notch amenities</li>
        </ul>
      </div>

      <div className="property-address">
        <h2>Address</h2>
        <div className="map-container">
          {coordinates && !error && (
            <MapContainer
              className="maplocation"
              center={[coordinates.lat, coordinates.lon]}
              zoom={15}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[coordinates.lat, coordinates.lon]}>
                <Popup>Jumeirah Beach Residence, Dubai</Popup>
              </Marker>
            </MapContainer>
          )}
          {error && <p className="error-message">{error}</p>}
          <div className="address-details">
            <div>
              <strong>Address</strong> {addressDetails.address}
            </div>
            <div>
              <strong>Area</strong> {addressDetails.area}
            </div>
            <div>
              <strong>City</strong> {addressDetails.city}
            </div>
            <div>
              <strong>State/Country</strong> {addressDetails.state}
            </div>
            <div>
              <strong>Country</strong> {addressDetails.country}
            </div>
          </div>
        </div>
      </div>

      <div className="property-features">
        <h2>Features</h2>
        <div className="features-list">
          <span>CCTV Security</span>
          <span>Landscape Gardens</span>
          <span>Security Staff</span>
          <span>Swimming Pool</span>
          <span>CCTV Security</span>
          <span>Landscape Gardens</span>
          <span>Security Staff</span>
          <span>Swimming Pool</span>
        </div>
      </div>

      <div className="agent-info">
        <div className="agent-details">
          <img src="./src/assets/User 4.jpeg" alt="Agent" />
          <h3>Melvin Felix</h3>
          <p>Real Estate Agent</p>
          <button className="sharebutton">Share Profile</button>
          <hr />
          <button className="contactbutton">Request Contact Info</button>
          <button className="reportbutton">Report Agent</button>
        </div>
        <div className="enquiry-form">
          <h2>Enquire About This Property</h2>
          <form>
            <div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
              <select>
                <option value="">I'm a</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="agent">Agent</option>
              </select>
            </div>
            <textarea placeholder="Message"></textarea>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I Agree to the <span>Terms and Conditions</span>
              </label>
            </div>
            <button type="submit">Request Information</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
