import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import './SendNotifications.css';

const SendNotifications: React.FC = () => {
  const [history, setHistory] = useState([
    { to: "Aniket Kumar Pathak", subject: "Monthly Market Report" },
    { to: "Aniket Kumar Pathak", subject: "Monthly Market Report" },
    { to: "Aniket Kumar Pathak", subject: "Monthly Market Report" },
    { to: "Aniket Kumar Pathak", subject: "Monthly Market Report" },
    { to: "Aniket Kumar Pathak", subject: "Monthly Market Report" }
  ]);

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className='sendnotifications'>
      <div className="adminpropheader">
        <h1>Send Notifications</h1>
        <div className="header-right">
          <BsBell className="notification-icon" />
          <img
            src="./src/assets/realtor-img.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
      <div className="form-and-history">
        <form className="notification-form">
          <input type="text" placeholder="To:" />
          <input type="text" placeholder="Title:" />
          <textarea placeholder="Description:" />
          <input type="text" placeholder="Button Text:" />
          <input type="text" placeholder="Button Link:" />
          <button type="submit" className="send-btn">Send Notification</button>
        </form>
        <div className="history">
          <div className="history-header">
            <h2>History</h2>
            <button onClick={clearHistory} className="clear-btn">Clear All</button>
          </div>
          <div className="history-list">
            {history.map((item, index) => (
              <div key={index} className="history-item">
                <p><strong>To:</strong> {item.to}</p>
                <p><strong>Subject:</strong> {item.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNotifications;
