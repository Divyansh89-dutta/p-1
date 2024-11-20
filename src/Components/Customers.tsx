import React from "react";
import { BsBell } from "react-icons/bs";
import "./Customers.css";

interface Customer {
  id: number;
  name: string;
  mobile: string;
  role: string;
}

const customerData: Customer[] = [
  { id: 1, name: "John Doe", mobile: "123-456-7890", role: "Regular Customer" },
  { id: 2, name: "Jane Smith", mobile: "987-654-3210", role: "Premium Customer" },
  { id: 3, name: "Emily Johnson", mobile: "555-555-5555", role: "Regular Customer" },
  { id: 4, name: "Michael Brown", mobile: "666-666-6666", role: "VIP Customer" },
  { id: 5, name: "Linda Davis", mobile: "777-777-7777", role: "Regular Customer" },
  { id: 6, name: "James Wilson", mobile: "888-888-8888", role: "Premium Customer" },
];

function Customers() {
  return (
    <div className="customers">
      <div className="adminpropheader">
        <h1>Customers</h1>
        <div className="header-right">
          <BsBell className="notification-icon" />
          <img
            src="./src/assets/realtor-img.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.mobile}</td>
              <td>{customer.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
