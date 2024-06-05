import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{backgroundColor:"#90E0EF"}}>
      <Link to="/">Search</Link>
      <Link to="/bookshelf">My Bookshelf</Link>
    </nav>
  );
};

export default Navbar;
