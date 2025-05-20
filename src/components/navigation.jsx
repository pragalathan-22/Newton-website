import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll();

export const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
      setOpenSubmenu(null);
    } else {
      setOpenDropdown(name);
      setOpenSubmenu(null);
    }
    if (name === "mobileMenu") {
      setMobileNavOpen(!mobileNavOpen);
    }
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) scroll.animateScroll(el);
    closeAllMenus();
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setOpenSubmenu(null);
    setMobileNavOpen(false);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Brand + mobile toggle */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => toggleDropdown("mobileMenu")}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <Link
            className="navbar-brand page-scroll"
            to="/"
            onClick={() => {
              scroll.animateScroll(0);
              closeAllMenus();
            }}
          >
            Newtonsky5
          </Link>
        </div>

        {/* Main nav */}
        <div
          id="nav-collapse"
          className={`collapse navbar-collapse ${mobileNavOpen ? "in" : ""}`}
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" onClick={(e) => handleScroll(e, "#features")}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleScroll(e, "#services")}>
                Services
              </a>
            </li>

            {/* Products dropdown */}
            <li className={`dropdown ${openDropdown === "products" ? "open" : ""}`}>
              <a
                href="#"
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("products");
                }}
              >
                Products <span className="caret" />
              </a>

              <ul className="dropdown-menu">
                {/* Touchscreen kiosk submenu */}
                <li className={`dropdown-submenu ${openSubmenu === "touchscreen" ? "open" : ""}`}>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubmenu("touchscreen");
                    }}
                  >
                    Touchscreen kiosk
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/products/info-kiosk" onClick={closeAllMenus}>
                        Information kiosk
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/library-kiosk" onClick={closeAllMenus}>
                        Library kiosk
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/feedback-kiosk" onClick={closeAllMenus}>
                        Feedback kiosk
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/wayfinding-kiosk" onClick={closeAllMenus}>
                        Wayfinding kiosk
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Digital standee submenu */}
                <li className={`dropdown-submenu ${openSubmenu === "digital" ? "open" : ""}`}>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSubmenu("digital");
                    }}
                  >
                    Digital standee
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/products/vertical-standee" onClick={closeAllMenus}>
                        Vertical digital standee
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/digital-signage" onClick={closeAllMenus}>
                        Digital signage
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/double-side-standee" onClick={closeAllMenus}>
                        Double side digital standee
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/a-frame-standee" onClick={closeAllMenus}>
                        A-frame standee
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Other product links */}
                <li>
                  <Link to="/products/interactive-kiosk" onClick={closeAllMenus}>
                    Interactive / Information touchscreen kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/products/multi-touch-kiosk" onClick={closeAllMenus}>
                    Multi-touch screen kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/products/self-ordering-kiosk" onClick={closeAllMenus}>
                    Self-ordering kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/products/touch-table" onClick={closeAllMenus}>
                    Interactive touch table
                  </Link>
                </li>
                <li>
                  <Link to="/products/multi-touch-table" onClick={closeAllMenus}>
                    Multi-touch screen table
                  </Link>
                </li>
                <li>
                  <Link to="/products/mobile-charging-kiosk" onClick={closeAllMenus}>
                    Mobile charging kiosk
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>
                Manufacture
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleScroll(e, "#testimonials")}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleScroll(e, "#team")}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
