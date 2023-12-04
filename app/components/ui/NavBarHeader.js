"use client";
import './module.css';
import Logo from "../../../public/logo.svg";
import Image from 'next/image';
import Navbar from './Navbar';
import { useState } from 'react';
import Link from 'next/link';

const NavBarHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" style={{ zIndex: "500" }}>
      <div className="container">
        <div className="logo-container">
          <Link href="/">
            <Image src={Logo} alt='Ignytes Soft Logo'/>
          </Link>
        </div>
        <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <ul className="menu text-[#000]">
            <li className='hover:border-b-yellow-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:border-b-yellow-500'>
              <Link href="#service">Services</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          {/* onClick={toggleMenu} */}
          <Navbar />
          {/* {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )} */}
        </div>
      </div>
    </nav>
  );
};

NavBarHeader.displayName = 'NavBarHeader';

export default NavBarHeader;
