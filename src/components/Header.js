import React from 'react';
import GoogleAuth from './GoogleAuth';

function Header() {
  return (
    <div className="ui menu">
      My Posts
      <GoogleAuth />
    </div>
  );
}

export default Header;
