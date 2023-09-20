import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link href="/">
          <a className="logo d-flex align-items-center me-auto me-xl-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>Append</h1>
            <span>.</span>
          </a>
        </Link>
        {/* Nav Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/#hero">
                <a className="active">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/#portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        {/* End Nav Menu */}
        <Link href="/#about">
          <a className="btn-getstarted">Get Started</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
