"use client"

import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Animation = () => {
      const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const heroSectionHeight = 15; 
  const fullScaleScrollThreshold = 7000; 

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const scaleY = scrollY < fullScaleScrollThreshold ? 1 + scrollY / 1000 : 2; // Adjust the divisor and multiplier based on your preference

    controls.start({ scaleY, translateY: `-${scrollY * 0.5}px` });
  }, [scrollY, controls]);

  useEffect(() => {
    controls.start({ scaleY: 1, translateY: `-${scrollY * 0.5}px` });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);
    
  return (

    <div>
      <motion.div
      style={{
        position: 'fixed',
        top: `${heroSectionHeight}vh`,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px', // Adjust line width as needed
        height: '100vh', // Cover the entire height of the viewport
        backgroundColor: '#000', // Line color
          }}
          className='max-sm:hidden'
      animate={controls}
    />
    </div>
  )
}

export default Animation
