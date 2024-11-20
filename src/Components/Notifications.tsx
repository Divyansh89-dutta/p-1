import React, { useState } from "react";
import "./Notifications.css";

const notificationsData = [
  {
    id: 1,
    icon: "noti1.svg",
    title: "Inquiry on Capital Residence",
    description: "Abdul Kader has inquired about Capital Residence",
    buttonType: "double",
    buttons: ["View", "Contact"],
    isRead: false,
  },
  {
    id: 2,
    icon: "noti2.svg",
    title: "New Property has been Listed",
    description: "Neeraj has listed a new property on Shanagar",
    buttonText: "View Listing",
    isRead: true,
  },
  {
    id: 3,
    icon: "noti3.svg",
    title: "Market Report Released",
    description: "Market Report for the month of May has been released",
    buttonText: "Download Report",
    isRead: false,
  },
  {
    id: 4,
    icon: "noti4.svg",
    title: "Consultation Request",
    description: "Jane Cooper | 3 October | $300 | Legal Advice",
    buttonType: "double",
    buttons: ["Decline", "Accept"],
    isRead: true,
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "All") return true;
    if (filter === "Read") return notification.isRead;
    if (filter === "Unread") return !notification.isRead;
    return true;
  });

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));
    setNotifications(updatedNotifications);
  };

  // Toggle the popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="notifications-container">
      <div className="listingtopbar">
        <h1>Notifications</h1>
        <button className="mark-all-read" onClick={markAllAsRead}>
          Mark All As Read
        </button>
      </div>
      <div className="filter-buttons">
        <button
          onClick={() => setFilter("All")}
          className={filter === "All" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Read")}
          className={filter === "Read" ? "active" : ""}
        >
          Read
        </button>
        <button
          onClick={() => setFilter("Unread")}
          className={filter === "Unread" ? "active" : ""}
        >
          Unread
        </button>
      </div>
      <div className="notifications-list">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${notification.isRead ? "read" : "unread"}`}
          >
            <div className="notification-icon">
              <img src={`./src/assets/${notification.icon}`} alt="" />
            </div>
            <div className="notification-details">
              <strong>{notification.title}</strong>
              <p>{notification.description}</p>
            </div>
            {notification.buttonType === "double" ? (
              <div className="action-buttons">
                {notification.buttons.map((btn, index) => (
                  <button
                    key={index}
                    className={`action-button ${btn.toLowerCase()}`}
                    onClick={() => {
                      if (notification.id === 1 && btn === "View") {
                        togglePopup(); // Open popup for first notification "View" button
                      }
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            ) : (
              <button className="action-button">{notification.buttonText}</button>
            )}
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Inquiry Details</h2>
            <p><strong>Name:</strong> Mohamed Mafaz P R</p>
            <p><strong>Email:</strong> prmafaz2006@gmail.com</p>
            <p><strong>Mobile: </strong> +91 1234567890</p>
            <p><strong>Role: </strong> Manager</p>
            <p><strong>Message: </strong> It should be the simple message</p>
            <button onClick={togglePopup} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
