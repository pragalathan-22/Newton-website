import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Newtonsky5
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>

            <li className="dropdown">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Products <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a
                    href="#product1"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Touchscreen kiosk
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#info-kiosk">Information kiosk</a></li>
                    <li><a href="#library-kiosk">Library kiosk</a></li>
                    <li><a href="#feedback-kiosk">Feedback kiosk</a></li>
                    <li><a href="#wayfinding-kiosk">Way finding kiosk</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a
                    href="#product2"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Digital standee
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#vertical-standee">Vertical digital standee</a></li>
                    <li><a href="#digital-signage">Digital signage</a></li>
                    <li><a href="#double-side-standee">Double side digital standee</a></li>
                    <li><a href="#a-frame-standee">A frames standee</a></li>
                  </ul>
                </li>
                {/* <li><a href="#product3">Panel pc</a></li>
                <li><a href="#product3">Interactive pc</a></li> */}
                <li><a href="#product3">Interactive/Information Touch screen kiosk</a></li>
                <li><a href="#product3">Multi touch screen Kiosk</a></li>
                <li><a href="#product3">Self ordering Kiosk</a></li>
                <li><a href="#product3">Intractive Touch Table</a></li>
                <li><a href="#product3">Multi touch screen Table</a></li>
                <li><a href="#product3">Mobile charging Kiosk</a></li>
                {/* <li><a href="#product3">Via Finding Kiosk</a></li> */}
              </ul>
            </li>

            <li>
              <a href="#portfolio" className="page-scroll">
                Manufacture
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
