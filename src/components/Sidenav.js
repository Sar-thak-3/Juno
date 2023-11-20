import React from "react";
import "./sidenav.css";

function Sidenav() {
  return (
    <div className="start">
      <div id="nav-bar">
        <input id="nav-toggle" type="checkbox" />
        <div id="nav-header">
          <a id="nav-title" href="https://codepen.io" target="_blank">
            Juno
          </a>
          <label htmlFor="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div className="nav-button">
            <i className="fas fa-palette"></i>
            <span>Overview</span>
          </div>
          <div className="nav-button">
            <i className="fas fa-images"></i>
            <span>Onboarding</span>
          </div>
          <div className="nav-button monitoring">
            <i className="fas fa-thumbtack"></i>
            <span>Monitoring</span>
          </div>
          <div className="nav-button">
            <i className="fas fa-thumbtack"></i>
            <span>Flagging</span>
          </div>
          <div className="nav-button">
            <i className="fas fa-thumbtack"></i>
            <span>Source of Income</span>
          </div>
          <div className="nav-button">
            <i className="fas fa-thumbtack"></i>
            <span>UAR</span>
          </div>
          <hr />
          <div id="nav-content-highlight"></div>
        </div>
        <input id="nav-footer-toggle" type="checkbox" />
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" />
            </div>
            <div id="nav-footer-titlebox">
              <a
                id="nav-footer-title"
                href="https://twitter.com/elonmusk"
                target="_blank"
              >
                Elon Musk
              </a>
              <span id="nav-footer-subtitle">elonmusk@twitter.com</span>
            </div>
            <label htmlFor="nav-footer-toggle">
              <i className="fas fa-caret-up"></i>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
