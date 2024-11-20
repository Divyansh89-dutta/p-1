import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Optional: Default styling for tabs
import "./AdminProperties.css"; // Your custom CSS file for styling
import { BsBell } from "react-icons/bs";

// Define property type
interface Property {
  title: string;
  status: string;
}

function AdminProperties() {
  const [publishedProperties, setPublishedProperties] = useState<Property[]>([
    { title: "Capital Residence, Shanagar Pallapatti", status: "Published" },
  ]);
  const [binProperties, setBinProperties] = useState<Property[]>([]);
  const [unapprovedProperties, setUnapprovedProperties] = useState<Property[]>([
    { title: "Unapproved Property 1", status: "Unapproved" },
  ]);
  const [showVisibilityPopup, setShowVisibilityPopup] =
    useState<boolean>(false);
  const [showStatusPopup, setShowStatusPopup] = useState<boolean>(false);
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null);

  // Move property to published list
  const approveProperty = (property: Property, fromState: string) => {
    if (fromState === "Unapproved") {
      setUnapprovedProperties(
        unapprovedProperties.filter((prop) => prop !== property)
      );
    }
    setPublishedProperties([...publishedProperties, property]);
  };

  // Move property to bin
  const deleteProperty = (property: Property, fromState: string) => {
    // Remove from respective state and add to bin
    if (fromState === "Published") {
      setPublishedProperties(
        publishedProperties.filter((prop) => prop !== property)
      );
    } else if (fromState === "Unapproved") {
      setUnapprovedProperties(
        unapprovedProperties.filter((prop) => prop !== property)
      );
    }
    setBinProperties([...binProperties, property]);
  };

  // Restore property from bin to unapproved
  const restoreProperty = (property: Property) => {
    setBinProperties(binProperties.filter((prop) => prop !== property));
    setUnapprovedProperties([...unapprovedProperties, property]);
  };

  // Open visibility popup
  const changeVisibility = (property: Property) => {
    setCurrentProperty(property);
    setShowVisibilityPopup(true);
  };

  // Open status popup
  const changeStatus = (property: Property) => {
    setCurrentProperty(property);
    setShowStatusPopup(true);
  };

  // Handle visibility change
  const handleVisibilityChange = (newStatus: string) => {
    if (currentProperty) {
      if (newStatus === "Bin") {
        deleteProperty(currentProperty, "Published");
      } else if (newStatus === "Unapproved") {
        setUnapprovedProperties([...unapprovedProperties, currentProperty]);
        setPublishedProperties(
          publishedProperties.filter((prop) => prop !== currentProperty)
        );
      }
    }
    setShowVisibilityPopup(false);
  };

  // Handle status change
  const handleStatusChange = (newStatus: string) => {
    if (currentProperty) {
      const updatedProperty = { ...currentProperty, status: newStatus };
      setPublishedProperties(
        publishedProperties.map((prop) =>
          prop === currentProperty ? updatedProperty : prop
        )
      );
    }
    setShowStatusPopup(false);
  };

  return (
    <div className="admin-properties">
      <div className="adminpropheader">
        <div className="headertitle">
          <h1>Properties</h1>
          <button className="add-new-btn">+ Add New</button>
        </div>
        <div>
          <BsBell />
          <img src="./src/assets/realtor-img.jpg" alt="Profile" />
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Published</Tab>
          <Tab>Bin</Tab>
          <Tab>Unapproved</Tab>
        </TabList>

        {/* Published Tab Panel */}
        <TabPanel>
          {publishedProperties.map((property, index) => (
            <div key={index} className="property-card">
              <h3>{property.title}</h3>
              <div className="property-actions">
                <span onClick={() => changeStatus(property)}>
                  Change Status
                </span>{" "}
                | <span>Edit</span> |{" "}
                <span
                  style={{ color: "red" }}
                  onClick={() => deleteProperty(property, "Published")}
                >
                  Delete
                </span>{" "}
                |{" "}
                <span onClick={() => changeVisibility(property)}>
                  Change Visibility
                </span>{" "}
              </div>
            </div>
          ))}
        </TabPanel>

        {/* Bin Tab Panel */}
        <TabPanel>
          {binProperties.length > 0 ? (
            binProperties.map((property, index) => (
              <div key={index} className="property-card">
                <h3>{property.title}</h3>
                <div className="property-actions">
                  <span style={{ color: "red" }}>Deleted</span> |{" "}
                  <span
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={() => restoreProperty(property)}
                  >
                    Restore
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No properties in Bin</p>
          )}
        </TabPanel>

        {/* Unapproved Tab Panel */}
        <TabPanel>
          {unapprovedProperties.length > 0 ? (
            unapprovedProperties.map((property, index) => (
              <div key={index} className="property-card">
                <h3>{property.title}</h3>
                <div className="property-actions">
                  <span onClick={() => approveProperty(property, "Unapproved")}>
                    Approve
                  </span>{" "}
                  | <span>Edit</span> |{" "}
                  <span
                    style={{ color: "red" }}
                    onClick={() => deleteProperty(property, "Unapproved")}
                  >
                    Delete
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No Unapproved properties</p>
          )}
        </TabPanel>
      </Tabs>

      {/* Visibility Popup */}
      {showVisibilityPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Change Visibility</h3>
            <button onClick={() => handleVisibilityChange("Unapproved")}>
              Unapproved
            </button>
            <button onClick={() => setShowVisibilityPopup(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Status Popup */}
      {showStatusPopup && (
        <div className="popup">
          <div className="popup-content shadow-popup">
            <h3>Change Status</h3>
            <button onClick={() => handleStatusChange("For Rent")}>
              For Rent
            </button>
            <button onClick={() => handleStatusChange("For Sale")}>
              For Sale
            </button>
            <button onClick={() => handleStatusChange("For Closures")}>
              For Closures
            </button>
            <button onClick={() => handleStatusChange("New Constructions")}>
              New Constructions
            </button>
            <button onClick={() => handleStatusChange("New Listing")}>
              New Listing
            </button>
            <button onClick={() => handleStatusChange("Open House")}>
              Open House
            </button>
            <button onClick={() => setShowStatusPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProperties;
