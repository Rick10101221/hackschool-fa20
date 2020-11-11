import React from 'react';
import '../pages/style.css';

let Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Pokemon Generator</h1>
      </div>
      <div className="nav-buttons">
        <a href="/create">Create New Pokemon</a>
        <a href="/view">View All Pokemon</a>
      </div>
    </div>
  );
}

export default Navbar;