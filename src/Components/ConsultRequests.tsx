import { BsBell } from "react-icons/bs";
import { useState } from "react";
import "./ConsultRequests.css";

function ConsultRequests() {
  // Define the data array
  const [data, setData] = useState([
    {
      id: 1,
      name: "Phani kondepudi",
      type: "In-person Consultation",
      date: "2021-09-01",
      consulttype: "Legal Advice",
    },
    {
      id: 2,
      name: "Ashok Babu",
      type: "In-person Consultation",
      date: "2021-09-01",
      consulttype: "Legal Advice",
    },
    // Add more data as needed
  ]);

  return (
    <div className="listingrequests">
      <div className="adminpropheader">
        <h1>Consult Requests</h1>
        <div className="header-right">
          <BsBell className="notification-icon" />
          <img
            src="./src/assets/realtor-img.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      {/* Dynamically create widgets */}
      <div className="request-list">
        {data.map((item) => (
          <div key={item.id} className="request-widget">
            <div className="request-info">
              <h2>Consultation With {item.name}</h2>
              <p>
                {item.type} | {item.date} | {item.consulttype}
              </p>
            </div>
            <div className="request-actions">
              
              <form>
                <div>
                  <input type="number" placeholder="Price"></input>
                  <input type="number" placeholder="Duration"></input>
                </div>
                <input type="submit"></input>
              </form>
              <select>
                <option value="" disabled selected>
                  Assign To
                </option>
                <option value="jailani">Jailani</option>
                <option value="mafaz">Mafaz</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultRequests;
