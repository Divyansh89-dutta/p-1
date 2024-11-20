import './Navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
        <img src='src/assets/Nav-Logo.svg' alt='Nav Logo' />
        <ul className={isOpen ? 'open' : ''}>
            <li>Buy</li>
            <li>Rent</li>
            <li>Off Plan</li>
            <li>Commercial</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li><a href='Login.html'>Login</a></li>
            <a href='/CreateListing.html'><button>Create Listing</button></a>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Conditional icon rendering */}
        </div>
    </div>
  );
}

export default Navbar;
