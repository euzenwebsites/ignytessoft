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
              <Link href="ignytessoft.com#service" >Services</Link>
            </li>
            <li>
              <Link href="ignytessoft.com#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="ignytessoft.com#pricing">Pricing</Link>
            </li>
            <li>   
              <Link href="ignytessoft.com#contact">Contact</Link>
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
