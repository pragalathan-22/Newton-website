import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll();

export const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) scroll.animateScroll(el);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Brand + mobile toggle */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#nav-collapse"
            aria-expanded="false"
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
              setOpenDropdown(null);
              setOpenSubmenu(null);
            }}
          >
            Newtonsky5
          </Link>
        </div>

        {/* Main nav */}
        <div
          id="nav-collapse"
          className={`collapse navbar-collapse ${
            openDropdown === "mobileMenu" ? "in" : ""
          }`}
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
                      <Link
                        to="/products/info-kiosk"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        Information kiosk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/library-kiosk"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        Library kiosk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/feedback-kiosk"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        Feedback kiosk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/wayfinding-kiosk"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
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
                      <Link
                        to="/products/vertical-standee"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        Vertical digital standee
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/digital-signage"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        Digital signage
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/double-side-standee"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        Double side digital standee
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/a-frame-standee"
                        onClick={() => {
                          setOpenDropdown(null);
                          setOpenSubmenu(null);
                        }}
                      >
                        A‑frame standee
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Remaining top-level products */}
                <li>
                  <Link to="/products/interactive-kiosk" onClick={() => setOpenDropdown(null)}>
                    Interactive / Information touchscreen kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/products/multi-touch-kiosk" onClick={() => setOpenDropdown(null)}>
                    Multi‑touch screen kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/products/self-ordering-kiosk" onClick={() => setOpenDropdown(null)}>
                    Self‑ordering kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/products/touch-table" onClick={() => setOpenDropdown(null)}>
                    Interactive touch table
                  </Link>
                </li>
                <li>
                  <Link to="/products/multi-touch-table" onClick={() => setOpenDropdown(null)}>
                    Multi‑touch screen table
                  </Link>
                </li>
                <li>
                  <Link to="/products/mobile-charging-kiosk" onClick={() => setOpenDropdown(null)}>
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
