import React from 'react';
import Link from 'next/link';

const Header = () => (
  <section className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="logo">
            <Link href="/dashboard">
              <a href="/dashboard">
                <span>Boilerplate</span>
              </a>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="col-md-6 pl-0 pl-sm-3  pr-0 pr-sm-3">
          <nav className="navbar-expand-md navbar-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="nav-menu">
                <li>
                  <Link href="/tab-1">
                    <a href="/tab-1">
                      <span>Tab 1</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/tab-2">
                    <a href="/tab-2">
                      <span>Tab 1</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/tab-3">
                    <a href="/tab-3">
                      <span>Tab 1</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/messages">
                    <a href="/messages">
                      <span>Messages</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="/profile">
                    <span>Profile</span>
                    <svg
                      width="7"
                      height="5"
                      viewBox="0 0 7 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.82682 0.533691L3.50145 2.85907L1.17607 0.533691L0.410156 1.29961L3.50145 4.3909L6.59274 1.29961L5.82682 0.533691Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
