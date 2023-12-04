import React from 'react';
import PricingBox from './PricingBox';

const SEOPricing = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1'>
        <PricingBox 
          name="Basic"
          item1="Prior Analysis"
          item2="Business Analysis"
          item3="Consumer Analysis"
          item4="Competitor Analysis"
          item5="Selected Keywords Targeting"
          item6="Pages Keyword Targeted"
          item7="Webpage Optimization"
            
          price="600"
      
        />
        <PricingBox 
          name="Standard"
          item1="Prior Analysis"
          item2="Consumer Analysis"
          item3="Competitor Analysis"
          item4="30 Selected Keywords Targeting"
          item5="30 Pages Keyword Targeted"
          item6="Webpage Optimization"
          item7="Meta Tags Creation"
         
        
          price="900"
        />
        <PricingBox 
          name="Premium"
          item1="Prior Analysis"
          item2="Business Analysis"
          item3="Consumer Analysis"
          item4="Competitor Analysis"
          item5="70 Selected Keywords Targeting"
          item6="50 Pages Keyword Targeted"
          item7="Webpage Optimization"
          price="1200"
        />
      </div>
    </div>
  );
}

export default SEOPricing;