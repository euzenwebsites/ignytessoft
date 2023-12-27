"use client"
import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  return (
    <>
      <button className="btn mobile-menu-toggle" onClick={() => setToggle(!isToggled)}>
      {isToggled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
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
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>)}
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar002"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            // exit="hidden"
            variants={navContainer}
          >  
            <NavbarItems isToggled={isToggled} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
