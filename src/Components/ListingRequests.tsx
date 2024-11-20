import { BsBell } from "react-icons/bs";
import { useState } from "react";
import "./ListingRequests.css";

function ListingRequests() {
  // Define the data array
  const [data, setData] = useState([
    {
      id: 1,
      title: "Capital Residence, Shanagar Pallappatti",
      requestedBy: "Mohamed Mafaz P R",
    },
    {
      id: 2,
      title: "Ocean View Apartments, Mumbai",
      requestedBy: "Jane Doe",
    },
    // Add more data as needed
  ]);

  return (
    <div className="listingrequests">
      <div className="adminpropheader">
        <h1>Listing Requests</h1>
        <div className="header-right">
          <BsBell className="notification-icon" />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" className="profile-img" />
        </div>
      </div>

      {/* Dynamically create widgets */}
      <div className="request-list">
        {data.map((item) => (
          <div key={item.id} className="request-widget">
            <div className="request-info">
              <h2>{item.title}</h2>
              <p>
                Listing Requested By: {item.requestedBy} | <a href="#" className="edit-link">Edit</a>
              </p>
            </div>
            <div className="request-actions">
              <button className="view-listing-btn">View Listing</button>
              <div className="icon-container">
                <button>Approve</button>
                <button>Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingRequests;
