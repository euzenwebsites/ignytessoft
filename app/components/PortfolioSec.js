"use client"

import WebPortfolioGallery from './portfoliocomponents/WebPortfolioGallery'
import LogoPortfolioGallery from "./portfoliocomponents/LogoPortfolioGallery"
import AppPortfolioGallery from "./portfoliocomponents/AppPortfolioGallery"
import UIUXPortfolioGallery from './portfoliocomponents/UIUXPortfolioGallery'
import { useState } from "react"
import "../globals.css"
const contentItems = {
        "Website Development": <WebPortfolioGallery/>,
        "App Development": <AppPortfolioGallery/>,
        "UI UX Design": <UIUXPortfolioGallery/>,
        "Logo Designing": <LogoPortfolioGallery/>,
      
      };

const PortfolioSec = () => {
    const [activeIndex, setActiveIndex] = useState("Website Development"); 

    const handleSwitch = (index) => {
      setActiveIndex(index);
    };

return (
    <section id='portfolio' className='bg-[#fff] h-full w-[100%] flex justify-center mt-32'>
        <div className='w-[80%] '>  

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-12'>
                {/* button conatiner */}
        <div >
        <div className='pb-10 '>
            <p className='font-base text-[#000] text-base font-normal '>Past Wins Gallery</p>
            <h2 className='text-[#000] text-4xl font-bold' >Projects We Accomplished</h2>
            <div className='text-[#000] '>________________________</div>
        </div>

            <div>
            <ul className='uppercase text-base font-normal text-[#787878]'>
          {Object.keys(contentItems).map((index) => (
            
            <button key={index} onClick={() => handleSwitch(index)} 
            className={`mb-8 block opacity-50 uppercase ml-16 hover:scale-150 ${activeIndex === index ? 'active-btn' : ''}`}>
            
              {index}
            </button>
            
          ))}</ul>
          
        </div>
                <div className='w-[1px] h-[200px] bg-[#000] ml-16'></div>
                <button className="ml-16">VIEW PORTFOLIO</button>
        </div>

                 {/* gallery container */}
        <div>
       
        {contentItems[activeIndex]}
        
         </div>

        </div>     
        </div>
    </section>
    
  )
}

export default PortfolioSec;
