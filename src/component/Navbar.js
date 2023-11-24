import "../css/Navbar.css";
import React, { useEffect, useState } from "react";
import img2 from "../image/menu.jpg";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [activeNav, setActiveNav] = useState(true);

  const location = useLocation();
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const hamburger = (value) => {
    setMobileNavBar(value);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="desktop-nav">
            <ul>
              {activeNav === "/" ? (
                ""
              ) : (
                <li className="desktop">
                  <Link to="/">Home</Link>
                </li>
              )}
              {activeNav === "/Aboutus" ? (
                ""
              ) : (
                <li className="desktop">
                  <Link to="/Aboutus">About US</Link>
                </li>
              )}
              {activeNav === "/Skills" ? (
                ""
              ) : (
                <li className="desktop">
                  <Link to="/Skills">Skills</Link>
                </li>
              )}
              {activeNav === "/Contact" ? (
                ""
              ) : (
                <li className="desktop">
                  <Link to="/Contact">Contact</Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            {!mobileNavBar ? (
              <img
                src={img2}
                className="btn"
                onClick={() => hamburger(true)}
              ></img>
            ) : (
              <span className="closebtn" onClick={() => hamburger(false)}>
              &times;
            </span>
            )}
          </div>
          {mobileNavBar ? (
            <div className="nnn">
            <div id="try" className="mobile-nav">

              <Link to="/" onClick={() => hamburger(false)}>
                Home
              </Link>

              <Link to="/Aboutus" onClick={() => hamburger(false)}>
                AboutMe
              </Link>

              <Link to="/Skills" onClick={() => hamburger(false)}>
                Skills
              </Link>

              <Link to="/Contact" onClick={() => hamburger(false)}>
                Contact
              </Link>
            </div></div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
