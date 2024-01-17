// Import React and necessary images (if needed)
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { IoMdMenu } from "react-icons/io";
import { PiChatsCircle } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { FaExpandArrowsAlt, FaLandmark } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


// import user1 from '../assets/img/credit/user1-128x128.jpg'
// import user8 from '../assets/img/credit/user8-128x128.jpg';
// import user3 from '../assets/img/credit/user3-128x128.jpg';

// CustomNavbar component
const CustomNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <IoMdMenu />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <IoSearch/>
              </button>
            </div>
          </div>
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <PiChatsCircle />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            {/* ... rest of the code for user dropdown */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <GoBell />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            {/* ... rest of the code for notifications dropdown */}
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <FaExpandArrowsAlt />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <FaThLarge/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Export the component
export default CustomNavbar;
