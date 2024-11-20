import ListingCard from "./ListingCard";
import "./MyListingPage.css";
import { CiSearch } from "react-icons/ci";

function MyListingPage() {
  const propertyListings = [
    {
      id: 1,
      propertyName: "Capital Residence",
      location: "Shanagar Pallapatti",
      bedrooms: "03",
      bathrooms: "02",
      garage: "01",
      price: "30,00,000",
      imgSrc: "./src/assets/house.jpg",
    },
    {
      id: 2,
      propertyName: "Luxury Villa",
      location: "Sunset Boulevard",
      bedrooms: "05",
      bathrooms: "04",
      garage: "02",
      price: "1,50,000",
      imgSrc: "./src/assets/villa.jpeg",
    },
    {
        id: 3,
        propertyName: "Capital Residence",
        location: "Shanagar Pallapatti",
        bedrooms: "03",
        bathrooms: "02",
        garage: "01",
        price: "30,00,000",
        imgSrc: "./src/assets/house.jpg",
      },
    // Add more listings as needed
  ];
  return (
    <div className="mylistingpage">
      <div className="listingtopbar">
        <h1>My Listings</h1>
        <div className="search">
          <CiSearch className="searchicon" />
          <select>
            <option disabled selected>
              Filter By
            </option>
            <option>Date</option>
            <option>Price</option>
            <option>Popularity</option>
            <option>Relevance</option>
          </select>
        </div>
      </div>
      <div className="listings">
        {propertyListings.map((listing) => (
          <ListingCard
            key={listing.id}
            propertyName={listing.propertyName}
            location={listing.location}
            bedrooms={listing.bedrooms}
            bathrooms={listing.bathrooms}
            garage={listing.garage}
            price={listing.price}
            imgSrc={listing.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default MyListingPage;
