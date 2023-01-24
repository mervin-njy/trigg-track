import React from "react";

const NavBar = () => {
  return (
    <Header className="navbar">
      <img id="app-logo" src="" alt="triggtrack logo" />
      <ul className="navbar-links">
        <li>Home</li>
        <li>Today</li>
        <li>Track</li>
        <li>Triggers</li>
      </ul>
      <Profile />
    </Header>
  );
};

export default NavBar;
