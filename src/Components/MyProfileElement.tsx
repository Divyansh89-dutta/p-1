import React from 'react';
import ProfileNav from './ProfileNav';
import MyProfilePage from './MyProfilePage';

function MyProfileElement() {
  return (
    <div>
      <ProfileNav initialActiveIcon="user" />
      <MyProfilePage />
    </div>
  );
}

export default MyProfileElement;
