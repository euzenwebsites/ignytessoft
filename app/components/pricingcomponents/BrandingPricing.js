
import React from 'react';
import PricingBox from './PricingBox';

const BrandingPricing = () => {
  return (
    <div>
      <div className='grid grid-cols-3 max-sm:grid-cols-1'>
        <PricingBox 
          name="Basic"
          item1="2 Stationery Design Set"
          item2="FREE Fax Template"
          item3="Print Ready Formats"
          item4="UNLIMITED Revisions"
          item5="Satisfaction Guarantee"
          item6="Wpsum dolor"
          price="99"
        />
        <PricingBox 
          name="Standard"
          item1="2 Stationery Design Set"
          item2="UNLIMITED Revisions"
          item3="Flyer Designr"
          item4="Brochure Design (Bi-fold/Tri-fold)"
          item5="Satisfaction Guarantee"
          price="199"
        />
        <PricingBox 
          name="Premium"
          item1="2 Stationery Design Set"
          item2="Packaging Design"
          item3="UNLIMITED Revisions"
          item4="T-Shirt Design"
          item5="Satisfaction Guarantee"
          price="399"
        />
      </div>
    </div>
  );
}

export default BrandingPricing;