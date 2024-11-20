import { BsBell } from "react-icons/bs";
import "./DocWrite.css";
import { useState } from "react";

function DocWrite() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Mohamed Gazzali",
      agent: "Capital Residence, Shanagar, Pallapatti",
    },
    {
      id: 2,
      name: "Abdul Kader Jailani",
      agent: "Capital Residence, Shanagar, Pallapatti",
    },
    // Add more data as needed
  ]);

  return (
    <div className="docwrite">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Documents Submission</h1>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" />
        </div>
      </div>
      <div className="request-list">
        {data.map((item) => (
          <div key={item.id} className="request-widget">
            <div className="request-info">
              <h2>{item.name}</h2>
              <p>{item.agent}</p>
            </div>
            <div className="request-actions">
              <div className="icon-container">
                <button><a href="ViewDocs.html">View Documents</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocWrite;
