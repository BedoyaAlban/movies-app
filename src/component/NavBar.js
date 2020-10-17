import React from "react";
import Camera from "../video-camera.svg";

const NavBar = ({ status, setStatus }) => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="#home">
          <img src={Camera} alt="camera" width="112" height="28" />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <span className="navbar-item">Movies</span>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-item">Filter</div>
            <div className="is-inline-flex">
              <button
                className="navbar-item is-clickable button is-link is-outlined ml-1"
                onClick={() => setStatus("now_playing")}
              >
                Now Playing
              </button>
              <button
                className="navbar-item is-clickable button is-primary is-outlined ml-1"
                onClick={() => setStatus("top_rated")}
              >
                Top Rated
              </button>
              <button
                className="navbar-item is-clickable button is-danger is-outlined ml-1"
                onClick={() => setStatus("upcoming")}
              >
                Upcoming
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
