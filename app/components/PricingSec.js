"use client"

import WebsitePricing from "./pricingcomponents/WebsitePricing";
import AppPricing from "./pricingcomponents/AppPricing";
import LogoPricing from "./pricingcomponents/LogoPricing";
import BrandingPricing from "./pricingcomponents/BrandingPricing";
import SEOPricing from "./pricingcomponents/SEOPricing";
import SMMPricing from "./pricingcomponents/SMMPricing";
import { RevealWrapper } from "next-reveal";


import "../globals.css"
import { useState } from "react"
const contentItems = {
        "Website Development": <WebsitePricing/>,
        "App Development": <AppPricing/>,
        "Branding": <BrandingPricing/>,
        "Logo Designing": <LogoPricing/>,
        "SEO" :<SEOPricing/>,
        "Social Media Marketing":<SMMPricing/>
      
      };

const PricingSec = () => {
    const [activeIndex, setActiveIndex] = useState("Website Development"); 
 
    const handleSwitch = (index) => {
      setActiveIndex(index);

    };

return (
    <section id="pricing" className='bg-[#fff] h-full w-[100%] flex justify-center mt-32'>
        <div className='w-[80%] '>  

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-12'>
                {/* button conatiner */}
        <div >
        <div className='pb-10 '>
            <p className='font-base text-[#000] text-base font-normal '>Affordable Service Plans</p>
            <h2 className='text-[#000] text-4xl font-bold' >Pricing</h2>
            <div className='text-[#000] '>________________________</div>
        </div>

            <div>
            <ul className='uppercase text-base font-normal text-[#787878]'>
          {Object.keys(contentItems).map((index) => (
            
            <button key={index} id="btn" onClick={() => handleSwitch(index)} 
            className={`mb-8 block opacity-50 uppercase ml-16 hover:scale-150 ${activeIndex === index ? 'active-btn' : ''}`}>
              {index}
            </button>
            
          ))}</ul>
          
        </div>
        </div>

                 {/* gallery container */}
        <RevealWrapper interval={60} delay={400} origin='right'  duration={1500}>
        <div>
        {contentItems[activeIndex]}
        </div>
        </RevealWrapper>

        </div>     
        </div>
    </section>
    
  )
}

export default PricingSec;
