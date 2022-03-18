import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const itemMenu = [
    { id: "home", name: "Home", ref: "/" },
    { id: "featured", name: "Featured", ref: "/featured" },
    { id: "team", name: "Team", ref: "/team" },
    { id: "sign-in", name: "Sign In", ref: "/sign-in" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="nav-logo" src="/images/logo.svg" alt="logo" />
        <div className="nav-menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active noSelect" : "nav-menu noSelect"}>
          {itemMenu.map((item) => (
            <Link key={item.id} to={item.ref} className="nav-links" onClick={closeMobileMenu}>
              <li className="nav-item">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
