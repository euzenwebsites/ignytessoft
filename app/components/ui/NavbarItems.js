import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarItems = ({ isToggled }) => {
  const Navitems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#service" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Pricing", path: "#prices" },
    { name: "Contact Us", path: "#contact" },
  ];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <motion.ul className="navList" initial="hidden" animate="visible" exit="hidden" variants={navList}>
      {Navitems.map((item, index) => (
        <motion.li className="nav-item" key={index} variants={navItem}>
          <Link href={item.path}>{item.name}</Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavbarItems;
