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
              <a href="#service" >Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>   
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </nav>
  );
};

NavBarHeader.displayName = 'NavBarHeader';

export default NavBarHeader;
