import { BsBell } from "react-icons/bs";
import { useState } from "react";
import "./ContactRequests.css";

function ContactRequests() {
  // Define the data array
  const [data, setData] = useState([
    {
      id: 1,
      name: "Mohamed Gazzali",
      agent: "Mohamed Mafaz P R",
    },
    {
      id: 2,
      name: "Abdul Kader Jailani",
      agent: "Mohamed Mafaz P R",
    },
    // Add more data as needed
  ]);

  return (
    <div className="listingrequests">
      <div className="adminpropheader">
        <h1>Contact Info Requests</h1>
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
              <h2>{item.name} Requested Contact Info</h2>
              <p>
                Agent Name: {item.agent}
              </p>
            </div>
            <div className="request-actions">
              
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

export default ContactRequests;
