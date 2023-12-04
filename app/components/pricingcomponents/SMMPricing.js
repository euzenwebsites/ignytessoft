import React from 'react';
import PricingBox from './PricingBox';

const SMMPricing = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1'>
        <PricingBox 
          name="Basic"
          item1="1 Platform of your choice (Expert Consultation Included)"
          item2="3 Post per week"
          item3="Business Page Optimization"
          item4="Content Creation"
          item5="Community Management"
            
          price="350"
        />
        <PricingBox 
          name="Standard"
          item1="2 Platform of your choice (Expert Consultation Included)"
          item2="3 Post per week"
          item3="Business Page Optimization"
          item4="Content Creation"
          item5="Community Management"
         
        
          price="700"
        />
        <PricingBox 
          name="Premium"
          item1="3 Platform of your choice (Expert Consultation Included)"
          item2="5 Post per week"
          item3="Business Page Optimization"
          item4="Content Creation"
          item5="Community Management"
          item6="Monthly Progress Report"
          item7="Copy Writing"
          item8="Likes Campaign"
          price="1500"
        />
      </div>
    </div>
  );
}

export default SMMPricing;