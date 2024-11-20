import React, { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import './ProfileNav.css';

interface ProfileNavProps {
  initialActiveIcon: string;
}

function ProfileNav({ initialActiveIcon }: ProfileNavProps) {
  const [activeIcon, setActiveIcon] = useState(initialActiveIcon);

  useEffect(() => {
    setActiveIcon(initialActiveIcon);
  }, [initialActiveIcon]);

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
    if (icon === 'home') {
      window.location.href = '/MyListings.html';
    }

    if (icon === 'user') {
      window.location.href = '/MyProfile.html';
    }

    if (icon === 'people') {
      window.location.href = '/Consultations.html';
    }

    if (icon === 'heart') {
      window.location.href = '/Favorites.html';
    }

    if (icon === 'bell') {
      window.location.href = '/Notifications.html';
    }
  };

  return (
    <div className="profile-nav">
      <div className={`icon ${activeIcon === 'user' ? 'active' : ''}`} onClick={() => handleIconClick('user')}><FaRegUser /></div>
      <div className={`icon ${activeIcon === 'home' ? 'active' : ''}`} onClick={() => handleIconClick('home')}><IoHomeOutline /></div>
      <div className={`icon ${activeIcon === 'people' ? 'active' : ''}`} onClick={() => handleIconClick('people')}><BsPeople /></div>
      <div className={`icon ${activeIcon === 'heart' ? 'active' : ''}`} onClick={() => handleIconClick('heart')}><FaRegHeart /></div>
      <div className={`icon ${activeIcon === 'bell' ? 'active' : ''}`} onClick={() => handleIconClick('bell')}><GoBell /></div>
      <div className={`icon hide-on-mobile ${activeIcon === 'logout' ? 'active' : ''}`} onClick={() => handleIconClick('logout')}><FiLogOut /></div>
    </div>
  );
}

export default ProfileNav;
