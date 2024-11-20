import React, { useState } from 'react';
import './AdminSidebar.css';
import {
  FaTachometerAlt,
  FaHome,
  FaKey,
  FaUserTie,
  FaCheck,
  FaUsers,
  FaComments,
  FaBell,
  FaPen,
  FaFileAlt,
  FaLock,
  FaSignOutAlt,
  FaPhoneAlt,
  FaBars,
} from 'react-icons/fa';

interface AdminSidebarProps {
  activeItem: string;
}

function AdminSidebar({ activeItem }: AdminSidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Properties', icon: <FaHome /> },
    { name: 'Listing Requests', icon: <FaKey /> },
    { name: 'Agents', icon: <FaUserTie /> },
    { name: 'Customers', icon: <FaUsers /> },
    { name: 'Consult Requests', icon: <FaComments /> },
    { name: 'Send Notifications', icon: <FaBell /> },
    { name: 'Contact Info Requests', icon: <FaPhoneAlt /> },
    { name: 'Blogs & Articles', icon: <FaPen /> },
    { name: 'Document Submission', icon: <FaFileAlt /> },
    { name: 'Admin Access', icon: <FaLock /> },
    { name: 'Logout', icon: <FaSignOutAlt /> },
  ];

  const handleItemClick = (itemName: string) => {
    // Hardcoded URL mapping
    const urlMap: { [key: string]: string } = {
      'Dashboard': 'AdminDashboard.html',
      'Properties': 'AdminProperties.html',
      'Listing Requests': 'ListingRequests.html',
      'Agents': 'AdminAgents.html',
      'Customers': 'Customers.html',
      'Consult Requests': 'ConsultRequests.html',
      'Send Notifications': 'SendNotifications.html',
      'Contact Info Requests': 'ContactRequests.html',
      'Blogs & Articles': 'AdminBlogs.html',
      'Document Submission': 'DocSubmission.html',
      'Admin Access': 'AdminAccess.html',
      'Logout': 'logout.html',
    };

    const url = urlMap[itemName];
    if (url) {
      window.location.href = url;
    } else {
      console.error(`No URL mapped for the item: ${itemName}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`admin-sidebar ${isMenuOpen ? 'open' : ''}`}>
   
      <div className="admin-image">
        {/* Replace with actual image element */}
        <img src="./src/assets/Nav-Logo.svg" alt="Admin" />
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`sidebar-item ${activeItem === item.name ? 'active' : ''}`}
            onClick={() => handleItemClick(item.name)}
          >
            <span className="icon">{item.icon}</span>
            <span className="menu-text">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebar;
