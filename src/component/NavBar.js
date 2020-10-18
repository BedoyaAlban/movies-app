import React from "react";
import Camera from "../video-camera.svg";

const NavBar = ({ setStatus }) => {
  return (
    <nav className="navbar is-transparent m-4">
      <div className="navbar-brand">
        <div
          className="navbar-item is-clickable"
          onClick={() => setStatus("popular")}
        >
          <img src={Camera} alt="camera" width="112" height="40" />
        </div>
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
          <div className="navbar-item">
            <div className="navbar-item">Filter</div>
            <div className="is-inline-flex">
              <button
                className="navbar-item is-clickable button is-link is-outlined ml-1"
                onClick={() => setStatus("now_playing")}
              >
                Now Playing
              </button>
              <button
                className="navbar-item is-clickable button is-success is-outlined ml-1"
                onClick={() => setStatus("top_rated")}
              >
                Top Rated
              </button>
              <button
                className="navbar-item is-clickable button is-warning is-outlined ml-1"
                onClick={() => setStatus("upcoming")}
              >
                Upcoming
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <input className="input" type="text" placeholder="Search Movie" />
      </div>
    </nav>
  );
};

export default NavBar;
